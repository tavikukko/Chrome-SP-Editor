
window.addEventListener('message', function (event) {

  if (event.source !== window) {
    return;
  }
  try {
    var message = JSON.parse(event.data);

    if (typeof message !== 'object' || message === null ||
      message === undefined || message.source === undefined) {
      return;
    }

    chrome.runtime.sendMessage(message);
  } catch (e) {
    // swallow it
  }

});
