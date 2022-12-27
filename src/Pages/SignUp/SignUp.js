import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    };
    return (
        <div className='h-[800px] flex justify-center items-center shadow-2xl'>
            <div className="w-96 p-7 drop-shadow-2xl">
                <h1 className='text-center text-xl'>Sign-Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label className="label"><span className="label-text">Name</span></label>
                    <input placeholder='Enter Your Name Here' className="input input-bordered w-full" {...register("name", { required: "Name is required" })} />
                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}

                    <label className="label"><span className="label-text">Email</span></label>
                    <input type='email' placeholder='Enter Your Email Here' className="input input-bordered w-full" {...register("email", { required: "Email is required" })} />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}

                    <label className="label"><span className="label-text">Password</span></label>
                    <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "password must be 6 character length" } })} placeholder="Password" className="input input-bordered w-full" />
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                    <input className='btn btn-accent w-full mt-3' value="Sign-up" type="submit" />
                </form>
                <p className='text-center'>Already Have an Account <Link to='/login' className='text-secondary'>Login now</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>

        </div>
    );
};

export default SignUp;