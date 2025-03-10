import React, { useState, useEffect } from 'react'; // Added useEffect
import captainLogo from "../assets/images/captainLogo.png";

import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  // 2-way data binding: data entered in the form is stored in form of object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({}); // Empty object to store the driver's data entered in the form  

  useEffect(() => {
    console.log(captainData);
  }, [captainData]); // Logs captainData when it updates

  const submitHandler = (e) => {
    e.preventDefault();

    // Storing the data entered in the form
    setCaptainData({
      email: email,
      password: password
    });

    // Clearing the form after submitting
    setEmail('');
    setPassword('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className="w-50 ml-0" src={captainLogo} alt="Logo" />
        <form onSubmit={submitHandler}>
          <h3 className='text-xl mb-2 mt-9'>What's your Email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-xl mb-2'>Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='password'
          />

          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
            Login
          </button>
        </form>

        <p className='text-center text-base'>
          Join a fleet? <Link to='/captain-signup' className='text-orange-500'>Register as a Captain</Link>
        </p>
      </div>

      <div>
        <Link to='/login' className='bg-[#3bf7f7] flex items-center justify-center text-black font-semibold mb-16 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
          Sign in as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;
