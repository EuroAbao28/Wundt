import { useRef } from "react";
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
  // Create refs for each section
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const newsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <div className="font-poppins text-slate-800">
      <NavigationBar
        homeSectionRef={homeRef}
        servicesSectionRef={servicesRef}
        aboutSectionRef={aboutRef}
        gallerySectionRef={galleryRef}
        newsSectionRef={newsRef}
        contactSectionRef={contactsRef}
      />

      <HomeSection ref={homeRef} />
      <WhyUsSection />
      <ServicesSection ref={servicesRef} />
      <AboutSection ref={aboutRef} />
      <GallerySection ref={galleryRef} />
      <NewsSection ref={newsRef} />
      <ContactsSection ref={contactsRef} />

      <Footer />
    </div>
  );
}

export default MainPage;
