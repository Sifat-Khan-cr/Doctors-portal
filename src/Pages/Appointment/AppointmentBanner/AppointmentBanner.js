// import React, { useState } from 'react';
import background from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
// import { format } from 'date-fns';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    // const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className="hero h-6/12" style={{
            backgroundImage: `url(${background})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-6/12 rounded-lg shadow-2xl ml-10" alt='chair' />
                <div>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;