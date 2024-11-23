import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import logo from "../assets/logonew.jpg"; // Import the logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // Track user state
  const navigate = useNavigate();

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Simulate login (you can replace this with your actual login mechanism)
  const handleLogin = (e, email, password) => {
    e.preventDefault();
    if (email && password) {
      const userData = { displayName: email.split("@")[0], email };
      setUser(userData); // Simulate user info from email
      localStorage.setItem('user', JSON.stringify(userData)); // Store user info in localStorage
    } else {
      console.log("Invalid credentials");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null); // Clear user state
    localStorage.removeItem('user'); // Remove user data from localStorage
    navigate("/"); // Navigate to home page
  };

  // UseEffect to get user data from localStorage when the component mounts
  useEffect(() => {
    // Get the user data from localStorage if logged in
    const storedUser = localStorage.getItem('user');
  
    if (storedUser) {
      try {
        // Safely parse storedUser only if it exists and is valid
        setUser(JSON.parse(storedUser)); // Set user data if available
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    } else {
      setUser(null); // If no user data in localStorage, set user to null
    }
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <nav className="bg-customBlue fixed w-full z-10 top-0 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="LogicalSir Logo" className="h-16 w-20" />
            </Link>
          </div>
          <div className="hidden md:flex">
            <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/instructors" className="text-white px-3 py-2 rounded-md text-sm font-medium">Instructor</Link>
            <Link to="/courses" className="text-white px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
            <Link to="/lectures" className="text-white px-3 py-2 rounded-md text-sm font-medium">Class</Link>
            <Link to="/quiz-info" className="text-white px-3 py-2 rounded-md text-sm font-medium">Quiz</Link>
            {!user ? (
              <button
                onClick={() => navigate("/login")}
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </button>
            ) : (
              <Menu as="div" className="relative">
                <Menu.Button className="text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  {user.displayName || user.email}
                  <ChevronDownIcon className="h-5 w-5 ml-2" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={`${
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleLogout}
                            className={`${
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white focus:outline-none focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/instructors" className="text-white block px-3 py-2 rounded-md text-base font-medium">Instructor</Link>
          <Link to="/courses" className="text-white block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
          <Link to="/lectures" className="text-white block px-3 py-2 rounded-md text-base font-medium">Class</Link>
          {!user ? (
            <button
              onClick={() => navigate("/login")}
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </button>
          ) : (
            <Menu as="div" className="relative">
              <Menu.Button className="text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center">
                {user.displayName || user.email}
                <ChevronDownIcon className="h-5 w-5 ml-2" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={`${
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={`${
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
