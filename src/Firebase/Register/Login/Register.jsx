import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../AuthContext/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {

    const {createUser} = use(AuthContext)

    const handleRegister = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       createUser(email, password).then(result => {
        console.log(result.user);
        toast.success("Account created successfull")
       }).catch(err =>{
        console.log(err);
        toast.error("Something went wrong");
       })
        
    }

    return (
        
  <div className='mt-10 space-y-5'>
     <h1 className="text-5xl text-center font-bold">Register now!</h1>
      <div className="card bg-base-100 w-full mx-auto  max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input 
          name='name'
          type="text" 
          className="input" 
          placeholder="Your name" />
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
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>Already have an account ? <Link to={'/login'} className='text-blue-400 hover:text-blue-700'>LogIn</Link></p>
        </form>
      </div>
    </div>
  </div>
    );
};

export default Register;