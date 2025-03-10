import React from 'react';
import bgImage from "../assets/images/bg.webp";
import logo2 from "../assets/images/logo2.png";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="h-screen pt-8 flex justify-between flex-col w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}>
         <img className="w-35 ml-5" src={logo2} alt="Logo" />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-3xl font-bold'>Get Started with Us!</h2>
          <Link to='/login' className='  flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
