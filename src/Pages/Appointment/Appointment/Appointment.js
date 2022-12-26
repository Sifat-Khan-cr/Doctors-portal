import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailabeAppointments from '../AvailabeAppointments/AvailabeAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
            <AvailabeAppointments selectedDate={selectedDate}></AvailabeAppointments>

        </div>
    );
};

export default Appointment;