import request from 'superagent'

export async function getWormWeather() {
  const httpRequestObject = await request.get(
    'http://localhost:5173/api/v1/soildata',
  )

  function tidyArr(arr) {
    const noonHours = arr.filter((element, index) => {
      return index === 11 || index === 35 || index === 59
    })
    return noonHours
  }

  const weatherArr = []
  const soil0_1 = tidyArr(httpRequestObject.body.hourly.soil_moisture_0_to_1cm)
  const soil1_3 = tidyArr(httpRequestObject.body.hourly.soil_moisture_1_to_3cm)
  const soil3_9 = tidyArr(httpRequestObject.body.hourly.soil_moisture_3_to_9cm)
  const soil9_27 = tidyArr(httpRequestObject.body.hourly.soil_moisture_9_to_27cm)
  const soil27_81 = tidyArr(httpRequestObject.body.hourly.soil_moisture_27_to_81cm)



  return httpRequestObject.body
}
