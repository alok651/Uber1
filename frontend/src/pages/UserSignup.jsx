import  { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "./Context/UserContext"; // Import the actual context
`${import.meta.env.VITE_BASE_URL}/users/signup`


const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const { setUser } = useContext(UserDataContext); // Use the correct context

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/signup`, newUser);

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user); // Update context with user data
        navigate('/Home'); // Navigate to the home page

        // Reset form fields
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="p-7 flex flex-col justify-between h-screen">
        <div>
          <img
            className="w-20 mb-10"
            src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
            alt="Uber Logo"
          />
          <form onSubmit={submitHandler}>
            <h3 className="text-lg font-medium mb-2">What`s your name</h3>
            <div className="flex gap-2 mb-5">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <h3 className="text-lg font-medium mb-2">What`s your email</h3>
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-base placeholder:text-sm">
              Create account
            </button>
          </form>
          <p className="text-center">
            Already have an account? <Link to='/login' className="text-blue-600">Login here</Link>
          </p>
        </div>
        <div>
          <p className="text-[12px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
