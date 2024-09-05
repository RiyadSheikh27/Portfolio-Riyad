import { BiPhoneCall, BiMap, BiMailSend } from "react-icons/bi";
import SectionHead from "../SectionHead";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <SectionHead parallaxValue="contact" value="Contact Me" />
      <div className="grid-cols-12 gap-10 lg:grid lg:mt-20">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="col-span-5 space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-bold lg:text-2xl">
              Contact Information
            </h3>
            <p className="text-desc-color">Let's talk...</p>
            <div className="h-2 rounded-lg w-36 bg-sec-color"></div>
          </div>
          <ContactInfo
            label="Contact on WhatsApp"
            value="+880 1612-168868"
            icon={BiPhoneCall}
          />
          <ContactInfo
            label="Contact on Email"
            value="riyad.cse27@gmail.com"
            icon={BiMailSend}
          />
          <ContactInfo
            label="Contact on Address"
            value="Dhaka, Bangladesh"
            icon={BiMap}
          />
        </div>
        <ContactForm />
      </div>
      <div className="w-full bg-transparent h-14"></div>
    </section>
  );
};

export default Contact;
