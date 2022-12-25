import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className="hero mt-8">
            <div className="hero-content flex-col justify-center lg:flex-row-reverse">
                <div className='lg:w-4/12 lg:ml-10'>
                    <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-4 text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
                <img src={treatment} className="lg:w-4/12 w-full rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default DentalCare;