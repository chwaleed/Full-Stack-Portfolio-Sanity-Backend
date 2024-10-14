import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://x.com/M_Waleed_Dev?t=ICTdOzL8IWtpTgDrYqE2_w&s=09"
          target="_blank"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/share/QMfweAQWXkZaD37o/?mibextid=qi2Omg"
          target="_blank"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/_choudhary_waleed?utm_source=qr&igsh=MWd6djg3a3BlbDZjeg=="
          target="_blank"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
