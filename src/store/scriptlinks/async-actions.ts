import { Dispatch } from 'redux';
import * as actions from './actions';
import { ScriptLinksActions, IScriptLink } from './types';
import { getPnpjsPath, getSystemjsPath } from '../utilities/utilities';
import { exescript } from '../utilities/chromecommon';
import { getCustomActions } from '../home/chromescriptlinks';

export async function getAllScriptLinks(dispatch: Dispatch<ScriptLinksActions>) {

  dispatch(actions.setLoading(true));
  // add listener to receive the results from inspectedPage
  (window as any).port.onMessage.addListener(function getAllScriptLinksCallback(message: any) {
    if (
      typeof message !== "object" ||
      message === null ||
      message === undefined ||
      message.source === undefined
    ) {
      return;
    }

    switch (message.function) {
      case "getCustomActions":
        if (message.success) {
          const scriptLinks: IScriptLink[] = message.result.map((uca: IScriptLink) => {
            if (uca && uca.ScriptBlock && uca.ScriptBlock.toLocaleLowerCase().indexOf("href=\"") > -1) {
              let url = uca.ScriptBlock.substring(uca.ScriptBlock.toLocaleLowerCase().indexOf("href=\""));
              url = url.substring(url.indexOf("\"") + 1);
              url = url.substring(0, url.indexOf("\""));
              uca.Url = url;
            } else {
              uca.Url = uca.ScriptSrc;
            }
            uca.Scope = uca.Scope === '2' ? 'Current Web' : "Site Collection"
            // TODO: what to do with other custom actions?
            return uca
          });
          dispatch(actions.getAllScriptLinks(scriptLinks));
          dispatch(actions.setLoading(false));
        } else {
          // TODO: handle errors
        }
        (window as any).port.onMessage.removeListener(getAllScriptLinksCallback)
        break;
    }
  });

  // execute script in inspectedWindow
  let script = `${getPnpjsPath()} ${getSystemjsPath()} ${exescript} ${getCustomActions}`;
  script += " exescript(getCustomActions);";
  chrome.devtools.inspectedWindow.eval(script);
}

