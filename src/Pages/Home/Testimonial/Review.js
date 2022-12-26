import React from 'react';

const Review = ({ review }) => {
    const { name, location, review_text, img } = review;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review_text}</p>
                <div className='flex mt-5'>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h2 className="text-xl font-bold">{name}</h2>
                        <h2 className="text-base">{location}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;