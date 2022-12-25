import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import bg from '../../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <div className="hero mt-10" style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} className="lg:w-1/2 hidden lg:block -mt-32 rounded-lg shadow-2xl" alt='doctor' />
                <div>
                    <h1 className='text-primary text-lg font-bold'>Appointment</h1>
                    <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;