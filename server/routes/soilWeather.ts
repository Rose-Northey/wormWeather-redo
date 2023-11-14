import { Router } from 'express'
import request from 'superagent'

import * as db from '../db/fruits.ts'

const router = Router()
const locations = {
  name: 'wellington',
  lat: -41.2866,
  long: 174.7756,
}

router.get('/', async (req, res) => {
  console.log('this is working')
  try {
    request
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${locations.lat}&longitude=${locations.long}&hourly=soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm&forecast_days=3`,
      )
      .then((response) => {
        return res.json(response.body)
      })
      .catch((err) => console.log('API error: ', err.message))
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
