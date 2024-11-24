import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post('https://quizbackend-lpq1.onrender.com/api/v1/auth/register', {
        name,
        email,
        password,
      });

      if (response.data.success) {
        setError('🎉 Registration Successful! Redirecting to Login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError('😞 Registration failed. Please try again.');
      }
    } catch (err) {
      setError('😞 An error occurred. Please try again.');
      console.error('Error registering:', err);
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailValid(emailPattern.test(email));
  };

  const evaluatePasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStrength('Weak 😕');
    } else if (password.length < 10) {
      setPasswordStrength('Moderate 🟡');
    } else {
      setPasswordStrength('Strong 💪');
    }
  };

  useEffect(() => {
    if (email) validateEmail(email);
    if (password) evaluatePasswordStrength(password);
  }, [email, password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Create your Account 🎉</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Full Name Input */}
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
                <FaUser className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <div className="relative">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`appearance-none rounded-md relative block w-full px-4 py-3 border ${emailValid ? 'border-gray-300' : 'border-red-500'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              </div>
              {!emailValid && <p className="text-red-500 text-xs mt-1">❌ Please enter a valid email address.</p>}
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"} // Password visibility toggle
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <button
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                </button>
              </div>
              {password && (
                <p className={`text-xs ${passwordStrength.includes('Weak') ? 'text-red-500' : passwordStrength.includes('Moderate') ? 'text-yellow-500' : 'text-green-500'} mt-1`}>
                  {passwordStrength}
                </p>
              )}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-center mt-2">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-sm font-medium transform transition-all duration-300 hover:scale-105`}
              disabled={loading}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l4-4-4-4v4a4 4 0 10-4 4h4z"></path>
                </svg>
              ) : (
                'Register 🚀'
              )}
            </button>
          </div>
        </form>

        {/* Sign-in Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in here ✨
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
