import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <h1>App working!</h1>
        <Outlet />
      </div>
    </>
  )
}

export default App
