import React, { useState } from 'react';
import './WeatherApp.css';
import axios from "axios";
import Search from './components/Search';
import { weatherForecast } from './Api'
import Weather from './components/Weather';
import Loader from './components/Loader';

const WeatherApp = () => {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nocvember', 'December',]
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const [input, setInput] = useState("")
    const [current, setCurrent] = useState({})
    const [weekInfo, setWeekInfo] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleInputChange = (event) => {
        setInput(event.target.value)
    };

    const handleSearchCity = (event) => {
        event.preventDefault();
        setLoading(true)

        axios.get(weatherForecast(input))
            .then((response) => {
                const data = response.data

                const currentDate = new Date()
                const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`

                const sunset = new Date(data.list[0].sunset * 1000).toLocaleTimeString().slice(0, 4)
                const sunrise = new Date(data.list[0].sunrise * 1000).toLocaleTimeString().slice(0, 4)

                const newCurrent = {
                    city: data.city.name,
                    country: data.city.country,
                    date,
                    population: data.city.population,
                    desc: data.list[0].weather[0].description,
                    main: data.list[0].weather[0].main,
                    icon: data.list[0].weather[0].icon,
                    temp: data.list[0].temp.day,
                    hTemp: data.list[0].temp.max,
                    lTemp: data.list[0].temp.min,
                    sunrise,
                    sunset,
                    clouds: data.list[0].clouds,
                    humidity: data.list[0].humidity,
                    wind: data.list[0].speed,
                    pressure: data.list[0].pressure,
                }

                const weekData = data.list
                const newWeekInfo = weekData.map((data, index) => {
                    return {
                        key: index,
                        main: data.weather[0].main,
                        day: new Date(data.dt * 1000).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).slice(0, 3),
                        desc: data.weather[0].description,
                        icon: data.weather[0].icon,
                        hTemp: data.temp.max,
                        lTemp: data.temp.min,
                    }
                })

                setLoading(false)
                setError(false)
                setCurrent(newCurrent)
                setWeekInfo(newWeekInfo)
            })

            .catch((error) => {
                console.log(error);

                setLoading(false)
                setError(true)
                setCurrent({})
                setWeekInfo([])
            })
    }

    return (
        <>
            <Search input={input} changeHandler={handleInputChange} submitHandler={handleSearchCity} />
            {
                loading === true
                    ?
                    <Loader />
                    :
                    <div>
                        {
                            current.country !== undefined
                                ?
                                <div className="weather">
                                    <Weather today={current} weekly={weekInfo} />
                                </div>
                                :
                                error
                                    ?
                                    <p className="error__loc">Sorry! we donot have any information on specified location.</p>
                                    :
                                    <div>

                                    </div>
                        }
                    </div>
            }
        </>
    )
}

export default WeatherApp;
