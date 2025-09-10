import { useState } from 'react'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

console.log(import.meta);
console.log(import.meta.env);
console.log('API_URL:', API_URL);

function App() {
  const [serverMessage, setServerMessage] = useState('')

  async function fetchMessage() {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      setServerMessage(data.message)
    } catch (error) {
      console.error('Error fetching message:', error)
      setServerMessage('Error fetching message')
    }
  }

  return (
    <>
      <h1>Vite + React edited</h1>
      <div className="card">
        <button onClick={fetchMessage} style={{ marginLeft: '10px' }}>
          Fetch Server Message
        </button>
        {serverMessage && <p>Server says: {serverMessage}</p>}
      </div>
    </>
  )
}

export default App
