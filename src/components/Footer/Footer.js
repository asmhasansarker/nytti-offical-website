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
    { id:1,
      icon: faMapMarkerAlt,
      title: "Adamjee Tower (2nd Floor)",
      describe: "Siddhirganj, Narayanganj",
    },
    { id:2,
      icon: faMobileAlt,
      title: "+88 019 387 133 58",
      describe: "Sat till Thu: 8:00 till 5:00",
    },
    { id:3,
      icon: faEnvelope,
      title: "nytti.bd@gmail.com",
      describe: "We reply within 1 work day",
    },
  ];
  const quickNavigation = [
    { id:1, name: "Home", link: "/" },
    { id:2, name: "About Us", link: "/about-us" },
    { id:3, name: "courses", link: "/courses" },
    { id:4, name: "Contact Us", link: "/contact-us" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-3 pb-3">
        <div className="row py-5">
          <FooterCol key={1} menuTitle={"About Us"} menuItems={aboutUs}>
            <p>
              সিদ্ধিরগঞ্জ থানাধীন সর্বোচ্চমানের ও সর্ববৃহত একমাত্র প্রতিষ্ঠান
            </p>
            <p>
              কদমতলী, এম ডব্লিউ উচ্চ বিদ্যালয়ের ১৫০ গজ উত্তরে জিনিয়াস স্কুল এন্ড কলেজ সংলগ্ন ( ১০ তলা ভবন) আদমজী নগর, সিদ্ধিরগঞ্জ, নারায়নগঞ্জ
            </p>
            <div className="h6 mb-3">Follow Us on social</div>
            <div className="d-flex justify-content-between">
              <div>
                <a
                  href="https://www.facebook.com/geniusgroupnyttibd"
                  target="_black"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    color="#4267B2s"
                    className=""
                  />
                </a>
              </div>
              <div>
                {" "}
                <a href="https://www.twitter.com" target="_black">
                  <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" />
                </a>
              </div>
              <div>
                {" "}
                <a href="https://www.instagram.com" target="_black">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    color="#833AB4"
                  />
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com" target="_black">
                  <FontAwesomeIcon icon={faYoutube} size="2x" color="red" />{" "}
                </a>
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
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="form-control "
                placeholder="Your email..."
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  Send
                </button>
              </div>
            </div>

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
          <p>
            Copyright <FontAwesomeIcon icon={faCopyright} size="1x" />{" "}
            {new Date().getFullYear()} All Rights Reserved By NYTTI
            
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
