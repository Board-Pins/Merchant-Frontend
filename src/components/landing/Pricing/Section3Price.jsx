import React from 'react'
import AccordionPricing from '../../provider/atoms/commonatoms/AccordionList'
import AccordionList from '../../provider/atoms/commonatoms/AccordionList';

function Section3Price() {
    const sections = [
        {
          title: 'What is Board Pins?',
          content: 'Content for section 1',
        },
        {
          title: 'Is it free to sign up for Board Pins?',
          content: 'Content for section 2',
        },
        {
          title: 'What types of service providers can I find on Board Pins?',
          content: 'Can I contact service providers directly?',
        },
        {
          title: 'Can I contact service providers directly?',
          content: 'Can I contact service providers directly?',
        },
        {
          title: 'How do I collaborate with service providers on Board Pins?',
          content: 'Can I contact service providers directly?',
        },
        {
          title: 'Is communication with service providers secure?',
          content: 'Can I contact service providers directly?',
        },
        {
          title: 'Is my business information secure on Board Pins?',
          content: 'Can I contact service providers directly?',
        },
        {
          title: 'How do I pay service providers?',
          content: 'Can I contact service providers directly?',
        },
        {
          title: 'Is my business information secure on Board Pins?',
          content: 'Can I contact service providers directly?',
        },
        {
          title: 'Can I see reviews of service providers?',
          content: 'Can I contact service providers directly?',
        },
        {
          title: 'What happens after a project is completed?',
          content: 'Can I contact service providers directly?',
        },
      ];
  return (
    <div>
    <section className=" py-12 lg:mx-24 mx-6">
    <h2 className=" text-[2.6rem] text-[#1E1E1E] text-center opacity-[90] py-5 font-[500]">Frequently Asked Questions</h2>
    <AccordionList sections={sections}/>
    </section>
    
    
    </div>
  )
}

export default Section3Price