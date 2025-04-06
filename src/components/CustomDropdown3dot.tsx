import { IoDocumentText } from "react-icons/io5";
import { MdDelete, MdDisabledVisible } from "react-icons/md";

function CustomDropdown3dot() {
  return (
    <div className="bg-white w-[200px] h-[290px] rounded py-[20px] px-[20px] border-2">
      <div className="w-[160px] h-[40px] rounded-[5px] border border-[#edf1f2] hover:bg-blue-100">
        Edit Customer <IoDocumentText />
      </div>
      <div className="w-[160px] h-[40px] py-2.5 px-6 rounded-[5px] border border-[#edf1f2] hover:bg-blue-100">
        Assign Plan <IoDocumentText />
      </div>
      <div className="w-[160px] h-[40px] py-2.5 px-6 rounded-[5px] border border-[#edf1f2] hover:bg-blue-100">
        Disable <MdDisabledVisible />
      </div>
      <div className="w-[160px] h-[40px] py-2.5 px-6 rounded-[5px] border border-[#edf1f2] hover:bg-blue-100">
        Subscriptions <MdDisabledVisible />
      </div>
      <div className="w-[160px] h-[40px] py-2.5 px-6 rounded-[5px] border border-[#edf1f2] hover:bg-blue-100">
        Click Login URL <IoDocumentText />
      </div>
      <div className="w-[160px] h-[40px] py-2.5 px-6 rounded-[5px] border border-[#edf1f2] hover:bg-blue-100">
        Move to Trash <MdDelete />
      </div>
    </div>
  );
}

export default CustomDropdown3dot;
