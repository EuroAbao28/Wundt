import BannerSection from "../../components/main_page/BannerSection";
import ContactsSection from "../../components/main_page/ContactsSection";
import HomeSection from "../../components/main_page/HomeSection";
import HomeSectionV2 from "../../components/main_page/HomeSectionV2";
import ServicesSection from "../../components/main_page/ServicesSection";
import WhyUsSection from "../../components/main_page/WhyUsSection";

function MainPage() {
  return (
    <div className="flex-1 overflow-hidden pb-12">
      {/* <HomeSection /> */}
      <HomeSectionV2 />
      <WhyUsSection />
      <ServicesSection />
      <BannerSection />
      <ContactsSection />
    </div>
  );
}

export default MainPage;
