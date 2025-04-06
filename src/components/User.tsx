import { useState } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import CustomDropdown3dot from "./CustomDropdown3dot";

type UserProps = {
  user: {
    name: string;
    email: string;
    role: string;
    profilePic: string;
  };
  index: number;
  toggleRole: (index: number) => void;
};

function User({ user, index, toggleRole }: UserProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="overflow-auto lg:overflow-visible max-w-full font-semibold">
      <table className="w-full min-w-[900px]">
        <tbody>
          <tr className="relative mt-2 py-[18px] px-5 bg-white border border-[#edf1f2] rounded flex justify-between items-center">
            <td>
              <div className="flex items-center gap-4">
                <div>
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://cdn.pixabay.com/photo/2024/08/11/19/24/sunset-8962131_640.jpg"
                    alt="User pic"
                  />
                </div>
                <div className="">
                  <h3 className="">{user?.name}</h3>
                  <p className="text-[#007bff] mt-0.5">{user?.email}</p>
                </div>
              </div>
            </td>
            <td>
              <div className="">
                <p className="text-[#8298a8]">Current panel</p>
                <p className="mt-0.5">Premlum</p>
              </div>
            </td>
            <td>
              <div className="">
                <p className="text-[#8298a8]">Products</p>
                <p className="text-[#007bff] mt-0.5">
                  CRM, SMS Comp, Appointment
                </p>
              </div>
            </td>
            <td>
              <div className="">
                <button
                  onClick={() => toggleRole(index)}
                  className={`${
                    user?.role === "Action" ? "bg-[#b2edd7]" : "bg-[#dae1e6]"
                  } cursor-pointer w-[84px] h-[30px] rounded-[100px]`}
                >
                  Action
                </button>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-4">
                <button className="cursor-pointer w-10 h-10 flex justify-center items-center bg-white text-gray-400 hover:text-[#007bff] rounded border-[2px] border-[#edf1f2] hover:border-[#007bff]">
                  <FaArrowRightToBracket />
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer w-[26px] h-10 flex justify-center items-center bg-[#cce4ff] rounded border-[2px] border-transparent hover:border-[#007bff]"
                >
                  <HiOutlineDotsVertical className="text-[#007bff]" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {isOpen && (
        <div className="absolute top-64 right-13.5 md:top-64 md:right-17 lg:top-50 lg:right-35 z-50">
          <CustomDropdown3dot handleClose={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default User;
