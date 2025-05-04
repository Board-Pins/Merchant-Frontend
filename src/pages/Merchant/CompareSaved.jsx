import React from 'react'
import HeaderCommonComparison from '../../components/merchant/CompareInProvider/Compare/HeaderCommonComparison';
import { Bookmark } from '@mui/icons-material';

function CompareSaved() {
  const cardData = [
    {
      id: 1,
      title: 'Payment gateways Comparison',
      items: [
        { id: 1, imgSrc: 'https://via.placeholder.com/100', alt: 'Payment Gateway 1' },
        { id: 2, imgSrc: 'https://via.placeholder.com/100', alt: 'Payment Gateway 2' },
        { id: 3, imgSrc: 'https://via.placeholder.com/100', alt: 'Payment Gateway 3' },
      ],
    },
    {
      id: 2,
      title: 'Another Comparison',
      items: [
        { id: 1, imgSrc: 'https://via.placeholder.com/100', alt: 'Comparison 1' },
        { id: 2, imgSrc: 'https://via.placeholder.com/100', alt: 'Comparison 2' },
      ],
    },
    {
      id: 3,
      title: 'Yet Another Comparison',
      items: [
        { id: 1, imgSrc: 'https://via.placeholder.com/100', alt: 'Comparison 3' },
        { id: 2, imgSrc: 'https://via.placeholder.com/100', alt: 'Comparison 4' },

      ],
    },
    {
      id: 4,
      title: 'Different Comparison',
      items: [
        { id: 1, imgSrc: 'https://via.placeholder.com/100', alt: 'Comparison 7' },
        { id: 2, imgSrc: 'https://via.placeholder.com/100', alt: 'Comparison 8' },
      ],
    },
    {
      id: 5,
      title: 'Yet Another Comparison',
      items: [
        { id: 1, imgSrc: 'https://via.placeholder.com/100', alt: 'Comparison 9' },
        { id: 2, imgSrc: 'https://via.placeholder.com/100', alt: 'Comparison 10' },
        { id: 3, imgSrc: 'https://via.placeholder.com/100', alt: 'Comparison 11' },
      ],
    },
    {
      id: 6,
      title: 'Final Comparison',
      items: [
        { id: 1, imgSrc: 'https://via.placeholder.com/100', alt: 'Comparison 12' },
        { id: 2, imgSrc: 'https://via.placeholder.com/100', alt: 'Comparison 13' },
      ],
    },
  ];

  return (
    <div className="p-2 py-12 font-poppins bg-white px-8">
      <HeaderCommonComparison Showbutton={false} />

      <main>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-12">
          {cardData.map((card) => (
            <div className="card " key={card.id} >
              <h5 className="text-[#404040] py-2">{card.title}</h5>
              <div className="   bg-[#F9F9F9] px-2 rounded-xl min-h-[200px]">
                <div className='flex w-full justify-end text-[#FFC226] py-5'><Bookmark color='#FFC226' /></div>
                <div className='flex items-center justify-center'>

                  {card.items.map((item, index) => (
                    <React.Fragment key={item.id}>

                      <div className="max-w-[100px] max-h-[100px] rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <img
                          src={item.imgSrc}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {index < card.items.length - 1 && (
                        <span className="bg-primary rounded-full text-white p-3 text-sm font-bold">
                          VS
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CompareSaved