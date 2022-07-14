import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  
} from "@fortawesome/free-brands-svg-icons";


import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import ContactDetailsCard from "../ContactDetailsCard/ContactDetailsCard";

const Footer = () => {
  const aboutUs = [];
  const newsLetter = [];
  const contactDetails = [];
  const contactCard = [
    {
      icon: faMapMarkerAlt,
      title: "Adamjee Tower (2nd Floor)",
      describe: "Siddhirganj, Narayanganj",
    },
    {
      icon: faMobileAlt,
      title: "+88 019 880 004 44",
      describe: "Sat till Thu: 8:00 till 5:00",
    },
    {
      icon: faEnvelope,
      title: "nytti.bd@gmail.com",
      describe: "We reply within 1 work day",
    },
  ];
  const quickNavigation = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "courses", link: "/courses" },
    { name: "Contact Us", link: "/contact-us" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-3 pb-3">
        <div className="row py-5">
          <FooterCol key={1} menuTitle={"About Us"} menuItems={aboutUs}>
            <p>
              সরকার স্বীকৃত কারিগরি ও টেকনোলজি ভিত্তিক সংস্থা Gov. Reg. No-
              S-176/06 রেজিষ্টার্ড অফিস: কলেজপাড়া (ডায়াবেটিক হাসপাতালের পেছনে)
              গোবিন্দনগর, ঠাকুরগাঁও গাজীপুর অফিস: ব্যাপারী রোড, আউসপাড়া, টঙ্গী,
              গাজীপুর-1711, বাংলাদেশ
            </p>
            <div className="h6 mb-3">Follow Us on social</div>
            <div className="d-flex justify-content-between">
              <div>
                <a href="www.facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x" color="#4267B2s" className=""/></a>
              </div>
              <div>
                <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  color="#833AB4
"
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faYoutube} size="2x" color="red" />
              </div>
            </div>
          </FooterCol>
          <FooterCol
            key={2}
            menuTitle="Quick Navigation"
            menuItems={quickNavigation}
          />
          <FooterCol
            key={3}
            menuTitle="Contact Details"
            menuItems={contactDetails}
          >
            <div className="row custom-contact">
              {contactCard.map((contact) => (
                <ContactDetailsCard contact={contact}></ContactDetailsCard>
              ))}
            </div>
          </FooterCol>
          <FooterCol key={4} menuTitle="Newsletter" menuItems={newsLetter}>
            {/* <div class="input-group mb-3 ">
              <input
                type="text"
                class="form-control p-4 "
                placeholder="Your email..."
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  Send
                </button>
              </div>
            </div> */}

            <h4 className="my-4 font-weight-bold">Working Hours</h4>
            <div className="row my-1">
              <div className="col-md-6 text-muted">Sat-Wed</div>
              <div className="col-md-6 font-weight-bold">08:00 - 17:00</div>
            </div>
            <div className="row my-1 ">
              <div className="col-md-6 text-muted">Thursday</div>
              <div className="col-md-6 font-weight-bold">09:00 - 12:00</div>
            </div>
            <div className="row my-1">
              <div className="col-md-6 text-muted">Friday</div>
              <div className="col-md-6 text-primary font-weight-bold">
                We're Closed
              </div>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center ">
          <p>Copyright <FontAwesomeIcon icon={faCopyright} size="1x" /> {new Date().getFullYear()}  All Rights Reserved By NYTTI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
