import { Code2, Users, Zap } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-indigo-600">ShareCodeX</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            ShareCodeX is your ultimate collaborative IDE for real-time coding. Experience seamless teamwork, multi-language support, and instant code execution.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button
                onClick={() => navigate('/editor')}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Create Code Session
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Code2 className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Multi-Language Support</h3>
              <p className="mt-2 text-base text-gray-500">
                Write code in all major programming languages with syntax highlighting and intelligent code completion.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Real-time Collaboration</h3>
              <p className="mt-2 text-base text-gray-500">
                Collaborate with your team in real-time. See changes as they happen and work together seamlessly.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Zap className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Instant Code Execution</h3>
              <p className="mt-2 text-base text-gray-500">
                Run your code instantly with our integrated console and see real-time outputs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
