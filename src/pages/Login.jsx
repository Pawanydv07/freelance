import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider, facebookProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from '../firebase';
import white3 from '../assets/lecture1.jpg'; // Import your background image
import robotImage from '../assets/robo2.png'; // Import your robot image

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("Login successful!");
      setError("");
      navigate('/');
    } catch (error) {
      setError(`Error logging in with email and password: ${error.message}`);
      console.error("Login error:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setSuccess("Login successful!");
      setError("");
      navigate('/');
    } catch (error) {
      setError(`Error logging in with Google: ${error.message}`);
      console.error("Google login error:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      setSuccess("Login successful!");
      setError("");
      navigate('/home');
    } catch (error) {
      setError(`Error logging in with Facebook: ${error.message}`);
      console.error("Facebook login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setSuccess("Logout successful!");
      navigate('/');
    } catch (error) {
      setError(`Error logging out: ${error.message}`);
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${white3})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-4xl w-full space-y-8 p-10 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg flex">
        <div className="w-1/2 hidden md:block mr-0">
          <img src={robotImage} alt="Robot" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="text-center">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Connect with a social account or enter your email address and password.
            </p>
          </div>
          
          {user ? (
            <div className="text-center">
              <h3 className="text-2xl">Welcome, {user.displayName || user.email}!</h3>
              <p className="mt-4">You are already logged in. Please go to another page.</p>
              <Link to="/home" className="block mt-2 text-blue-600 hover:text-blue-500">Go to Home</Link>
              <Link to="/profile" className="block mt-2 text-blue-600 hover:text-blue-500">Go to Profile</Link>
              <button
                onClick={handleLogout}
                className="mt-4 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full flex justify-center py-3 px-4 border border-gray-300 text-white hover:bg-slate-900 rounded-md shadow-sm text-gray-700 bg-black bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-sm font-medium"
                >
                  <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="h-6 w-6 mr-2  " />
                  Log in with Google
                </button>
              </div>
              
              <div className="relative my-4 flex items-center justify-center">
                <div className="w-full border-t border-gray-300"></div>
                <div className="absolute top-0 left-0 right-0 text-center -mt-3">
                  <span className="bg-white px-2 text-sm text-gray-500">OR</span>
                </div>
              </div>

              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-3 border-b-2 border-l-2 border-orange-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-black bg-opacity-10 backdrop-filter backdrop-blur-2xl"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-3 border-b-2 border-orange-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-blue-500 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-white mt-2">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link to="/forgot-password" className="font-medium text-orange-200 font-bold hover:text-orange-300">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border-b-2 border-orange-300 rounded-md shadow-sm text-white bg-black hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-md font-bold bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl">
                  SIGN IN
                </button>
              </div>
            </form>
          )}

          {error && <div className="text-red-500 text-center mt-4">{error}</div>}
          {success && <div className="text-green-500 text-center mt-4">{success}</div>}

          {!user && (
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600">Don't have an account? <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Create Account</Link></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
