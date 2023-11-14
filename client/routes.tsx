import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import LocationInput from './components/LocationInput'
import WeatherPage from './components/WeatherPage'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<LocationInput />} />
    <Route path="/locations/:lawn" element={<WeatherPage />} />
  </Route>,
)
