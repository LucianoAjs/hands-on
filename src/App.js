import React, { useState } from 'react';
import './App.css';
import { ChildComponent } from './components/ChildComponent';

function App() {
  const [color, setColor] = useState('Red');

  return (
    <div className='App'>
      <ChildComponent color={color} />
      <button onClick={() => setColor('Blue')}>Change the color</button>
    </div>
  );
}

export default App;
