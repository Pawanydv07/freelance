import React, { useState } from 'react';
import "../../css/Home/HomeP10.css";
import { FaCheck, FaStar } from 'react-icons/fa'; // Example icons

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
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6'],
      icon: <FaCheck />,
    },
    {
      name: 'Pro Plan',
      priceMonthly: '$20/mo',
      priceYearly: '$200/yr',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6'],
      icon: <FaStar />,
    },
    {
      name: 'Premium Plan',
      priceMonthly: '$30/mo',
      priceYearly: '$300/yr',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6'],
      icon: <FaStar />,
    },
  ];

  return (
    <div className="plan-section">
      <div className="student-choose text-center">
        <p className="font-bold text-lg student-text">Our Plans</p>
        <h1 className="text-5xl student-div">
          CHOOSE YOUR PLAN <span className="gradient-text text-lg"></span>
        </h1>
      </div>
      <div className="billing-buttons">
        <button
          className={billingCycle === 'monthly' ? 'active' : ''}
          onClick={() => handleBillingCycleChange('monthly')}
        >
          Monthly
        </button>
        <button
          className={billingCycle === 'yearly' ? 'active' : ''}
          onClick={() => handleBillingCycleChange('yearly')}
        >
          Yearly
        </button>
      </div>
      <div className="plan-container">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-box ${index === 1 ? 'plan-box-middle' : ''}`}>
            <div className="plan-icon">{plan.icon}</div>
            <h2 className="plan-name">{plan.name}</h2>
            <p className="plan-price">
              {billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly}
            </p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanComponent;
