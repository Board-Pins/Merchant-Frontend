import React from 'react';
import AccordionList from '../../merchant/atoms/commonatoms/AccordionList';
import { useTranslation } from 'react-i18next';

function Section3Price() {
  const { i18n } = useTranslation(); // Access the i18n instance
  const currentLanguage = i18n.language || 'en'; // Get the current language from i18n

  // Define sections with both English and Arabic content
  const sections = {
    en: [
      {
        title: 'What is Board Pins?',
        content: 'Board Pins is an all-in-one platform connecting you with established and growing e-commerce businesses seeking your expertise.',
      },
      {
        title: 'Is it free to sign up for Board Pins?',
        content: 'Yes! Signing up and creating your profile on Board Pins is completely free.',
      },
      {
        title: 'What types of service providers can use Board Pins?',
        content: 'Board Pins is for a wide range of service providers! Whether you’re a web developer, marketing expert, graphic designer, or offer any service valuable to e-commerce businesses, you’re welcome.',
      },
      {
        title: 'How do I create a profile on Board Pins?',
        content: 'Creating a profile is easy! Simply sign up and fill out your information, highlighting your services, experience, and showcasing your portfolio.',
      },
      {
        title: 'Can I target specific types of e-commerce businesses?',
        content: 'Yes, you may be able to specify your preferred industries or project types to target relevant e-commerce businesses.',
      },
      {
        title: 'How do I collaborate with clients on Board Pins?',
        content: 'Board Pins offers a robust collaboration suite. Share files, discuss projects in real-time chat, and manage tasks efficiently - all within the platform.',
      },
      {
        title: 'Is communication with clients secure?',
        content: 'Absolutely! Board Pins utilizes secure communication protocols to keep your interactions and project details safe.',
      },
      {
        title: 'Does Board Pins handle payments?',
        content: 'Board Pins is currently focused on connecting service providers and e-commerce businesses. You will handle payments directly with your clients according to your agreed-upon terms.',
      },
      {
        title: 'How does this work?',
        content: 'Create a compelling profile showcasing your skills, experience, and portfolio. When e-commerce businesses search for service providers on Board Pins based on their needs, your profile may appear in the results.',
      },
      {
        title: 'What can I do to optimize my profile for discovery?',
        content: 'Use clear and concise language, showcase your experience with examples, include a strong portfolio, and consider specifying your preferred industries.',
      },
      {
        title: 'What happens when a business is interested in my services?',
        content: 'E-commerce businesses can contact you through the secure chat on Board Pins. You can discuss project details, negotiate terms, and decide if it’s a good fit.',
      },
    ],
    ar: [
      {
        title: 'ما هو Board Pins؟',
        content: 'Board Pins هو منصة شاملة تربطك مع الشركات الإلكترونية المتقدمة والناشئة التي تبحث عن خبرتك.',
      },
      {
        title: 'هل التسجيل مجاني لمقدمي الخدمات؟',
        content: 'نعم! التسجيل وإنشاء ملف تعريفك على Board Pins مجاني تمامًا.',
      },
      {
        title: 'ما أنواع مقدمي الخدمات الذين يمكنهم استخدام Board Pins؟',
        content: 'Board Pins مفتوح لمجموعة واسعة من مقدمي الخدمات! سواء كنت مطور ويب، خبير تسويق، مصمم جرافيك، أو تقدم أي خدمة قيمة للشركات الإلكترونية، فأنت مرحب بك.',
      },
      {
        title: 'كيف أقوم بإنشاء ملف تعريف على Board Pins؟',
        content: 'إنشاء ملف تعريف سهل! فقط قم بالتسجيل واملأ معلوماتك، مع إبراز خدماتك وخبراتك وعرض نماذج من أعمالك.',
      },
      {
        title: 'هل يمكنني استهداف أنواع محددة من الشركات الإلكترونية؟',
        content: 'نعم، قد تتمكن من تحديد الصناعات أو أنواع المشاريع المفضلة لديك لاستهداف الشركات الإلكترونية المناسبة.',
      },
      {
        title: 'كيف أتعاون مع العملاء على Board Pins؟',
        content: 'يقدم Board Pins مجموعة متكاملة للتعاون. شارك الملفات، ناقش المشاريع عبر الدردشة الفورية، وأدر المهام بكفاءة - كل ذلك داخل المنصة.',
      },
      {
        title: 'هل الاتصال مع العملاء آمن؟',
        content: 'بالطبع! يستخدم Board Pins بروتوكولات اتصال آمنة لحماية تفاعلاتك وتفاصيل المشاريع.',
      },
      {
        title: 'هل يتعامل Board Pins مع المدفوعات؟',
        content: 'Board Pins يركز حاليًا على ربط مقدمي الخدمات مع الشركات الإلكترونية. ستتعامل مع المدفوعات مباشرة مع عملائك وفقًا للشروط المتفق عليها.',
      },
      {
        title: 'كيف يعمل ذلك؟',
        content: 'أنشئ ملفًا شخصيًا جذابًا يعرض مهاراتك وخبراتك. عندما تبحث الشركات الإلكترونية عن مقدمي خدمات بناءً على احتياجاتهم، قد يظهر ملفك الشخصي في النتائج.',
      },
      {
        title: 'ماذا يمكنني أن أفعل لتحسين ملفي الشخصي؟',
        content: 'استخدم لغة واضحة ومختصرة، اعرض خبراتك بأمثلة، أدرج معرضًا قويًا لأعمالك، وفكر في تحديد الصناعات أو أنواع المشاريع المفضلة.',
      },
      {
        title: 'ماذا يحدث عندما تكون شركة مهتمة بخدماتي؟',
        content: 'يمكن للشركات الإلكترونية الاتصال بك مباشرة عبر الدردشة الآمنة في Board Pins. يمكنك مناقشة تفاصيل المشروع والتفاوض على الشروط وتحديد ما إذا كان مناسبًا.',
      },
    ],
  };

  // Get the sections based on the current language
  const currentSections = sections[currentLanguage] || sections.en;

  return (
    <div>
      <section className={`py-12 lg:mx-24 mx-6 ${currentLanguage === 'ar' ? 'font-cairo' : 'font-poppins'}`} dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
        <h2 className="text-[2.6rem] text-[#1E1E1E] text-center opacity-[90] py-5 font-[500]">
          {currentLanguage === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
        </h2>
        <AccordionList sections={currentSections} />
      </section>
    </div>
  );
}

export default Section3Price;
