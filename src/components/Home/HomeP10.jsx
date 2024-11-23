import React, { useState } from 'react';
import { FaCheck, FaStar, FaCrown, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';

const PlanComponent = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleBillingCycleChange = (cycle) => {
    setBillingCycle(cycle);
  };

  const plans = [
    {
      name: 'Basic Plan',
      priceMonthly: '$10/mo',
      priceYearly: '$100/yr',
      features: [
        'Access to video tutorials',
        'Basic coding exercises',
        'Community support',
        'Weekly quizzes',
        'Monthly progress report'
      ],
      icon: <FaCheck className="text-green-500 text-5xl transform transition-all duration-300 hover:scale-110" />,
      gradient: 'bg-gradient-to-r from-indigo-500 to-blue-500',
    },
    {
      name: 'Pro Plan',
      priceMonthly: '$20/mo',
      priceYearly: '$200/yr',
      features: [
        'All features of Basic Plan',
        'Advanced coding exercises',
        'Mock tests and assessments',
        'Live webinars with experts',
        'DSA questions and solutions',
        'Exclusive study materials'
      ],
      icon: <FaStar className="text-yellow-500 text-5xl transform transition-all duration-300 hover:scale-110" />,
      gradient: 'bg-gradient-to-r from-yellow-400 to-red-500',
    },
    {
      name: 'Premium Plan',
      priceMonthly: '$30/mo',
      priceYearly: '$300/yr',
      features: [
        'All features of Pro Plan',
        'One-on-one mentorship',
        'Career guidance sessions',
        'Interview preparation kits',
        'Job placement assistance',
        'Premium support'
      ],
      icon: <FaCrown className="text-purple-500 text-5xl transform transition-all duration-300 hover:scale-110" />,
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
    },
    {
      name: 'Student Plan',
      priceMonthly: '$5/mo',
      priceYearly: '$50/yr',
      features: [
        'Access to course materials',
        'Regular coding challenges',
        'Weekly quizzes',
        'Basic DSA questions',
        'Community support'
      ],
      icon: <FaUserGraduate className="text-teal-500 text-5xl transform transition-all duration-300 hover:scale-110" />,
      gradient: 'bg-gradient-to-r from-teal-400 to-green-500',
    },
  ];

  return (
    <div className="plan-section bg-gray-900 py-16 w-full relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-gradient-to-r from-indigo-500 to-purple-600 z-0 animate-pulse"></div>
      <div className="text-center mb-12 z-10 relative">
        <p className="font-bold text-lg text-white">Our Plans</p>
        <h1 className="text-5xl font-extrabold text-white tracking-tight">
          CHOOSE YOUR PLAN <span className="text-indigo-600">NOW</span>
        </h1>
      </div>
      <div className="flex justify-center mb-8 z-10 relative">
        <button
          className={`px-6 py-3 mx-2 text-lg font-medium rounded-md transition-all duration-300 transform ${billingCycle === 'monthly' ? 'bg-indigo-600 text-white shadow-lg scale-105' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleBillingCycleChange('monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-6 py-3 mx-2 text-lg font-medium rounded-md transition-all duration-300 transform ${billingCycle === 'yearly' ? 'bg-indigo-600 text-white shadow-lg scale-105' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleBillingCycleChange('yearly')}
        >
          Yearly
        </button>
      </div>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 px-4 md:px-8 lg:px-12 max-w-full w-full">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card p-8 bg-white rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 relative overflow-hidden ${plan.gradient}`}>
              <div className="absolute inset-0 bg-white opacity-20 rounded-lg z-10"></div>
              <div className="flex justify-center mb-4 relative z-20">
                {plan.icon}
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4 text-center relative z-20">{plan.name}</h2>
              <p className="text-4xl font-extrabold text-white mb-6 text-center relative z-20">
                {billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly}
              </p>
              <ul className="text-gray-200 mb-6 space-y-3 relative z-20">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center transform transition-all duration-300 hover:scale-105 hover:text-indigo-300">
                    <FaCheck className="text-green-400 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-md font-semibold transition-all duration-200 transform hover:scale-105 hover:bg-gradient-to-l hover:from-indigo-500 hover:to-blue-500">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanComponent;
