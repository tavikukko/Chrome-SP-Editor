import React from 'react';
import './App.css';
import MonacoEditor from "react-monaco-editor";

const App: React.FC = () => {
  return (
      <MonacoEditor
          height="600"
          language="javascript"
          theme="vs-dark"
          value='//comment'
        />
  );
}

export default App;
