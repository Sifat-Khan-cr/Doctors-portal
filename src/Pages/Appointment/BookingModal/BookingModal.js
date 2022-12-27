import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const slot = form.slot.value;
        const patient = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            selectedDate: date,
            Patient: patient,
            email: email,
            slot: slot,
            phone: phone,
            treatment: name
        }
        console.log(booking);
        form.reset();
        setTreatment(null);

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name='date' type="text" value={format(selectedDate, 'PP')} className=" input-bordered input w-full" disabled />
                        <select name='slot' className="select select-bordered w-full">

                            {
                                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Name here" className="input w-full input-bordered" />
                        <input name='email' type="email" placeholder="Email here" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone here" className="input w-full input-bordered" />
                        <br />
                        <input type='submit' className='btn btn-accent w-full input-bordered' value="Book Now" />
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;