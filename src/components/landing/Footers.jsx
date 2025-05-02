
import { LazyLoadImage } from 'react-lazy-load-image-component'
import call from "../../../assets/landing/call.svg";
import bank from "../../../assets/landing/Bank.svg";
import face from "../../../assets/landing/Group.svg";
import insta from "../../../assets/landing/insta.png";
import twit from "../../../assets/landing/twit.svg";
function Footers() {
  return (
    <div>     <section className="footer font-poppins">

    <div className="text-center mt-12 mb-10 pb-8 border-[#000] border-b-2 xl:mx-36  lg:mx-16 mx-6 font-poppins">
       <p className="text-[#333] text-[2.075rem]  font-[400] font-poppins leading-[2.90988rem]">
          Join Board Pins Today!
       </p>
       <p className="text-[#000] text-[1.5rem]  font-[300] font-poppins ">
          Unlock Opportunities, Expand Your Business
       </p>
       <button className="m-auto relative   block bg-[#6161FF] rounded-[1.71875rem] text-[0.9375rem] text-[#F5F6FA] leading-[2.5rem] py-0 px-5 mt-8">
          Become a Partner 🠚
       </button>
    </div>
    <div className="  xl:w-10/12 lg:w-11/12 w-full mx-auto px-10">
       <ul className="flex">
          <ul className="flex-1">
             <li className="underline text-[#000] text-[1.33719rem] font-[400] font-poppins">
                Home
             </li>
             <li className="underline text-[#000] text-[1.33719rem] font-[400] font-poppins">
                Explore all Benefits{" "}
             </li>
             <li className="underline text-[#000] text-[1.33719rem] font-[400] font-poppins">
                About Us
             </li>
             <li className="underline text-[#000] text-[1.33719rem] font-[400] font-poppins">
                How It Works
             </li>
          </ul>
          <ul className="flex-1">
             <li className="text-[#000] text-[1.33719rem]  font-[400] font-poppins ">
                Contact Us
             </li>
             <li className="text-[#000] text-[1.33719rem]  font-[300] font-poppins ">
                 
                <LazyLoadImage
                   src={call}
                   className="inline-block w-5 me-1"
                />{" "}
                (+20) 1555871500
             </li>
             <li className="text-[#000] text-[1.33719rem]  font-[300] font-poppins ">
                <LazyLoadImage
                   src={bank}
                   className="inline-block w-5 me-1"
                />
                info@baggr.org
             </li>
          </ul>
          <div className="flex-1 font-poppins">
             <p className="text-[#000] xl:text-[2.67106rem] lg:text-[2.2rem] text-[2rem]  font-[600] font-poppins leading-[4.45175rem]">
                Board Pins<span className="text-[#6161FF]">.</span>
             </p>
             <div className="grid grid-cols-3 w-3/6 p-6">
                <div className="col-span-1 bg-[#ECECEC] p-2 rounded-lg mx-2">
                   <LazyLoadImage src={face} />
                </div>
                <div className="col-span-1 bg-[#ECECEC] p-2 rounded-lg mx-2">
                   <LazyLoadImage src={insta} />
                </div>
                <div className="col-span-1 bg-[#ECECEC] p-2 rounded-lg mx-2">
                   <LazyLoadImage src={twit} />
                </div>
             </div>
          </div>
       </ul>
    </div>
 </section></div>
  )
}

export default Footers