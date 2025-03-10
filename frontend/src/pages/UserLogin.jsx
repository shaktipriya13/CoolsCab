import React, { useState } from 'react'; // import useState from react`
import logo2 from "../assets/images/logo2.png";
import { Link } from 'react-router-dom';

const UserLogin = () => {
  // 2-way data binding: data entered in the form is stored in form of object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});//empty object to store the data entered in the form

  const submitHandler = (e) => {
    // with submitHandler we are preventing the default behaviour of the form,which is that it refreshes the page when form is submitted
    e.preventDefault();

    // storing the data entered in the form in the userData object
    setUserData({
      email: email,
      password: password
    })
    // console.log(userData);
    // clearing the form after submitting
    setEmail('');
    setPassword('');
  }
    return (
      <div className='p-7 h-screen flex flex-col justify-between' >
        <div>
          <img className="w-35 ml-2" src={logo2} alt="Logo" />
          <form onSubmit={(e) => { submitHandler(e) }}>
            <h3 className='text-xl mb-5 mt-9'>What's your Email?</h3>
            <input required
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com' />

            <h3 className='text-xl mb-5'>Enter password</h3>
            <input required
              value={password}
              onChange={(p) => { setPassword(p.target.value) }}
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password' />

            <button className='bg-[#111] text-white font-semibold mt-4 rounded px-4 py-2 w-full text-lg placehodler:text-base'>Login</button>


          </form>
          <p className='text-center  mt-5 text-base'>New here? <Link to='/signup' className='text-orange-500'>Create New Account</Link></p>
        </div>

        <div>
          <Link to='/captain-login' className='bg-[#3bf7f7] flex items-center justify-center text-black font-semibold mb-17 rounded px-4 py-2 w-full text-lg placehodler:text-base'>
            Sign in as Captain
          </Link>
        </div>
      </div>
    );
  }

  export default UserLogin;
