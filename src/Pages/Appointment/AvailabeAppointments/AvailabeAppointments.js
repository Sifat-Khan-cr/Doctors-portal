import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';


const AvailabeAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div>
            <p className='text-secondary font-bold text-center my-10'>Avaiable Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption key={appointmentOption._id} setTreatment={setTreatment} appointmentOption={appointmentOption}></AppointmentOption>)
                }

            </div>
            {
                treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} selectedDate={selectedDate}></BookingModal>
            }

        </div>
    );
};

export default AvailabeAppointments;