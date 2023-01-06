import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';


const AvailabeAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');



    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <p className='text-secondary font-bold text-center my-10'>Avaiable Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption key={appointmentOption._id} setTreatment={setTreatment} appointmentOption={appointmentOption}></AppointmentOption>)
                }

            </div>
            {
                treatment && <BookingModal refetch={refetch} treatment={treatment} setTreatment={setTreatment} selectedDate={selectedDate}></BookingModal>
            }

        </div>
    );
};

export default AvailabeAppointments;