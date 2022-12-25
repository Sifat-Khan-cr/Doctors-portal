import React from 'react';
import flowrite from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import white from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'lorem Ipsum dummy printing and typesetting industry Ipsum',
            img: flowrite
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'lorem Ipsum dummy printing and typesetting industry Ipsum',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'lorem Ipsum dummy printing and typesetting industry Ipsum',
            img: white
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h1 className='text-primary text-xl uppercase font-bold'>Our Services</h1>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;