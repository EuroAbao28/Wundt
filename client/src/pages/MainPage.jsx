import Footer from "../components/Footer";
import BannerSection from "../components/main_page/BannerSection";
import ContactsSection from "../components/main_page/ContactsSection";
import HomeSection from "../components/main_page/HomeSection";
import ServicesSection from "../components/main_page/ServicesSection";
import WhyUsSection from "../components/main_page/WhyUsSection";

function MainPage() {
  return (
    <div>
      <HomeSection />
      <WhyUsSection />
      <ServicesSection />
      <BannerSection />
      <ContactsSection />
    </div>
  );
}

export default MainPage;
