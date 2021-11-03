import React from 'react';
import Fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/fluoride.png';
import Teath from '../../../images/whitening.png';



const services = [
    {
        id: '1', name: 'Fluoride Treatment', description:'   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quae odit temporibus saepe fugiat iste harum sit laboriosam corrupti dicta?',
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
        <div>
            <h2>This is services</h2>
         
        </div>
    );
};

export default Services;