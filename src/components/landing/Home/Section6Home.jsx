
import { RiArrowRightLine } from 'react-icons/ri';
import imgicon1 from '../../../assets/images/Landing/cardicon1.svg';
import imgicon2 from '../../../assets/images/Landing/cardicon2.svg';
import imgicon3 from '../../../assets/images/Landing/check-hands.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Section6Home() {
  const items = {
    en: [
      {
        title: 'Effortless Discovery',
        description: 'Our advanced search engine allows you to swiftly discover verified service providers, making your search process seamless and efficient.',
        src: imgicon1,
      },
      {
        title: 'Tailored Categories',
        description: 'Explore a range of meticulously curated service categories tailored to meet the specific needs of e-commerce businesses.',
        src: imgicon2,
      },
      {
        title: 'Your Service Shortlist',
        description: 'Create personalized boards to save and organize your preferred service providers, streamlining your vendor selection process.',
        src: imgicon3,
      },
    ],
    ar: [
      {
        title: 'اكتشاف سهل',
        description: 'تتيح لك محرك البحث المتقدم لدينا اكتشاف مقدمي الخدمات الموثوقين بسرعة، مما يجعل عملية البحث سلسة وفعالة.',
        src: imgicon1,
      },
      {
        title: 'فئات مخصصة',
        description: 'استكشف مجموعة من فئات الخدمات المُنسقة بعناية لتلبية الاحتياجات المحددة للأعمال التجارية الإلكترونية.',
        src: imgicon2,
      },
      {
        title: 'قائمة مختصرة من الخدمات',
        description: 'قم بإنشاء لوحات مخصصة لحفظ وتنظيم مقدمي الخدمات المفضلين لديك، مما يُبسط عملية اختيار الموردين.',
        src: imgicon3,
      },
    ],
  };



  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const currentItems = items[currentLanguage] || items.en


  return (
    <div className={`bg-[#E6ECF9] py-12  ${currentLanguage === 'ar' ? 'font-cairo' : 'font-poppins'}`} dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} id='benefits'>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 lg:mx-64 mx-6 '>
        {currentItems?.map((item, key) => (
          <div key={key}>
            {/* <div className='p-6  h-full bg-white shadow-custom rounded-lg'> */}
            <div className='rounded-xl  p-8  h-full bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#6161FF]/20 group'>
              <img src={item.src} alt={item.title} className=' w-[50px] rounded-xl' />
              <h3 className=' text-3xl text-primary  font-bold min-h-[100px] lg:pb-6 pt-3'>{item.title}</h3>
              <p className=' leading-[1.5] min-h-[90px] text-sm text-dark font-light'>{item.description}</p>

              <Link to={"/signup"} className='inline-flex border-[#6161FF] my-5 border-b-[1px] text-primary  items-center gap-2' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>

                {t('learnMore')}
                <RiArrowRightLine />
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Section6Home;
