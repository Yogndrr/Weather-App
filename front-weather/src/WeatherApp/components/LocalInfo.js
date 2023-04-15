import React from 'react'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

const LocalInfo = ({ today: { city, country, date, population } }) => {
    return (
        <CardMedia style={{ textAlign: 'center', marginTop: '7%', marginBottom: '7%' }}>
            <Typography variant="h3" gutterBottom>
                {city}, {country}
            </Typography>
            <Typography variant="h5" gutterBottom>
                {date}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Population: {population.toLocaleString()}
            </Typography>
        </CardMedia>
    )
}

export default LocalInfo
