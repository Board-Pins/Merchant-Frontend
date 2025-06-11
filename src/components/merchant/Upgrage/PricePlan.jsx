import React, { useState } from 'react';
import PlanCard from './PlanPriceCard';

function PricePlan() {
  const [selectedPlan, setSelectedPlan] = useState('Monthly');
  const FreePlans = [
    {
      title: 'Free',
      price: 'EGP 0',
      buttonText: 'Start Now',
      listItems: [
        'Get a basic listing in the directory to showcase your skills and experience to potential clients.',
        'Receive a limited number of connection requests: Get discovered by high-growth e-commerce businesses. 5 connections only (To be editable)',
        'Freemium Project Management: Collaborate with connected merchants on basic project tasks (Limited to one project)',

      ],
      borderColor: '#1E1E1E',
      buttonBgColor: 'transparent',
      buttonTextColor: '#6161FF',
    },

  ];


  const StandardPlans = [
    {
      title: 'Standard',
      price: 'EGP 299',
      buttonText: 'Subscribe Now',
      listItems: [
        'Everything in the Free Plan',
        'Stand Out from the Crowd',
        'Unlimited Connection Requests',
        'Create Pins Collection',
        'Lead Generation Machine',
        'Basic reporting and analytics',
        'Get featured in our weekly client spotlight newsletter (limited slots available!)'
      ],
      borderColor: '#6161FF',
      buttonBgColor: '#6161FF',
      buttonTextColor: '#F5F6FA',
      viewBadge: true


    },

  ];
  const PremiumPlans = [
    {
      title: 'Premium',
      price: 'EGP 399',
      buttonText: 'Start Now',
      listItems: [
        'Everything in the Premium Plan',
        'Dominate Directory Searches',
        'Your Personal Growth Partnerd',



      ],
      borderColor: '#1E1E1E',
      buttonBgColor: 'transparentF',
      buttonTextColor: '#6161FF',
    },

  ];

  return (
    <div className=' mt-12'>
      <header className="flex w-full justify-end gap-3">
        <button
          className={`px-5 py-2 font-[500] rounded-3xl ${selectedPlan === 'Monthly' ? 'bg-[#6161FF] text-[#FDFDFD]' : 'bg-[#E8E8E8] text-[#1E1E1E]'
            }`}
          onClick={() => setSelectedPlan('Monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-5 py-2 font-[500] rounded-3xl ${selectedPlan === 'Annual' ? 'bg-[#6161FF] text-[#FDFDFD]' : 'bg-[#E8E8E8] text-[#1E1E1E]'
            }`}
          onClick={() => setSelectedPlan('Annual')}
        >
          Annual
        </button>
      </header>



      <main>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-8 mx-0 lg:mx-0">
          <div className="p-4 mt-12">
            {FreePlans.map((plan, index) => (
              <PlanCard
                key={index}
                title={plan.title}
                price={plan.price}
                buttonText={plan.buttonText}
                listItems={plan.listItems}
                borderColor={plan.borderColor}
                buttonBgColor={plan.buttonBgColor}
                buttonTextColor={plan.buttonTextColor}
              />
            ))}
          </div>
          {StandardPlans.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              price={plan.price}
              buttonText={plan.buttonText}
              listItems={plan.listItems}
              borderColor={plan.borderColor}
              buttonBgColor={plan.buttonBgColor}
              buttonTextColor={plan.buttonTextColor}
              viewBadge={plan.viewBadge}
            />
          ))}
          <div className="p-4 mt-12">
            {PremiumPlans.map((plan, index) => (
              <PlanCard
                key={index}
                title={plan.title}
                price={plan.price}
                buttonText={plan.buttonText}
                listItems={plan.listItems}
                borderColor={plan.borderColor}
                buttonBgColor={plan.buttonBgColor}
                buttonTextColor={plan.buttonTextColor}
              />
            ))}
          </div>
        </div>




      </main>
    </div>
  );
}

export default PricePlan;
