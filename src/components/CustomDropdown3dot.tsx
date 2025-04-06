import { IoDocumentText } from "react-icons/io5";
import { MdDelete, MdDisabledVisible } from "react-icons/md";

function CustomDropdown3dot({ handleClose }: { handleClose: () => void }) {
  return (
    <>
      <div className="rotate-45"></div>
      <div
        onClick={handleClose}
        className=" flex flex-col items-center bg-white w-[200px] h-[280px] rounded py-[20px] px-[20px] border-2 border-[#f2f2f2]"
      >
        <div className="text-[13px] w-[165px] h-[40px] rounded-[5px] hover:bg-blue-100 flex items-center gap-2.5 px-6 cursor-pointer">
          <IoDocumentText className="text-blue-500" /> Edit Customer
        </div>
        <div className="text-[13px] w-[165px] h-[40px] py-2.5 px-6 rounded-[5px] hover:bg-blue-100 flex items-center gap-2.5 cursor-pointer">
          <IoDocumentText className="text-blue-500" /> Assign Plan
        </div>
        <div className="text-[13px] w-[165px] h-[40px] py-2.5 px-6 rounded-[5px] hover:bg-blue-100 flex items-center gap-2.5 cursor-pointer">
          <MdDisabledVisible className="text-blue-500" /> Disable
        </div>
        <div className="text-[13px] w-[165px] h-[40px] py-2.5 px-6 rounded-[5px] hover:bg-blue-100 flex items-center gap-2.5 cursor-pointer">
          <MdDisabledVisible className="text-blue-500" /> Subscriptions
        </div>
        <div className="text-[13px] w-[165px] h-[40px] py-2.5 px-6 rounded-[5px] hover:bg-blue-100 flex items-center gap-2.5 cursor-pointer">
          <IoDocumentText className="text-blue-500" /> Click Login URL
        </div>
        <div className="text-[13px] w-[165px] h-[40px] py-2.5 px-6 rounded-[5px] hover:bg-blue-100 flex items-center gap-2.5 cursor-pointer">
          <MdDelete className="text-blue-500" /> Move to Trash
        </div>
      </div>
    </>
  );
}

export default CustomDropdown3dot;
