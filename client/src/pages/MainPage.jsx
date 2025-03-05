import Footer from "../components/Footer";
import AboutSection from "../components/main_page/AboutSection";
import ContactsSection from "../components/main_page/ContactsSection";
import GallerySection from "../components/main_page/GallerySection";
import HomeSection from "../components/main_page/HomeSection";
import NewsSection from "../components/main_page/NewsSection";
import ServicesSection from "../components/main_page/ServicesSection";
import WhyUsSection from "../components/main_page/WhyUsSection";
import NavigationBar from "../components/NavigationBar";

function MainPage() {
  return (
    <div className="font-poppins text-slate-800">
      <NavigationBar />

      <HomeSection />

      <WhyUsSection />

      <ServicesSection />

      <AboutSection />

      <GallerySection />

      <NewsSection />

      <ContactsSection />

      <Footer />
    </div>
  );
}

export default MainPage;
