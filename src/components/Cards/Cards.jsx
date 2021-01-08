import React from 'react';
import { Card,  CardContent,    Typography,     Grid, StylesProvider } from "@material-ui/core";

import styles from "./Cards.module.css";

const Cards = ( { data: { confirmed, recovered, deaths, lastUpdate } } ) => {
        if (!confirmed) {
             return "Loading..."   
        }
        return (
                <div className={ styles.container }>
                        <Grid
                                container 
                                spacing={3}
                                justify="center"
                        >
                                <Grid
                                        item
                                        component={Card}
                                >
                                        <CardContent>
                                                <Typography
                                                        color="textSecondary"
                                                        gutterBottom
                                                >
                                                        Infected
                                                </Typography>
                                                <Typography
                                                        variant="h5"
                                                >
                                                        { confirmed.value }
                                                </Typography>
                                                <Typography 
                                                        color="textSecondary"
                                                >
                                                        Real Date
                                                </Typography>
                                                <Typography
                                                        varient="body2"
                                                >
                                                        Number of active cases
                                                </Typography>
                                        </CardContent>
                                        
                                </Grid>

                                <Grid
                                        item
                                        component={Card}
                                >
                                        <CardContent>
                                                <Typography
                                                        color="textSecondary"
                                                        gutterBottom
                                                >
                                                        Recovered
                                                </Typography>
                                                <Typography
                                                        variant="h5"
                                                >
                                                        Real Data
                                                </Typography>
                                                <Typography 
                                                        color="textSecondary"
                                                >
                                                        Real Date
                                                </Typography>
                                                <Typography
                                                        varient="body2"
                                                >
                                                        Number of Recovered cases
                                                </Typography>
                                        </CardContent>
                                        
                                </Grid>

                                <Grid
                                        item
                                        component={Card}
                                >
                                        <CardContent>
                                                <Typography
                                                        color="textSecondary"
                                                        gutterBottom
                                                >
                                                        Disieased
                                                </Typography>
                                                <Typography
                                                        variant="h5"
                                                >
                                                        Real Data
                                                </Typography>
                                                <Typography 
                                                        color="textSecondary"
                                                >
                                                        Real Date
                                                </Typography>
                                                <Typography
                                                        varient="body2"
                                                >
                                                        Number of diseased
                                                </Typography>
                                        </CardContent>
                                        
                                </Grid>
                        </Grid>
                </div>  
        )
}

export default  Cards;
