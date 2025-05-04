import React, { useState } from "react";
import HeaderProductionsGroup from "../../components/merchant/ProductionGroup/HeaderProductionsGroup";
import HeaderConnectedMerchants from "../../components/merchant/ServicesProvider/HeaderPinnedServicesProvider";
import SelectProductionsGroup from "../../components/merchant/ProductionGroup/SelectProductionsGroup";
import MerchantCards from "../../components/merchant/ServicesProvider/ServicesProviderCards";
import CardProductionsGroup from "../../components/merchant/ProductionGroup/CardProductionsGroup";
import CreateProductionGroupModal from "../../components/merchant/ProductionGroup/CreateProductionGroupModal";
import { GrGroup } from "react-icons/gr";
import { TbTargetArrow } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoPersonRemove } from "react-icons/io5";
import { FaStar, FaWhatsapp } from "react-icons/fa";

function SavedProductionGroup() {
  const productionData = [


    {
      factoryName: "Factory Name 2",
      reviews: 4.0,
      groupName: "Group Name 2",
      target: "300 from 600",
      merchantsApplied: "10",
      createdAt: "5 hours ago",
      category: "Apparel",
      avatars: ["https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg"],
      image: "https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg",
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
    {
      factoryName: "Factory Name 2",
      reviews: 4.0,
      groupName: "Group Name 2",
      target: "300 from 600",
      merchantsApplied: "10",
      createdAt: "5 hours ago",
      category: "Apparel",
      avatars: ["https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg"],
      image: "https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg",
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
    {
      factoryName: "Factory Name 2",
      reviews: 4.0,
      groupName: "Group Name 2",
      target: "300 from 600",
      merchantsApplied: "10",
      createdAt: "5 hours ago",
      category: "Apparel",
      avatars: ["https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg"],
      image: "https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg",
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
  const [isOpen, setisOpen] = useState(false);
  const onClose = () => {
    setisOpen(false);
  };
  return (
    <div className=" bg-white p-6 rounded-xl min-h-full font-poppins">
      <SelectProductionsGroup />

      <CardProductionsGroup
        setisOpen={setisOpen}
        productionData={productionData}
        requsetbutton={"false"}

      />
      <CreateProductionGroupModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default SavedProductionGroup;
