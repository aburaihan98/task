import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Users from "./components/Users";

function App() {
  return (
    <>
      <div className="bg-[#fafafa] py-10 ">
        <div className="w-11/12 mx-auto grid grid-cols-12">
          <div className="col-span-2 border-r-1 border-[#dfe4e8]">
            <SideBar />
          </div>
          <div className="col-span-10 p-4">
            <Header />
            <div className="">
              <Users />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
