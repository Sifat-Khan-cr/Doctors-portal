import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
// import Header from "./Header";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState('');
    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 drop-shadow-2xl'>
                <h1 className='text-center text-xl'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email")} placeholder="Email here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password")} placeholder="Password" className="input input-bordered w-full" />
                        <label className="label"><span className="label-text">forget password ?</span></label>
                    </div>
                    <input className='btn btn-accent w-full' value={"login"} type="submit" />
                </form>
                <p className='text-center'>New to Doctors Portal <Link to='/signup' className='text-secondary'>Create an Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;