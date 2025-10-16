import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../AuthContext/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {

    const {SignInUser} = use(AuthContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        SignInUser(email, password).then(result => {
            console.log(result);
            toast.success("LogIn Success")
        }).catch(err => {
            console.log(err);
            toast.error("Something went wrong")
        })
        
    }

    return (
        
  <div className='mt-10 space-y-5'>
     <h1 className="text-5xl text-center font-bold">Login now!</h1>
      <div className="card bg-base-100 w-full mx-auto  max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input 
          name='email'
          type="email" 
          className="input" 
          placeholder="Email" />
          <label className="label">Password</label>
          <input 
          name='password'
          type="password" 
          className="input" 
          placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>Not have any account ? <Link to={'/register'} className='text-blue-400 hover:text-blue-700 text-bold'>Register</Link></p>
        </form>
      </div>
    </div>
  </div>
    );
};

export default Login;