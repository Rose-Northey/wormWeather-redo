import request from 'superagent'

export async function getWormWeather() {
  const httpRequestObject = await request.get(
    'http://localhost:5173/api/v1/soildata'
  )

  function tidyArr(arr) {
    let indexestoKeep = [11, 35, 59]
    
  }


  const weatherArr = []
  const soil0_1 = httpRequestObject.body.hourly.soil_moisture_0_to_1cm
  const soil1_3 = httpRequestObject.body.hourly.soil_moisture_1_to_3cm
  const soil3_9 = httpRequestObject.body.hourly.soil_moisture_3_to_9cm
  const soil9_27 = httpRequestObject.body.hourly.soil_moisture_9_to_27cm
  const soil27_81 = httpRequestObject.body.hourly.soil_moisture_27_to_81cm

  const hourslyArr = httpRequestObject.body.hourly

  console.log(soil1_3)
  return httpRequestObject.body
}