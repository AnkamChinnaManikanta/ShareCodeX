import MonacoEditor from '@monaco-editor/react';
import { ChevronDown, Play } from 'lucide-react';
import React, { useState } from 'react';

const languages = [
  { id: 'javascript', name: 'JavaScript' },
  { id: 'python', name: 'Python' },
  { id: 'cpp', name: 'C++' },
  { id: 'java', name: 'Java' },
];

function Editor() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [output, setOutput] = useState('');
  const [code, setCode] = useState('// Start coding here\n');

  const handleRunCode = () => {
    setOutput(`Running ${selectedLanguage.name} code...\n${code}`);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="relative inline-block text-left">
          <div className="flex items-center space-x-2">
            <select
              value={selectedLanguage.id}
              onChange={(e) => setSelectedLanguage(languages.find(lang => lang.id === e.target.value) || languages[0])}
              className="bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {languages.map((language) => (
                <option key={language.id} value={language.id}>
                  {language.name}
                </option>
              ))}
            </select>
            <ChevronDown className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <button
          onClick={handleRunCode}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Play className="h-4 w-4 mr-2" />
          Run Code
        </button>
      </div>

      <div className="flex-grow">
        <MonacoEditor
          height="60vh"
          defaultLanguage={selectedLanguage.id}
          defaultValue={code}
          theme="vs-dark"
          onChange={(value) => setCode(value || '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>

      <div className="bg-gray-900 p-4 h-[30vh] overflow-auto">
        <pre className="text-green-400 font-mono text-sm">{output}</pre>
      </div>
    </div>
  );
}

export default Editor