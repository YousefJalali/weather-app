import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const city = req.query

  if (!city) {
    return res
      .status(400)
      .json({ error: 'Something went wrong, please try again' })
  }

  // const lat = Number(new URLSearchParams(city).get('lat')).toFixed(6)
  // const lon = Number(new URLSearchParams(city).get('lon')).toFixed(6)

  const q = 'lat=' + city.lat + '&lon=' + city.lon
  // const q = 'lat=' + lat + '&lon=' + lon

  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${q}&appid=${process.env.WEATHER_KEY}&units=metric&lang=en`
    )

    const d = await data.json()

    res.status(200).json(d)
  } catch (error) {
    // console.log(error)
    res.status(500).json(error)
  }
}
