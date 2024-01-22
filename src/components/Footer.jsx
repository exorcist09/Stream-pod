import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";

import ContentWrapper from "./Contentwrapper";

import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">StreamPod, an avant-garde Over-the-Top (OTT) platform revolutionizing entertainment. Seamlessly delivering high-quality content to smartphones, tablets and computers,  Its sophisticated algorithms analyze user preferences, offering personalized recommendations. The platform boasts exclusive movies, series, and documentaries. With a subscription-based model, affordability meets value, complemented by optional offline viewing. Social integration fosters a connected community, while global reach and localization features ensure a diverse and inclusive entertainment experience. StreamPod stands as a beacon of innovation in the dynamic world of OTT streaming, where entertainment meets excellence.</div>
        <div className="socialIcons">
          <span className="icon">
            <FaGithub />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
          <span className="icon">
          <FaXTwitter />
          </span>
          <span className="icon">
          <IoPersonCircleOutline />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
