import { IoPersonRemove } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { TiGroup, TiPinOutline } from "react-icons/ti";
import { GoDotFill, GoPerson } from "react-icons/go";
import { TbTargetArrow } from "react-icons/tb";
import { AiOutlineAppstore } from "react-icons/ai";

import { ProductionCard } from "../ProductionGroup/ProductionCard/ProductionCard";
import { Header } from "../ProductionGroup/ProductionCard/Header";

const productionData = [
  {
    factoryName: "Factory Name 1",
    reviews: 2.5,
    groupName: "Group Name 1",
    target: "500 from 1000",
    merchantsApplied: "6",
    createdAt: "2 hours ago",
    category: "Footwear",
    avatars: [
      "https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg",
      "https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg",
    ],
    image: "https://2u.pw/WMyz2RKv",
    infoItemsMapping: [
      {
        icon: <GrGroup size={22} color="#292D32" />,
        titleKey: "groupName",
        subtitle: "Group Name",
      },
      {
        icon: <TbTargetArrow size={22} color="#292D32" />,
        titleKey: "target",
        subtitle: "Target Number",
      },
      {
        icon: <GoPerson size={22} color="#292D32" />,
        titleKey: "merchantsApplied",
        subtitle: "Merchants Applied",
      },
      {
        icon: <GoPerson size={22} color="#292D32" />,
        titleKey: "createdAt",
        subtitle: "Created At",
      },
      {
        icon: <AiOutlineAppstore size={22} color="#292D32" />,
        titleKey: "category",
        subtitle: "Category",
      },
    ],
  },
  {
    factoryName: "Factory Name 1",
    reviews: 2.5,
    groupName: "Group Name 1",
    target: "500 from 1000",
    merchantsApplied: "6",
    createdAt: "2 hours ago",
    category: "Footwear",
    avatars: [
      "https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg",
      "https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg",
    ],
    image: "https://2u.pw/WMyz2RKv",
    infoItemsMapping: [
      {
        icon: <GrGroup size={22} color="#292D32" />,
        titleKey: "groupName",
        subtitle: "Group Name",
      },
      {
        icon: <TbTargetArrow size={22} color="#292D32" />,
        titleKey: "target",
        subtitle: "Target Number",
      },
      {
        icon: <GoPerson size={22} color="#292D32" />,
        titleKey: "merchantsApplied",
        subtitle: "Merchants Applied",
      },
      {
        icon: <GoPerson size={22} color="#292D32" />,
        titleKey: "createdAt",
        subtitle: "Created At",
      },
      {
        icon: <AiOutlineAppstore size={22} color="#292D32" />,
        titleKey: "category",
        subtitle: "Category",
      },
    ],
  },
  {
    factoryName: "Factory Name 2",
    reviews: 4.0,
    groupName: "Group Name 2",
    target: "300 from 600",
    merchantsApplied: "10",
    createdAt: "5 hours ago",
    category: "Apparel",
    avatars: ["https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg"],
    image: "https://2u.pw/WMyz2RKv",
    infoItemsMapping: [
      {
        icon: <IoPersonRemove size={22} color="#292D32" />,
        titleKey: "groupName",
        subtitle: "Group Name",
      },
      {
        icon: <TbTargetArrow size={22} color="#292D32" />,
        titleKey: "target",
        subtitle: "Target Number",
      },
      {
        icon: <FaWhatsapp size={22} color="#292D32" />,
        titleKey: "merchantsApplied",
        subtitle: "Merchants Applied",
      },
      {
        icon: <FaStar size={22} color="#292D32" />,
        titleKey: "createdAt",
        subtitle: "Created At",
      },
      {
        icon: <AiOutlineAppstore size={22} color="#292D32" />,
        titleKey: "category",
        subtitle: "Category",
      },
    ],
  },
  // Add more items as needed
];

function ProductionGroups() {
  return (
    <div className="p-4 font-poppins">
      <Header />
      <main>
        <div className="py-6 grid lg:grid-cols-3 grid-cols-1 gap-4 max-w-full overflow-x-auto">
          {productionData.map((data, index) => (
            <ProductionCard key={index} {...data} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductionGroups;
