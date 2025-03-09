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
import b1 from "../assets/b1.jpg";

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
      {/* <AboutSection ref={aboutRef} />
      <GallerySection ref={galleryRef} />
      <NewsSection ref={newsRef} /> */}

      <div style={{ backgroundImage: `url(${b1})` }} className="mt-40">
        <div className="px-6 py-12 lg:p-20 bg-radial-[at_-35%_15%] from-green-500/80 to-emerald-600/80 to-75% flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-xl md:text-2xl font-semibold ">
            Your Path to Growth and Well-Being Starts Here
          </h1>
          <p className="text-white text-xs md:text-sm italic mt-2 w-[80%]">
            Psychological, Counseling, and Educational Services Tailored for You
          </p>
          <button className="bg-white text-emerald-600 text-sm md:text-base font-semibold  px-8 py-4 rounded mt-12">
            Book an Appointment
          </button>
        </div>
      </div>

      <ContactsSection ref={contactsRef} />

      <Footer />
    </div>
  );
}

export default MainPage;
