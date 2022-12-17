import React from 'react';
import AppBar from './AppBar';

function App() {
  const login = () => {};
  return (
    <div className="flex flex-col h-screen">
      {window.Main && (
        <div className="flex-none">
          <AppBar />
        </div>
      )}
      <div className="flex-auto">
        <div className=" flex flex-col justify-center items-center h-full bg-gray-800 space-y-4">
          <h1 className="text-5xl text-gray-200">Narada</h1>
          <button
            className="bg-yellow-400 py-2 px-4 rounded focus:outline-none shadow hover:bg-yellow-200"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
