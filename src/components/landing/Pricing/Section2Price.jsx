import { useState } from 'react';
import PlanCard from '../../merchant/Upgrage/PlanPriceCard';
import { useTranslation } from 'react-i18next';

function Section2Price() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const [selectedPlan, setSelectedPlan] = useState('Monthly');

  const merchantPlans = {
    Free: [
      {
        title: 'Free',
        monthlyPrice: 'EGP 0',
        annualPrice: 'EGP 0',
        buttonText: 'Start Now',
        listItems: [
          'Limited access to service provider directory',
          'Search on the service providers is limited to 3 timers only per day',
          'One Category in Board',
          '3 pins only',
          'Manage basic projects with to-do lists and task assignments',
          'web app',
        ],
        borderColor: '#C1C1C1',
        buttonBgColor: 'transparent',
        buttonTextColor: '#6161FF',
      },
    ],
    Standard: [
      {
        title: 'Standard',
        monthlyPrice: 'EGP 299',
        annualPrice: 'EGP 2999',
        buttonText: 'Subscribe Now',
        listItems: [
          'Unlimited search per day (Editable)',
          'Unlimited connection requests Find the PERFECT service provider for every need.',
          'Unlimited Connection Requests',
          'Create Pins Collection',
          'Project Management Powerhouse Collaborate seamlessly with advanced tools like shared boards, file sharing, and in-app messaging.',
          'Basic reporting and analytics',
          'Exclusive Discounts: Get special offers from select service providers on the platform (limited time only!).',
        ],
        borderColor: '#6161FF',
        buttonBgColor: '#6161FF',
        buttonTextColor: '#F5F6FA',
        viewBadge: true,
      },
    ],
    Premium: [
      {
        title: 'Premium',
        monthlyPrice: 'EGP 399',
        annualPrice: 'EGP 3999',
        buttonText: 'Start Now',
        listItems: [
          'All features of Standard Plan',
          'Unlimited search per day',
          'Unlimited Categories in Board',
          'Create Pins Collection Dedicated account manager for support and onboarding Pre-negotiated discounted rates with some service providers',
          'Invite your service provider',
          'Collaborate with your service provider through shared projects and tasks',
        ],
        borderColor: '#C1C1C1',
        buttonBgColor: 'transparent',
        buttonTextColor: '#6161FF',
      },
    ],
  };

  const plans = merchantPlans

  const getPrice = (plan) => {
    return selectedPlan === 'Monthly' ? plan.monthlyPrice : plan.annualPrice;
  };

  return (
    <div
      className={`mt-12 lg:mx-24 mx-6 ${currentLanguage === "ar" ? "font-cairo" : "font-poppins"
        }`}
      dir={currentLanguage === "ar" ? "rtl" : "ltr"}
    >
      <header className="flex lg:flex-row flex-wrap w-full gap-3">
        <div className="flex-grow flex gap-3">

        </div>
        <button
          className={`px-5 py-2.5 font-[500] rounded-3xl ${selectedPlan === "Monthly"
            ? "bg-[#6161FF] text-[#FDFDFD]"
            : "bg-[#E8E8E8] text-[#C1C1C1]"
            }`}
          onClick={() => setSelectedPlan("Monthly")}
        >
          {currentLanguage === "ar" ? "شهري" : "Monthly"}
        </button>

        <button
          className={`px-5 py-2.5 font-[500] rounded-3xl ${selectedPlan === "Annual"
            ? "bg-[#6161FF] text-[#FDFDFD]"
            : "bg-[#E8E8E8] text-[#C1C1C1]"
            }`}
          onClick={() => setSelectedPlan("Annual")}
        >
          {currentLanguage === "ar" ? "سنوي" : "Annual"}
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
