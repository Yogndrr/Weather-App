import axios from 'axios'
import React, { useEffect, useState } from 'react'

const WeatherNow = () => {

    const [weatherInfo, setWeatherInfo] = useState([])
    const [input, setInput] = useState("")
    const [error, setError] = useState(false)

    const API_KEY = 'API_KEY'
    const URL = "https://api.openweathermap.org/data/2.5/weather"

    const changeHandler = (event) => {
        setInput(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        fetchAPI(input)
        setInput("")
    }

    const fetchAPI = (input) => {
        axios.get(`${API_KEY}?q=${input}&appid=${URL}&units=metric`)
            .then((response) => {
                console.log(response.data)
                setWeatherInfo([response.data])
            })
            .catch((error) => {
                console.error(error)
                setError(true)
            })
    }

    useEffect(() => {
        fetchAPI("dehradun")
    }, [])

    return (
        <div className='container'>
            <div className="weather">
                <div className="search">
                    <form onSubmit={submitHandler}>
                        <input type="text" value={input} onChange={changeHandler} />
                        <button type='submit'>Submit</button>
                    </form>
                </div>

                {
                    error
                        ?
                        <div>Error</div>
                        :
                        <div className="info">
                            {
                                weatherInfo.map((wfo, index) => (
                                    <div key={index}>
                                        <h1>City : {wfo.name}</h1>
                                        <h1>Weather : {wfo.main.temp}</h1>
                                        <h1>Weather Description : {wfo.weather[0].description}</h1>
                                        <h1>Humidity: {wfo.main.humidity}%</h1>
                                        <h1>Sunrise: {new Date(wfo.sys.sunrise * 1000).toLocaleTimeString()}</h1>
                                        <h1>Sunset: {new Date(wfo.sys.sunset * 1000).toLocaleTimeString()}</h1>
                                    </div>
                                ))
                            }
                        </div>
                }

            </div>
        </div>
    )
}

export default WeatherNow