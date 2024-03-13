import React, { useState } from 'react'

import './App.css'

function App() {
  const [leads, setLeads] = useState([])
  const btnClicked = () => {
    let inputEl = document.getElementById('inputValue');
    let inputValue = inputEl.value;
    setLeads(prevLeads => [...prevLeads,inputValue])
    
    console.log('button clicked')
  }

  const lists = leads.map(item => <li key={item}>{item}</li>)
  return (
    <main className='main'>
      <label  className='main--label' htmlFor="">Enter the websites below to save</label>
      <input type='text'  className="main--input" id='inputValue' />
      <button className="main--btn" onClick={btnClicked}>SAVE INPUT</button>
      <ul className='main--ul'>{lists}</ul>
    </main>
  )
}

export default App
