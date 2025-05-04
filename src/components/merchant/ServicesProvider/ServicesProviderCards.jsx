import CardsInfo from "./CardsInfo";
import pic from '../../../assets/images/merchants/Rectangle 4649.png'; // Make sure to import the image correctly

function ServicesProviderCards() {
  const cardsData = [
    { title: "Project Name", role: "Graphic Design", phone: "101455", imgSrc: pic,status:"Acepted" ,itemsCategories:["tag1","Frontend"] },
    { title: "Project Name", role: "Graphic Design", phone: "101455", imgSrc: pic ,status:"Acepted",itemsCategories:["tag1"] },
    { title: "Project Name", role: "Graphic Design", phone: "101455", imgSrc: pic,status:"Acepted",itemsCategories:["tag1","tag2"] },
    { title: "Project Name", role: "Graphic Design", phone: "101455", imgSrc: pic ,status:"Acepted",itemsCategories:["tag1","tag2"] },
    { title: "Project Name", role: "Graphic Design", phone: "101455", imgSrc: pic,status:"Acepted" ,itemsCategories:["tag1","Frontend"] },
    { title: "Project Name", role: "Graphic Design", phone: "101455", imgSrc: pic ,status:"Acepted",itemsCategories:["tag1"] },
    { title: "Project Name", role: "Graphic Design", phone: "101455", imgSrc: pic,status:"Acepted",itemsCategories:["tag1","tag2"] },
    { title: "Project Name", role: "Graphic Design", phone: "101455", imgSrc: pic ,status:"Acepted",itemsCategories:["tag1","tag2"] },
    { title: "Project Name", role: "Graphic Design", phone: "101455", imgSrc: pic,status:"Acepted" ,itemsCategories:["tag1","Frontend"] },
    { title: "Project Name", role: "Graphic Design", phone: "101455", imgSrc: pic ,status:"Acepted",itemsCategories:["tag1"] },
    { title: "Project Name", role: "Graphic Design", phone: "101455", imgSrc: pic,status:"Acepted",itemsCategories:["tag1","tag2"] },
    { title: "Project Name", role: "Graphic Design", phone: "101455", imgSrc: pic ,status:"Acepted",itemsCategories:["tag1","tag2"] },
  ];

  return (
    <div className=" grid grid-cols-12 gap-5">
      {cardsData.map((card, index) => (
        <div key={index} className="lg:col-span-3 col-span-12 ">
          <CardsInfo 
            title={card.title} 
            role={card.role} 
            phone={card.phone} 
            imgSrc={card.imgSrc} 
            status={card.status}
            itemsCategories={card.itemsCategories}
          />
        </div>
      ))}
    </div>
  );
}

export default ServicesProviderCards;
