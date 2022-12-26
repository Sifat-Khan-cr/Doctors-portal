import React from 'react';

const AppointmentOption = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card text-primary-content shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-primary font-bold block mx-auto">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'try onother day'}</p>
                <p>{slots.length} slots avaiable</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-secondary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;