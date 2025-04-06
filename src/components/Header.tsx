import { BiSolidSearchAlt2 } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoFilterSharp } from "react-icons/io5";
import CustomDropdownUCE from "./CustomDropdown";

function Header() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="flex items-center gap-4">
        <CustomDropdownUCE />

        <div className="w-10 h-10 py-2.5 px-2 bg-white border border-[#edf1f2] rounded-[5px] flex justify-center items-center">
          <IoFilterSharp />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Type to search"
            className="cursor-pointer w-[166px] md:w-[266px] h-[40px] py-2.5 px-5 bg-white border border-[#edf1f2] rounded-[5px] focus:outline-none focus:border-blue-400 focus:placeholder-transparent"
          />
          <div className="absolute inset-y-0 right-3 text-gray-400 flex items-center">
            <BiSolidSearchAlt2 className="text-lg" />
          </div>
        </div>
      </div>

      <div className="mt-4 lg:mt-0 flex items-center gap-5">
        <div className=" cursor-pointer w-[161px] h-10 py-2.5 px-2.5 flex items-center justify-between bg-[#007bff] text-white border rounded-[5px]">
          New Customer <FaPlus />
        </div>
        <button className="cursor-pointer w-[30px] h-10 p-[5px] flex justify-center items-center bg-[#cce4ff] rounded border border-transparent hover:border-[#007bff]">
          <HiOutlineDotsVertical className="text-[#007bff]" />
        </button>
      </div>
    </div>
  );
}

export default Header;
