import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card text-primary-content shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-primary font-bold block mx-auto">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'try onother day'}</p>
                <p>{slots.length}{slots.length > 1 ? " slots" : " slot"} avaiable</p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} onClick={() => setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn btn-secondary bg-gradient-to-r from-primary to-secondary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;