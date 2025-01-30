// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const newUserData = {
     fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      userData: userData,
    };
    setUserData(newUserData);
    // console.log(newUserData); // Log the updated data directly

    // Clear the form fields
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  };

  return (
    <div className="py-5 px-5 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mb-10"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What`s Our captains name</h3>
          <div className="flex gap-2 mb-5">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What`s Our captain`s email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded w-full px-4 py-2 border text-lg placeholder:text-base"
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-base placeholder:text-sm">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have an account?{' '}
          <Link to="/Captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[12px] leading-tight">
          This site is protected by reCAPTCHA and the{' '}
          <span className="underline">Google Privacy Policy</span> and{' '}
          <span className="underline">Terms of Service apply</span>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;