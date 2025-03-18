import pfp from "../../assets/pfp.png";
import logo from "../../assets/wundt_logo.jpg";
import LiveClock from "../LiveClock";
import Sidebar from "../Sidebar";
import { Link, Outlet } from "react-router";
import { TbLogout, TbUserSquareRounded } from "react-icons/tb";

function AdminLayout() {
  return (
    <div className="h-screen flex bg-gray-50 font-poppins text-gray-600">
      <div className="min-w-64 bg-white shadow-card3">
        <div className="flex items-center gap-2 py-4 px-6">
          <img src={logo} alt="" className="w-12 rounded-full" />
          <h1 className="font-semibold text-sm text-emerald-600">
            Wundt Psychological <br></br> Institute
          </h1>
        </div>

        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col ">
        <header className="bg-white py-2 px-8 shadow-card3 flex items-center">
          <LiveClock />

          <div className="ml-auto dropdown">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-4 cursor-pointer"
            >
              <div className="  flex flex-col items-end">
                <p className="text-xs font-semibold">Juan Dela Cruz</p>
                <span className="text-xxs">Admin</span>
              </div>
              <img
                src={pfp}
                alt=""
                className="w-10 aspect-square rounded-full object-cover object-center"
              />
            </div>

            <div
              tabIndex={0}
              className="dropdown-content right-0 mt-2 bg-white shadow-sm rounded flex flex-col w-60 outline outline-gray-300"
            >
              <Link className="flex gap-3 items-center px-6 py-3 hover:bg-gray-50">
                <TbUserSquareRounded className="text-xl" />
                <p className="text-sm">My Profile</p>
              </Link>

              <Link className="flex gap-3 items-center px-6 py-3 hover:bg-gray-50">
                <TbLogout className="text-xl" />
                <p className="text-sm">Logout</p>
              </Link>
            </div>
          </div>
        </header>

        <div className="bg-white flex-1 m-8 shadow-card3 rounded p-6 flex flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
