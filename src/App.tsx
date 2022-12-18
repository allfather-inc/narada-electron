import React from 'react';
import AppBar from './AppBar';
import Button from './components/Button';
import Authenticator from './services/Authenticator';

function App() {
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
          <Button text="Login" onClick={Authenticator.authenticate} />
        </div>
      </div>
    </div>
  );
}

export default App;
