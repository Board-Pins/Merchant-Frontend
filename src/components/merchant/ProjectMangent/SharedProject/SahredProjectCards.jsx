import pic from "../../../../assets/images/merchants/Rectangle 4649.png"; // Make sure to import the image correctly
import CardInfoSharedProject from "./CardInfoSharedProject";

function SharedProjectCards() {
  const cardsData = [
    {
      title: "Project Name",
      role: "Graphic Design",
      phone: "101455",
      imgSrc: pic,
      startDate: "1/2/2024 , 07:00 AM",
      dueDate: "1/2/2024 , 12:00PM",
      progress: 75,
    },
    {
      title: "Project Name",
      role: "Graphic Design",
      phone: "101455",
      imgSrc: pic,
      startDate: "1/2/2024 , 07:00 AM",
      dueDate: "1/2/2024 , 12:00PM",
      progress: 95,
    },
    {
      title: "Project Name",
      role: "Graphic Design",
      phone: "101455",
      imgSrc: pic,
      startDate: "1/2/2024 , 07:00 AM",
      dueDate: "1/2/2024 , 12:00PM",
      progress: 50,
    },
    {
      title: "Project Name",
      role: "Graphic Design",
      phone: "101455",
      imgSrc: pic,
      startDate: "1/2/2024 , 07:00 AM",
      dueDate: "1/2/2024 , 12:00PM",
      progress: 50,
    },
    {
      title: "Project Name",
      role: "Graphic Design",
      phone: "101455",
      imgSrc: pic,
      startDate: "1/2/2024 , 07:00 AM",
      dueDate: "1/2/2024 , 12:00PM",
      progress: 75,
    },
    {
      title: "Project Name",
      role: "Graphic Design",
      phone: "101455",
      imgSrc: pic,
      startDate: "1/2/2024 , 07:00 AM",
      dueDate: "1/2/2024 , 12:00PM",
      progress: 75,
    },
    {
      title: "Project Name",
      role: "Graphic Design",
      phone: "101455",
      imgSrc: pic,
      startDate: "1/2/2024 , 07:00 AM",
      dueDate: "1/2/2024 , 12:00PM",
      progress: 75,
    },
    {
      title: "Project Name",
      role: "Graphic Design",
      phone: "101455",
      imgSrc: pic,
      startDate: "1/2/2024 , 07:00 AM",
      dueDate: "1/2/2024 , 12:00PM",
      progress: 75,
    },
    {
      title: "Project Name",
      role: "Graphic Design",
      phone: "101455",
      imgSrc: pic,
      startDate: "1/2/2024 , 07:00 AM",
      dueDate: "1/2/2024 , 12:00PM",
      progress: 75,
    },
    {
      title: "Project Name",
      role: "Graphic Design",
      phone: "101455",
      imgSrc: pic,
      startDate: "1/2/2024 , 07:00 AM",
      dueDate: "1/2/2024 , 12:00PM",
      progress: 75,
    },
    {
      title: "Project Name",
      role: "Graphic Design",
      phone: "101455",
      imgSrc: pic,
      startDate: "1/2/2024 , 07:00 AM",
      dueDate: "1/2/2024 , 12:00PM",
      progress: 75,
    },
    {
      title: "Project Name",
      role: "Graphic Design",
      phone: "101455",
      imgSrc: pic,
      startDate: "1/2/2024 , 07:00 AM",
      dueDate: "1/2/2024 , 12:00PM",
      progress: 75,
    },
  ];

  return (
    <div className=" grid grid-cols-12 gap-5">
      {cardsData?.map((card, index) => (
        <div key={index} className="lg:col-span-3 col-span-12 ">
          <CardInfoSharedProject
            title={card.title}
            role={card.role}
            phone={card.phone}
            imgSrc={card.imgSrc}
            startDate={card.startDate}
            dueDate={card.dueDate}
            progress={card.progress}
          />
        </div>
      ))}
    </div>
  );
}

export default SharedProjectCards;
