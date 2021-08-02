import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello'])
   
console.log(input)
console.log(messages)

const sendMessage = (event) => {
  setMessages([...messages, input]);
  setInput('');
}
  return (
    <div className="App">
      <h1>Hello clever programming</h1>

      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={sendMessage}>Send Message</button>
     
     {/* messages themselves */}
     
    </div>
  );
}

export default App; 
