import React, { useState } from 'react';
import './App.css';
import { GoodMorningApi } from '@codegen/api'

function App() {
  const [message, setMessage] = useState('');

  const clickGoodMorning = async () => {
    const res = await new GoodMorningApi().goodMorning();
    setMessage(res.message);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p> Sample Open API schema APP Go, TypeScript </p>
      </header>
      <div className="container">
        <div className='buttons'>
          <div>
            <button>Hello</button>
          </div>
          <div>
            <button onClick={clickGoodMorning}>GoodMorning</button>
          </div>
          <div>Message: {message}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
