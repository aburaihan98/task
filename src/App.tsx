import { useState } from "react";
import { data as initialData } from "./api/data";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState(initialData);

  const toggleRole = (index: number) => {
    const updatedUsers = [...users];
    updatedUsers[index].role =
      updatedUsers[index].role === "Action" ? "Disable" : "Action";
    setUsers(updatedUsers);
  };

  return (
    <>
      <div className="bg-[#fafafa] py-10 ">
        <div className="lg:pl-10 mx-auto lg:grid grid-cols-12">
          <div className="col-span-2 border-r-1 border-[#dfe4e8] hidden lg:block">
            <SideBar />
          </div>
          <div className="col-span-10 p-4 w-11/12 lg:w-10/12 mx-auto">
            <Header />
            <div className="mt-6">
              {users?.map((user, index) => (
                <User
                  key={index}
                  user={user}
                  index={index}
                  toggleRole={toggleRole}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
