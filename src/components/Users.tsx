import { useState } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import CustomDropdown3dot from "./CustomDropdown3dot";

function Users() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className=" relative mt-6 py-[18px] px-5 bg-white border border-[#edf1f2] rounded  flex justify-between items-center">
      <div className="flex items-center gap-4 pr-[66px]">
        <div>
          <img
            className="w-12 h-12 rounded-full"
            src="https://cdn.pixabay.com/photo/2024/08/11/19/24/sunset-8962131_640.jpg"
            alt="User pic"
          />
        </div>
        <div>
          <h3>Abu Raihan</h3>
          <p className="text-[#007bff] mt-0.5">aburaihan@gmail.com</p>
        </div>
      </div>
      <div className="">
        <p className="text-[#8298a8]">Current panel</p>
        <p className="mt-0.5">Premlum</p>
      </div>
      <div className="">
        <p className="text-[#8298a8]">Products</p>
        <p className="text-[#007bff] mt-0.5">CRM, SMS Comp, Appointment</p>
      </div>
      <div className="">
        <button className="w-[84px] h-[30px] bg-[#b2edd7] rounded-[100px]">
          Action
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex justify-center items-center bg-white text-[#007bff] rounded border border-[#edf1f2]">
          <FaArrowRightToBracket />
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex justify-center items-center bg-[#cce4ff] rounded border border-transparent hover:border-[#007bff]"
        >
          <HiOutlineDotsVertical className="text-[#007bff]" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-20 right-5">
          <CustomDropdown3dot />
        </div>
      )}
    </div>
  );
}

export default Users;
