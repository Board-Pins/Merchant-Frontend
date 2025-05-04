import { useState } from 'react';
import PlanCard from '../../merchant/Upgrage/PlanPriceCard';

function Section2Price() {
  const [selectedPlan, setSelectedPlan] = useState('Monthly');
  const [selectedPlanType, setSelectedPlanType] = useState('Business');

  const BusinessPlans = {
    Free: [
      {
        title: 'Free',
        monthlyPrice: 'EGP 0',
        annualPrice: 'EGP 0',
        buttonText: 'Start Now',
        listItems: [
          'Get a basic listing in the directory to showcase your skills and experience to potential clients.',
          'Receive a limited number of connection requests: Get discovered by high-growth e-commerce businesses. 5 connections only (To be editable)',
          'Freemium Project Management: Collaborate with connected merchants on basic project tasks ( Limited to one project)',
        ],
        borderColor: '#1E1E1E',
        buttonBgColor: 'transparent',
        buttonTextColor: '#6161FF',
      },
    ],
    Standard: [
      {
        title: 'Pro Plan',
        monthlyPrice: 'EGP 299',
        annualPrice: 'EGP 2999',
        buttonText: 'Subscribe Now',
        listItems: [
          'Everything in the Free Plan',
          'Stand Out from the Crowd',
          'Unlimited Connection Requests',
          'Create Pins Collection',
          'Lead Generation Machine',
          'Basic reporting and analytics',
          'Get featured in our weekly client spotlight newsletter (limited slots available!).',
        ],
        borderColor: '#6161FF',
        buttonBgColor: '#6161FF',
        buttonTextColor: '#F5F6FA',
        viewBadge: true,
      },
    ],
    Premium: [
      {
        title: 'Enterprise Plan',
        monthlyPrice: 'EGP 399',
        annualPrice: 'EGP 3999',
        buttonText: 'Start Now',
        listItems: [
          'Everything in the Pro Plan',
          'Dominate Directory Searches',
          'Your Personal Growth Partner',
        ],
        borderColor: '#1E1E1E',
        buttonBgColor: 'transparent',
        buttonTextColor: '#6161FF',
      },
    ],
  };

  const InfluencerPlans = {
    Free: [
      {
        title: 'Free',
        monthlyPrice: 'EGP 0',
        annualPrice: 'EGP 0',
        buttonText: 'Start Now',
        listItems: [
          'Showcase your talents and experience to potential clients.',
          'Receive a limited number of connection requests: Get discovered by high-growth e-commerce businesses. 5 connections only (To be editable)',
          'Freemium Project Management: Collaborate with connected merchants on basic project tasks ( Limited to one project)',
        ],
        borderColor: '#1E1E1E',
        buttonBgColor: 'transparent',
        buttonTextColor: '#6161FF',
      },
    ],
    Standard: [
      {
        title: 'Pro Plan',
        monthlyPrice: 'EGP 299',
        annualPrice: 'EGP 2999',
        buttonText: 'Subscribe Now',
        listItems: [
          'Everything in the Free Plan',
          'Stand Out from the Crowd',
          'Unlimited Connection Requests',
          'Create Content Collections',
          'Lead Generation Machine',
          'Basic reporting and analytics',
          'Get featured in our weekly client spotlight newsletter (limited slots available!).',
        ],
        borderColor: '#6161FF',
        buttonBgColor: '#6161FF',
        buttonTextColor: '#F5F6FA',
        viewBadge: true,
      },
    ],
    Premium: [
      {
        title: 'Enterprise Plan',
        monthlyPrice: 'EGP 399',
        annualPrice: 'EGP 3999',
        buttonText: 'Start Now',
        listItems: [
          'Everything in the Pro Plan',
          'Dominate Directory Searches',
          'Your Personal Growth Partner',
        ],
        borderColor: '#1E1E1E',
        buttonBgColor: 'transparent',
        buttonTextColor: '#6161FF',
      },
    ],
  };

  const plans = selectedPlanType === 'Business' ? BusinessPlans : InfluencerPlans;

  const getPrice = (plan) => {
    return selectedPlan === 'Monthly' ? plan.monthlyPrice : plan.annualPrice;
  };

  return (
    <div className='mt-12 lg:mx-24 mx-6'>
      <header className="flex w-full gap-3">
        <div className='flex-grow flex gap-3'>
          <button
            className={`px-5 py-2 font-[500] rounded-sm ${selectedPlanType === 'Business' ? 'border-b-[#6161FF] border-b-[4px] text-[#6161FF]' : ' text-dark'}`}
            onClick={() => setSelectedPlanType('Business')}
          >
            Business
          </button>
          <button
            className={`px-5 py-2 font-[500] rounded-sm ${selectedPlanType === 'influencer' ? 'border-b-[#6161FF] border-b-[4px] text-[#6161FF]' : ' text-dark'}`}
            onClick={() => setSelectedPlanType('influencer')}
          >
            Freelancer/influencer
          </button>
        </div>
        <button
          className={`px-5 py-2 font-[500] rounded-3xl ${selectedPlan === 'Monthly' ? 'bg-[#6161FF] text-[#FDFDFD]' : 'bg-[#E8E8E8] text-[#1E1E1E]'}`}
          onClick={() => setSelectedPlan('Monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-5 py-2 font-[500] rounded-3xl ${selectedPlan === 'Annual' ? 'bg-[#6161FF] text-[#FDFDFD]' : 'bg-[#E8E8E8] text-[#1E1E1E]'}`}
          onClick={() => setSelectedPlan('Annual')}
        >
          Annual
        </button>
      </header>

      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-9 mx-4 lg:mx-8">
          <div className="p-4 mt-12">
            {plans.Free.map((plan, index) => (
              <PlanCard
                key={index}
                title={plan.title}
                price={getPrice(plan)}
                buttonText={plan.buttonText}
                listItems={plan.listItems}
                borderColor={plan.borderColor}
                buttonBgColor={plan.buttonBgColor}
                buttonTextColor={plan.buttonTextColor}
              />
            ))}
          </div>
          {plans.Standard.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              price={getPrice(plan)}
              buttonText={plan.buttonText}
              listItems={plan.listItems}
              borderColor={plan.borderColor}
              buttonBgColor={plan.buttonBgColor}
              buttonTextColor={plan.buttonTextColor}
              viewBadge={plan.viewBadge}
            />
          ))}
          <div className="p-4 mt-12">
            {plans.Premium.map((plan, index) => (
              <PlanCard
                key={index}
                title={plan.title}
                price={getPrice(plan)}
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

export default Section2Price;
