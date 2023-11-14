import {getWormWeather} from '../apis/lawnWeatherApi'

function App() {
 
  getWormWeather()

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
      </div>
    </>
  )
}

export default App
