import iconTask from "../../../assets/icons/Icon  Bank.png";
import gray from  "../../../assets/icons/gray_img.png";
import icon_edit from '../../../assets/icons/pepicons-pop_expand.png';
import icon_setting from '../../../assets/icons/Group (1).png';
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";

function MerchantsConnect() {
  // Define your array of merchants
  const merchants = [
    { name: "Merchant Name 1", description: "any description here", timeAgo: "16h ago" },
    { name: "Merchant Name 2", description: "any description here", timeAgo: "16h ago" },

  ];

  return (
    <div className=''>
      <header className='py-5 items-center gap-2 flex relative'>
        <img src={iconTask} className="w-[45px] p-3 h-[45px] bg-[#D9D9D9] rounded-xl" alt="Task Icon" />
        <div>
          <h3 className="font-[400] text-[22px]">Merchants Want’s to connect</h3>
        </div>
        <div className='flex end-0 absolute'>
          <button className='w-[25px]'>
            <img src={icon_edit} alt="Edit Icon"/>
          </button>
          <button className='w-[25px]'>
            <img src={icon_setting} alt="Setting Icon"/>
          </button>
        </div>
      </header>

      <main>
        <div className="w-full max-h-[70vh] overflow-y-auto gap-4 grid grid-cols-12 mb-5">
          {merchants.map((merchant, index) => (
            <>
              <div className=" md:col-span-6 col-span-12  flex">
                <div className="items-center flex">
                  <img src={gray} className="w-[70px] h-[70px]" alt="Merchant Avatar" />
                  <div className="ps-3 block">
                    <h2>{merchant.name}</h2>
                    <p className="text-[#26222B] text-[12px]">{merchant.description}</p>
                    <span className="text-[#7D7D7D] flex items-center gap-2">
                      <AiOutlineClockCircle />{merchant.timeAgo}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-6 flex text-white gap-2 font-[400] items-center">
                <div className="flex-grow"></div> {/* This will push buttons to the right */}
                <div className="flex gap-2">
                  <button className="bg-[#52CD8F] md:py-2 py-1 px-6 rounded-lg flex items-center md:mb-0  gap-2">
                    <CiCircleCheck />Accept
                  </button>
                  <button className="bg-[#FF3636] md:py-2 px-6 rounded-lg gap-2 flex items-center">
                    <IoIosCloseCircleOutline />Decline
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MerchantsConnect;
