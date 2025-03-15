import { Route, Routes } from "react-router";
import MainPage from "./pages/user/MainPage";
import ServicesPage from "./pages/user/ServicesPage";
import AboutPage from "./pages/user/AboutPage";
import GalleryPage from "./pages/user/GalleryPage";
import NewsPage from "./pages/user/NewsPage";
import AppointmentPage from "./pages/user/AppointmentPage";
import Footer from "./components/Footer";
import UserLayout from "./components/layout/UserLayout";
import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import Appointments from "./pages/admin/Appointments";
import AddAdmin from "./pages/admin/AddAdmin";
import AdminList from "./pages/admin/AdminList";
import ActivityLog from "./pages/admin/ActivityLog";
import DashboardDummy from "./pages/admin/DashboardDummy";

function App() {
  return (
    <>
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
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/appointments" element={<Appointments />} />
          <Route path="/admin/add_admin" element={<AddAdmin />} />
          <Route path="/admin/admin_list" element={<AdminList />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/dashboard_dummy" element={<DashboardDummy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
