import React from "react";
import logo from "../../../images/logo.svg";
import facebook from "../../../images/facebook.png";
import twitter from "../../../images/twitter.png";
import instagram from "../../../images/instagram.png";
import "./footer.css";

export function FooterHome() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-9 section1">
          <img alt="logos" src={logo} className="logos" />
          <p>
            <br />
            Hak cipta C 2022 MediQ.com Seluruh Hak
            <br />
            cipta dilindungi Undang - Undang
          </p>
        </div>
        <div className="col-3 justify-content-center text-center section2 mt-5">
          <p>Get in touch:</p>
          <a href="/">
            <img alt="" src={facebook} />
          </a>
          <a href="/">
            <img href="/" alt="" src={twitter} className="ps-5" />
          </a>
          <a href="/">
            <img href="/" alt="" src={instagram} className="ps-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
