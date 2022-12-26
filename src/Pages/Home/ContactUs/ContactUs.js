import React from 'react';
import bg from '../../../assets/images/appointment.png';


const ContactUs = () => {
    return (
        <div className='mt-10 py-10' style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className='text-center'>
                <h1 className='text-primary text-xl uppercase font-bold'>contact us</h1>
                <h1 className='text-3xl text-white'>Stay Connected With Us</h1>
                <input type="email" placeholder="Email Address" className="input w-full max-w-xs block mx-auto mt-5" />
                <input type="text" placeholder="Subject" className="input w-full max-w-xs block mx-auto mt-2" />
                <textarea className="textarea w-full block mx-auto mt-2 max-w-xs" placeholder="Your Massage"></textarea>
                <button className="btn btn-primary bg-gradient-to-r mt-5 from-primary to-secondary text-white font-bold">Submit</button>
            </div>


        </div>
    );
};

export default ContactUs;