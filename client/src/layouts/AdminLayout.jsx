import { Outlet } from "react-router";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

function AdminLayout() {
  return (
    <div className="h-screen flex bg-gray-50 font-poppins text-gray-600">
      <AdminSidebar />

      <div className="flex-1 flex flex-col ">
        <AdminTopbar />

        <div className="bg-white flex-1 m-8 shadow-card3 rounded p-6 flex flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
