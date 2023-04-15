import React from 'react';
import "./Weather.css"
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

import LocalInfo from './LocalInfo';
import Today from './Today';
import Weekly from './Weekly'

const Weather = ({ today, weekly }) => {

    return (
        <div className="weather-main">
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                    <Card className="weather-section" >
                        <LocalInfo today={today} />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className="weather-section">
                        <Today today={today} />
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card className="weather-section">
                        <Weekly weekData={weekly} />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default Weather