import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { signIn, googlePopup } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathname || '/';
    const onSubmit = data => {
        setLoginError('');
        reset();
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast('Login success');
                // console.log(user)
                navigate(from, { replace: true });

            })
            .catch(error => {
                // console.error(error.message);
                setLoginError(error.message);
            })

    };
    return (
        <div className='h-[800px] flex justify-center items-center shadow-2xl'>
            <div className="w-96 p-7 drop-shadow-2xl">
                <h1 className='text-center text-xl'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type='email' placeholder='Enter Your Email Here' className="input input-bordered w-full" {...register("email", { required: "Email is required" })} />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}

                    <label className="label"><span className="label-text">Password</span></label>
                    <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "password must be 6 character length" } })} placeholder="Password" className="input input-bordered w-full" />
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                    <input className='btn btn-accent w-full mt-3' value="Login" type="submit" />
                    {
                        loginError && <p className='text-red-600'>{loginError}</p>
                    }
                </form>
                <p className='text-center'>New to Doctors Portal <Link to='/signup' className='text-secondary'>Create an account</Link></p>
                <div className="divider">OR</div>
                <button onClick={googlePopup} className='btn btn-outline w-full'>Continue With Google</button>
            </div>

        </div>
    );
};

export default Login;