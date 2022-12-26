import React from 'react';
import { format } from 'date-fns';


const AvailabeAppointments = ({ selectedDate }) => {
    return (
        <div>
            <p className='text-secondary font-bold text-center mt-10'>Avaiable Appointments on {format(selectedDate, 'PP')}</p>

        </div>
    );
};

export default AvailabeAppointments;