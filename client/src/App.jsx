import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import ServicesPage from "./pages/ServicesPage";
import NavigationBar from "./components/NavigationBar";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import NewsPage from "./pages/NewsPage";
import AppointmentPage from "./pages/AppointmentPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins text-slate-800">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
