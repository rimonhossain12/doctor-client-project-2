import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';
import { Typography } from '@mui/material';
import { textAlign } from '@mui/system';


const backgroundImg  = {
    background:`url(${bg})`,
    backgroundColor:'rgba(45,58,74,.9)',
    backgroundBlendMode:'darken, luminosity',
    marginTop:175
}


const AppointmentBanner = () => {
    return (
        <Box style={backgroundImg} sx={{ flexGrow: 1 }} mt={5}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                <img src={doctor} alt="" style={{width:400,marginTop:'-110px'}} />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography variant="h4" component="h4" style={{ color:'#B7F1EF',textAlign:'start'}}>
                     APPOINMENT  
                    </Typography>;
                    <Typography variant="h4" component="h4" style={{ color: 'white',textAlign:'start'}}>
                      Make an appointment <br />
                      Today
                    </Typography>;

                    <Typography variant="div" component="h4" style={{ color: 'white', textAlign: 'start',fontWeight:'normal' }}>
                        It is a long established fact that a reader wil be distractebdy thereadable content of a page  <br /> when looking at its
                    </Typography>;

                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;