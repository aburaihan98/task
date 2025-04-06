import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { LuUserRoundCog } from "react-icons/lu";
import { TbUsersGroup } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";

function SideBar() {
  return (
    <div className="py-4 px-4 mr-4">
      <p>dashboard</p>
      <div className="mt-6 space-y-6">
        <div className="space-y-4  border-l-2 border-[#edf1f2] pl-4">
          <p className="mb-2 text-gray-400 flex items-center justify-between">
            customer{" "}
            <span className=" font-bold text-black">
              <FaMinus />
            </span>
          </p>
          <div className="flex items-center gap-4">
            <FaRegUser className="p-1 rounded bg-[#00bf79] text-white text-lg" />
            Customers
          </div>
          <div className="flex items-center gap-4">
            <LuUserRoundCog className="p-1 rounded bg-[#b071f0] text-white text-lg" />
            Subscriptions
          </div>
          <div className="flex items-center gap-4">
            <LiaFileInvoiceSolid className="p-1 rounded bg-[#37bcfa] text-white text-lg" />
            Invoices
          </div>
        </div>
        <div className="space-y-4  border-l-2 border-[#edf1f2] pl-4">
          <p className="mb-2 text-gray-400 flex items-center justify-between">
            Plan & Pricing{" "}
            <span className=" font-bold text-black">
              <FaMinus />
            </span>
          </p>
          <div className="flex items-center gap-4">
            <LiaFileInvoiceSolid className="p-1 rounded bg-[#ff408f] text-white text-lg" />
            Manage Plans
          </div>
          <div className="flex items-center gap-4">
            <LiaFileInvoiceSolid className="p-1 rounded bg-[#4789fc] text-white text-lg" />
            Extra Planner
          </div>
          <div className="flex items-center gap-4">
            <TiDocumentText className="p-1 rounded bg-[#4789fc] text-white text-lg" />
            Tax Setting
          </div>
        </div>
        <p
          className="mb-2 pl-4
         text-gray-400 flex items-center justify-between"
        >
          Report
          <span className=" font-bold text-black">
            <FaPlus />{" "}
          </span>
        </p>
        <div className="space-y-4  border-l-2 border-[#edf1f2] pl-4">
          <p className="mb-2 text-gray-400 flex items-center justify-between">
            Admin{" "}
            <span className=" font-bold text-black">
              <FaMinus />
            </span>
          </p>
          <div className="flex items-center gap-4">
            <TbUsersGroup className="p-1 rounded bg-[#00bf79] text-white text-lg" />
            Admins
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineUsergroupDelete className="p-1 rounded bg-[#ff408f] text-white text-lg" />
            Admin Groups
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
