import CardsInfo from "./CardsInfo";
import pic from '../../../assets/images/merchants/Rectangle 4649.png'; // Make sure to import the image correctly
import CardsInfoPinned from "./CardsInfoPinned";
import merchantrec from "../../../assets/images/merchants/merchantrec.png"
function PinnedCards() {
  const cardsData = [
    { title: "Service Provider Name",description:"Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus. " , imgSrc: merchantrec,reviews:"150" ,rate:"4.5",itemsCategories:["tag1","Frontend"] },
    { title: "Service Provider Name", description:"Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus. ", imgSrc: merchantrec ,reviews:"150",rate:"4.5" ,itemsCategories:["tag1"] },
    { title: "Service Provider Name", description:"Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus. ", imgSrc: merchantrec,reviews:"150",rate:"4.5" ,itemsCategories:["tag1","tag2"] },
    { title: "Service Provider Name", description:"Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus. ", imgSrc: merchantrec ,reviews:"150",rate:"4.5" ,itemsCategories:["tag1","tag2"] },
    { title: "Service Provider Name", description:"Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus. ", imgSrc: merchantrec,reviews:"150" ,rate:"4.5" ,itemsCategories:["tag1","Frontend"] },
    { title: "Service Provider Name", description:"Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus. ", imgSrc: merchantrec ,reviews:"4150",rate:"4.5" ,itemsCategories:["tag1"] },

  ];

  return (
    <div className=" grid grid-cols-12 gap-5">
      {cardsData.map((card, index) => (
        <div key={index} className="lg:col-span-3 col-span-12 ">
          <CardsInfoPinned 
            title={card.title} 
            role={card.role} 
            description={card.description}
            imgSrc={card.imgSrc} 
            reviews={card.reviews}
            status={card.rate}
            itemsCategories={card.itemsCategories}
          />
        </div>
      ))}
    </div>
  );
}

export default PinnedCards;
