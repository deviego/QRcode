import { useState } from 'react'
import './App.css'
import { QRcodeCanvas } from './components/QrCodeCanvas'

function App() {
  const [text, setText] = useState('')

  return (
    <div className="App">
      <main>
        <div className='container'>
          <h1>QRcode generator</h1>
        <input 
        onChange={e => setText(e.target.value)} 
        value={text}/>
        </div>
        
        <div className='qrcode'><QRcodeCanvas text={text}/></div>
        
      </main>
    </div>
  )
}

export default App
