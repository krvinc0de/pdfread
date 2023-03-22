import { useState } from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '/src/styles.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div  className='divergente' style={{
        height: '100%',
       // width: '100%
        //border: '1px solid rgba(0, 0, 0, 0.3)',
    }}>
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js"></Worker>
        <Viewer fileUrl="./src/assets/temsandconditions.pdf" />
    </div>
  )
}

export default App
