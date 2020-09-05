import React, { useState } from 'react';

import './App.css';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [state, setState] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfPass: "",
  });
  return (
    <div className="App">
      <Form inputs={state} setInputs={setState}/>
      <Display data={state}/>
    </div>
  );
}

export default App;
