import React from 'react';
import qute from '../../../assets/icons/quote.svg';
import pic1 from '../../../assets/images/people1.png';
import pic2 from '../../../assets/images/people2.png';
import pic3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Arefin Reza Saim',
            review_text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Dhaka',
            img: pic1

        },
        {
            _id: 2,
            name: 'Arefin Reza Saim',
            review_text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Dhaka',
            img: pic2

        },
        {
            _id: 3,
            name: 'Arefin Reza Saim',
            review_text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Dhaka',
            img: pic3

        },
    ]

    return (
        <section className='mt-8'>
            <div className='flex justify-between'>
                <div >
                    <h1 className='text-xl text-primary font-bold uppercase'>Testimonial</h1>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={qute} alt="quete" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;