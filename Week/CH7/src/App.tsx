import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/o8MBQeSj1IeFnRGbCygLPdNyIeWqKNIC7AgC0A~tplv-photomode-zoomcover:480:480.jpeg?x-expires=1701262800&x-signature=B%2BOY8O6iydId39g%2FeYxvXdCr0bg%3D"className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
