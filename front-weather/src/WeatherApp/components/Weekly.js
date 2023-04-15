import React from 'react';
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

const Weekly = ({ weekData }) => {
    return (
        <CardMedia className="weekly-root">
            <div className="weekly-gridList" cellheight="auto" spacing={4}>
                {weekData.map((data) => (
                    <div key={data.key} cols={0.5} className="weekly-day">
                        {
                            (data.key === 0) ?
                                <Typography className="weekly-info" gutterBottom color='error'>
                                    Today
                                </Typography> :
                                <Typography className="weekly-info" gutterBottom color='error'>
                                    {data.day}
                                </Typography>
                        }
                        <img
                            src={`https://openweathermap.org/img/w/${data.icon}.png`}
                            alt={data.icon}
                            className="weekly-weather__icon"
                        />
                        <Typography gutterBottom className="weekly-info">
                            {data.lTemp}°C - {data.hTemp}°C
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            {data.main},
                        </Typography>
                        <h4 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>{data.desc}</h4>
                    </div>
                ))}
            </div>
        </CardMedia>
    );
}

export default Weekly