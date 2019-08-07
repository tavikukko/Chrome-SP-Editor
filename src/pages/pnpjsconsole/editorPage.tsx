import React from 'react';
import MonacoEditor from "react-monaco-editor";

const PnPjsConsole: React.FC = () => {
  return (
      <MonacoEditor
          height="600"
          language="javascript"
          theme="vs-dark"
          value='//comment'
        />
  );
}

export default PnPjsConsole;

