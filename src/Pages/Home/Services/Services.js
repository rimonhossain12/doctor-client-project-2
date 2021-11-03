import React from 'react';
import Fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Teath from '../../../images/whitening.png';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';


const services = [
    {
        id: '1', name: 'Fluoride Treatment', description: '   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quae odit temporibus saepe fugiat iste harum sit laboriosam corrupti dicta?',
        img: Fluoride
    },

    {
        id: '2', name: 'Cavity Filling', description: '   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quae odit temporibus saepe fugiat iste harum sit laboriosam corrupti dicta?',
        img: Cavity
    },

    {
        id: '3', name: 'Teath Whitening', description: '   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quae odit temporibus saepe fugiat iste harum sit laboriosam corrupti dicta?',
        img: Teath
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
           <Container style={{textAlign:'success.main'}}>
                <Typography variant="h6" component="div" mt={5} color={'#2BA2F3'} style={{ fontWeight: '500' }}>
                    OUR SERVICE
                </Typography>
                <Typography variant="h4" component="h2" mt={3} style={{ fontWeight: '400' }}>
                    Services we provided
                </Typography>;
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, index) => (
                       
                            <Service key={service.name}
                                service={service}
                            >

                            </Service>
                       
                    ))}
                </Grid>
           </Container>
        </Box>
    );
};

export default Services;