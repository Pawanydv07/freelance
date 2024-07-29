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
      icon: <FaCheck className="text-green-500" />,
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
      icon: <FaStar className="text-yellow-500" />,
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
      icon: <FaCrown className="text-purple-500" />,
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
      icon: <FaUserGraduate className="text-teal-500" />,
    },
  ];

  return (
    <div className="plan-section bg-gray-100 py-12 w-full">
      <div className="text-center mb-12">
        <p className="font-bold text-lg text-gray-700">Our Plans</p>
        <h1 className="text-5xl font-extrabold text-gray-900">CHOOSE YOUR PLAN <span className="text-indigo-600">NOW</span></h1>
      </div>
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mx-2 rounded-md text-lg font-medium ${billingCycle === 'monthly' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleBillingCycleChange('monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-md text-lg font-medium ${billingCycle === 'yearly' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleBillingCycleChange('yearly')}
        >
          Yearly
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-0">
        {plans.map((plan, index) => (
          <div key={index} className={`bg-white p-6 rounded-lg shadow-md ${index === 1 ? 'transform scale-105 border-2 border-indigo-600' : ''}`}>
            <div className="flex justify-center mb-4">
              {plan.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{plan.name}</h2>
            <p className="text-3xl font-bold text-gray-900 mb-6">
              {billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly}
            </p>
            <ul className="text-gray-600 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" /> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanComponent;
