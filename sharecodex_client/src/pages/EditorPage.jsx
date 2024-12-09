import React from 'react';
import Editor from '../components/Editor';

function EditorPage() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1">
        <Editor />
      </div>
    </div>
  );
}

export default EditorPage