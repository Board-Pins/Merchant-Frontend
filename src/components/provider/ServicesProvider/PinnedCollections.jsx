import React from "react";

const items = [
  {
    mainImage: "https://via.placeholder.com/150/ff0000/ffffff?text=Image+2",
    secondaryImages: [
      "https://via.placeholder.com/150/ff0000/ffffff?text=Image+2",
      "https://via.placeholder.com/150/00ff00/ffffff?text=Image+3",
      "https://via.placeholder.com/150/0000ff/ffffff?text=Image+4",
      "https://via.placeholder.com/150/ffff00/ffffff?text=Image+5",
    ],
    title: "software services",
    description: "4 items | Updated on 1/2/2024",
  },
  {
    mainImage: "https://via.placeholder.com/150/ff0000/ffffff?text=Image+2",
    secondaryImages: [
      "https://via.placeholder.com/150/ff0000/ffffff?text=Image+2",
      "https://via.placeholder.com/150/00ff00/ffffff?text=Image+3",
      "https://via.placeholder.com/150/0000ff/ffffff?text=Image+4",
      "https://via.placeholder.com/150/ffff00/ffffff?text=Image+5",
    ],
    title: "Pinned Service providers",
    description: "4 items | Updated on 1/2/2024",
  },
  {
    mainImage: "https://via.placeholder.com/150/ff0000/ffffff?text=Image+2",
    secondaryImages: [
      "https://via.placeholder.com/150/ff0000/ffffff?text=Image+2",
      "https://via.placeholder.com/150/00ff00/ffffff?text=Image+3",
      "https://via.placeholder.com/150/0000ff/ffffff?text=Image+4",
      "https://via.placeholder.com/150/ffff00/ffffff?text=Image+5",
    ],
    title: "Bussiness Section",
    description: "4 items | Updated on 1/2/2024",
  },
  // Repeat for each item
];

function PinnedCollections() {
  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-2 gap-4 min-h-[200px]">
          <img
            src={item.mainImage}
            alt="Merchant Image"
            className="h-full bg-gray-100 grayscale rounded-lg"
          />
          <div className="grid grid-cols-2 gap-3 h-full">
            {item.secondaryImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Image ${idx + 2}`}
                className="h-full bg-gray-400 rounded-lg grayscale"
              />
            ))}
          </div>
          <div className="w-full py-3 col-span-2">
            <h1 className=" text-dark  font-semibold text-sm w-full">{item.title}</h1>
            <p className=" text-[#BBBBBB] text-xs w-full">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PinnedCollections;
