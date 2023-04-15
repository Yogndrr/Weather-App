import React from 'react'
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import pressure from '../assets/pressure.svg'
import wind_speed from '../assets/wind_speed.svg'
import humidity from '../assets/humidity.svg'
import sunrise from '../assets/sunrise.svg'
import sunset from '../assets/sunset.svg'
import "./Today.css"

const Today = ({ today }) => {
    return (
        <CardContent>
            <div className="today_main">
                <div className="today_text__left">
                    <img src={`https://openweathermap.org/img/w/${today.icon}.png`} alt={today.icon} className="today_weather__icon" />
                    <Typography variant="h3" gutterBottom >
                        {today.temp}°C
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {today.main}, {today.desc}
                    </Typography>
                </div>
                <div className="today_text__left">

                    <Typography variant="h6" gutterBottom >
                        <img src={sunrise} alt="Logo" className="today_unit__icon" /> {today.sunrise} A.M.
                    </Typography>
                    <Typography variant="h6" gutterBottom >
                        <img src={sunset} alt="Logo" className="today_unit__icon" /> {today.sunset} P.M.
                    </Typography>

                </div>
            </div>
            <div>
                <img src={pressure} alt="Logo" className="today_unit__icon1" />
                <span className="today_span">{today.pressure} hPa</span>
                <img src={humidity} alt="Logo" className="today_unit__icon" />
                <span className="today_span">{today.humidity} %</span>
                <img src={wind_speed} alt="Logo" className="today_unit__icon" />
                <span className="today_span">{today.wind} m/s N</span>
            </div>
        </CardContent>
    )
}

export default Today
