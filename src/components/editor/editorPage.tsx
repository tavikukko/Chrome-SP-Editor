import React from 'react';
import MonacoEditor from "react-monaco-editor";

const EditorPage: React.FC = () => {
  return (
      <MonacoEditor
          height="600"
          language="javascript"
          theme="vs-dark"
          value='//comment'
        />
  );
}

export default EditorPage;

