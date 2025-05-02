
import { RiArrowRightLine } from 'react-icons/ri';
import imgicon1 from '../../../assets/images/Landing/cardicon1.svg';
import imgicon2 from '../../../assets/images/Landing/cardicon2.svg';
import imgicon3 from '../../../assets/images/Landing/cardicon3.svg';

function Section6Home() {
  const items = [
    {
      title: 'Effortless Discovery',
      describtion: 'Our advanced search engine allows you to swiftly discover verified service providers, making your search process seamless and efficient.',
      src: imgicon1,
    },
    {
      title: 'Tailored Categories',
      describtion: 'Explore a range of meticulously curated service categories tailored to meet the specific needs of e-commerce businesses.',
      src: imgicon2,
    },
    {
      title: 'Your Service Shortlist',
      describtion: 'Create personalized boards to save and organize your preferred service providers, streamlining your vendor selection process.',
      src: imgicon3,
    },
  ];

  return (
    <div className='bg-[#E6ECF9] py-12'>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 lg:mx-64 mx-6 '>
        {items.map((item, key) => (
          <div key={key}>
            <div className='p-6 h-full bg-white shadow-custom rounded-lg'>
              <img src={item.src} alt={item.title}  className=' w-[60px]' />
              <h3 className=' text-3xl text-primary  font-bold  lg:pb-6 pt-2'>{item.title}</h3>
              <p className=' leading-[2] text-lg'>{item.describtion}</p>
          
              <button className='border-[#6161FF] my-5 border-b-[1px] text-primary flex items-center gap-2'>
              Learn more
              <RiArrowRightLine/>
              </button>
              </div>
   
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section6Home;
