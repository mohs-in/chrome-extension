import React, { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='main'>
      <input type="text" className="main--input" />
      <button className="main--btn">SAVE INPUT</button>
    </main>
  )
}

export default App
