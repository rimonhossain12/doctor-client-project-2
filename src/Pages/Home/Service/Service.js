import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';

const Service = (props) => {
    const {name,img,description} = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}  >
            <Card sx={{ minWidth: 275, border:0,boxShadow:0 }} >
                <CardMedia
                    component="img"
                    image={img}
                    style={{width:'auto',margin:'0 auto',height:'80'}}
                    alt="Paella dish"
                />
            <CardContent>
                    <Typography sx={{ fontSize: 24, fontWeight: 'bold' }} color="#9e9e9e" gutterBottom>
                   {name}
                </Typography>
                <Typography variant="h5" component="div">
                    
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
        </Grid>
    );
};

export default Service;