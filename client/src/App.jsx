import { Route, Routes } from "react-router";
import MainPage from "./pages/user/MainPage";
import ServicesPage from "./pages/user/ServicesPage";
import AboutPage from "./pages/user/AboutPage";
import GalleryPage from "./pages/user/GalleryPage";
import NewsPage from "./pages/user/NewsPage";
import AppointmentPage from "./pages/user/AppointmentPage";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import AddAdmin from "./pages/admin/AddAdmin";
import AdminList from "./pages/admin/AdminList";
import DashboardDummy from "./pages/admin/DashboardDummy";
import { Toaster } from "react-hot-toast";
import { AdminProvider } from "./contexts/AdminContext";
import AllAppointments from "./pages/admin/AllAppointments";
import ActivityLogs from "./pages/admin/ActivityLogs";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "font-poppins text-gray-600 text-sm",
        }}
      />

      <Routes>
        {/* user route */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
        </Route>

        {/* admin login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* admin route */}
        <Route
          element={
            <AdminProvider>
              <AdminLayout />
            </AdminProvider>
          }>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/appointments" element={<AllAppointments />} />
          <Route path="/admin/admin_list" element={<AdminList />} />
          <Route path="/admin/add_admin" element={<AddAdmin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/activity_logs" element={<ActivityLogs />} />

          {/* <Route path="/admin/dashboard_dummy" element={<DashboardDummy />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
