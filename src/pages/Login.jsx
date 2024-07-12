import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider, facebookProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from '../firebase';

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
      navigate('/home');
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
      navigate('/home');
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

  const handlePhoneLogin = () => {
    // Handle phone login logic here
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        
        {user ? (
          <div className="text-center">
            <h3 className="text-2xl">Welcome, {user.displayName || user.email}!</h3>
            <p className="mt-4">You are already logged in. Please go to another page.</p>
            <Link to="/home" className="block mt-2 text-indigo-600 hover:text-indigo-500">Go to Home</Link>
            <Link to="/profile" className="block mt-2 text-indigo-600 hover:text-indigo-500">Go to Profile</Link>
            <button
              onClick={handleLogout}
              className="mt-4 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm font-medium"
            >
              Logout
            </button>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-sm font-medium">
                Sign in
              </button>
            </div>
          </form>
        )}

        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        {success && <div className="text-green-500 text-center mt-4">{success}</div>}

        {!user && (
          <div>
            <p className="text-center text-sm text-gray-600">Or sign in with</p>
            <div className="mt-1 grid grid-cols-3 gap-3">
              <button onClick={handleGoogleLogin} className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Google
              </button>
              <button onClick={handleFacebookLogin} className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Facebook
              </button>
              <button onClick={handlePhoneLogin} className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Phone
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
