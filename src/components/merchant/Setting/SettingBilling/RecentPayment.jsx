import React from "react";
import imggray from "../../../../assets/images/provider/imggray.png";
import { Link } from "react-router-dom";
function RecentPayment() {
  return (
    <div className=" bg-[#f4f4f469] h-full p-8 rounded">
      <div className=" flex py-3 ">
        <div className=" flex-grow ">Recent Payment</div>
        <Link to='/ordering-billing' className=" text-[#6161FF] cursor-pointer">view all</Link>
      </div>
      <main className=" flex flex-col mt-6 gap-3">
        <div className=" flex ">
          <div className=" flex-grow flex gap-5 items-center">
            <img
              src={imggray}
              alt="payment"
              className=" w-[70px] h-[60px] rounded-xl"
            />
            <div>
              <h3 className=" text-[#828282] py-1 ">plan name</h3>
              <p className=" text-[#828282]  font-light text-xs">
                Due invoices
              </p>
            </div>
          </div>

          <div>
            <h3 className=" font-bold text-[#6161FF] text-lg ">
              300.00{" "}
              <span className=" font-light  font-mono text-[#828282]">EGP</span>
            </h3>
          </div>
        </div>
        <div className=" flex ">
          <div className=" flex-grow flex gap-5 items-center">
            <img
              src={imggray}
              alt="payment"
              className=" w-[70px] h-[60px] rounded-xl"
            />
            <div>
              <h3 className=" text-[#828282] py-1 ">plan name</h3>
              <p className=" text-[#828282]  font-light text-xs">
                Due invoices
              </p>
            </div>
          </div>

          <div>
            <h3 className=" font-bold text-[#6161FF] text-lg ">
              300.00{" "}
              <span className=" font-light  font-mono text-[#828282]">EGP</span>
            </h3>
          </div>
        </div>
        <div className=" flex ">
          <div className=" flex-grow flex gap-5 items-center">
            <img
              src={imggray}
              alt="payment"
              className=" w-[70px] h-[60px] rounded-xl"
            />
            <div>
              <h3 className=" text-[#828282] py-1 ">plan name</h3>
              <p className=" text-[#828282]  font-light text-xs">
                Due invoices
              </p>
            </div>
          </div>

          <div>
            <h3 className=" font-bold text-[#6161FF] text-lg ">
              300.00{" "}
              <span className=" font-light  font-mono text-[#828282]">EGP</span>
            </h3>
          </div>
        </div>
        <div className=" flex ">
          <div className=" flex-grow flex gap-5 items-center">
            <img
              src={imggray}
              alt="payment"
              className=" w-[70px] h-[60px] rounded-xl"
            />
            <div>
              <h3 className=" text-[#828282] py-1 ">plan name</h3>
              <p className=" text-[#828282]  font-light text-xs">
                Due invoices
              </p>
            </div>
          </div>

          <div>
            <h3 className=" font-bold text-[#6161FF] text-lg ">
              300.00{" "}
              <span className=" font-light  font-mono text-[#828282]">EGP</span>
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RecentPayment;
