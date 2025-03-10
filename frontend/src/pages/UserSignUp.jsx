import React, { useState } from 'react'; // import useState from react`
import logo2 from "../assets/images/logo2.png";
import { Link } from 'react-router-dom';

const UserSignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});//empty object to store the data entered in the form 

  const submitHandler = (e) => {
    // with submitHandler we are preventing the default behaviour of the form,which is that it refreshes the page when form is submitted
    e.preventDefault();

    // storing the data entered in the form in the userData object
    setUserData({
      userName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })
    // console.log(userData);
    // clearing the form after submitting
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');

  }


  return (
    <div className='p-7 h-screen flex flex-col justify-between' >
      <div>
        <img className="w-35 ml-2" src={logo2} alt="Logo" />
        <form onSubmit={(e) => { submitHandler(e) }}>
          <h3 className='text-lg mb-2 mt-9'>Enter your Name</h3>
          <div className='flex gap-4 mb-6'>
            <input required

              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' type="text" placeholder='First Name' value={firstName} onChange={(e) => {
                setFirstName(e.target.value)
              }
              } />
            <input required

              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' type="text" placeholder='Last Name' value={lastName} onChange={(e) => {
                setLastName(e.target.value)
              }} />
          </div>


          <h3 className='text-lg mb-6 mt-9'>Enter your Email</h3>
          <input required

            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com' value={email} onChange={(e) => { setEmail(e.target.value) }} />

          <h3 className='text-lg mb-6'>Enter password</h3>
          <input required

            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />

          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placehodler:text-base'>Login</button>


        </form>
        <p className='text-center text-base'>Already have an account? <Link to='/login' className='text-orange-500'>Login here</Link></p>
      </div>

      <div>
      <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the<span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.</p>
      {/* leading property means line height */}
      </div>
    </div>
  );
}

export default UserSignUp;
