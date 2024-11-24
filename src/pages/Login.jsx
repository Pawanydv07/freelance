// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); // Clear errors on new input
  };

  // Validate form fields
  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      return 'Both fields are required. ⚠️';
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      return 'Please enter a valid email address. ✉️';
    }

    if (password.length < 6) {
      return 'Password must be at least 6 characters long. 🔑';
    }

    return null;
  };

  // Handle form submission (login)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://quizbackend-lpq1.onrender.com/api/v1/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        setSuccess(true);
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        setTimeout(() => {
          setSuccess(false);
          navigate('/'); // Navigate to home
        }, 2000); // Auto close success popup after 2 seconds
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed. 😞');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 bg-[length:400%_400%] animate-gradient-bg mt-8">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Sign in to Your Account 🎉
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address 📧
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Email"
              className="block w-full px-4 py-3 mt-2 text-gray-900 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 focus:outline-none transform transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password 🔒
            </label>
            <input
              id="password"
              name="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              aria-label="Password"
              className="block w-full px-4 py-3 mt-2 text-gray-900 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 focus:outline-none transform transition-all duration-300 hover:scale-105"
            />
            {/* Password visibility toggle */}
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-10 text-gray-500"
              aria-label="Toggle password visibility"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-100 rounded-md">
              {error} ❌
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center px-4 py-3 text-white font-semibold rounded-md ${
                loading ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
              }`}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l4-4-4-4v4a4 4 0 10-4 4h4z"></path>
                </svg>
              ) : (
                'Log In 🚀'
              )}
            </button>
          </div>
        </form>

        {/* Success Popup */}
        {success && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
            Login Successful! Redirecting... 🎉
          </div>
        )}

        {/* Register Redirect */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Register here ✨
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
