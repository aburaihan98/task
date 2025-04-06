import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function CustomDropdownUCE() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const selectOption = (option: string): void => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-[164px] h-10 bg-white py-[10px] px-[20px] border border-[#edf1f2] rounded hover:border-[#4da3ff] flex items-center justify-between"
      >
        <span className="text-gray-400">{selectedOption || "option"}</span>
        <div className="absolute inset-y-0 right-3 text-gray-400 text-lg flex items-center">
          <IoMdArrowDropdown />
        </div>
      </button>
      {isOpen && (
        <div className="absolute p-5 w-full mt-1 bg-white border border-[#edf1f2] rounded shadow-lg z-50">
          <div
            className={`${
              selectedOption === "Update at" ? "bg-blue-100" : ""
            } py-2 px-4 rounded cursor-pointer hover:bg-blue-100`}
            onClick={() => selectOption("Update at")}
          >
            Update at
          </div>
          <div
            className={`${
              selectedOption === "Created at" ? "bg-blue-100" : ""
            } py-2 px-4 rounded mt-0.5 cursor-pointer hover:bg-blue-100`}
            onClick={() => selectOption("Created at")}
          >
            Created at
          </div>
          <div
            className={`${
              selectedOption === "Find at" ? "bg-blue-100" : ""
            } py-2 px-4  rounded mt-0.5 cursor-pointer hover:bg-blue-100`}
            onClick={() => selectOption("Find at")}
          >
            Ends at
          </div>
        </div>
      )}
    </div>
  );
}
