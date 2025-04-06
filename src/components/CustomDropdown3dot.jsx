import React from "react";
import { IoDocumentText } from "react-icons/io5";
import { MdDelete, MdDisabledVisible } from "react-icons/md";

function CustomDropdown3dot() {
  return (
    <div className="bg-white w-[200px] h-[290px] rounded py-[20px] px-[20px] border-2">
      <div className="w-[160px] h-[40px] rounded-[5px]">
        Edit Customer <IoDocumentText />
      </div>
      <div className="w-[160px] h-[40px] rounded-[5px]">
        Assign Plan <IoDocumentText />
      </div>
      <div className="w-[160px] h-[40px] rounded-[5px]">
        Disable <MdDisabledVisible />
      </div>
      <div className="w-[160px] h-[40px] rounded-[5px]">
        Subscriptions <MdDisabledVisible />
      </div>
      <div className="w-[160px] h-[40px] rounded-[5px]">
        Click Login URL <IoDocumentText />
      </div>
      <div className="w-[160px] h-[40px] rounded-[5px]">
        Move to Trash <MdDelete />
      </div>
    </div>
  );
}

export default CustomDropdown3dot;
