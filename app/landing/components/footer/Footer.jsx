import { JetbrainsLogo, JetbrainsSimpleLogo } from "@jetbrains/logos/react";
import twitterLogo from "../../img/twitter-logo-white.svg";
import inLogo from "../../img/in-logo-white.svg";
import ytLogo from "../../img/yt-logo-white.svg";
import fbLogo from "../../img/fb-logo-white.svg";
import blogLogo from "../../img/blog-logo-white.svg";
import "./footer.pcss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wt-container">
        <div className="wt-row wt-row_size_0 footer__main-section">
          <div className="wt-col-2 footer__logo-desktop">
            <JetbrainsLogo width="100" />
          </div>
          <div className="wt-col-12 footer__logo-mobile">
            <JetbrainsSimpleLogo width="45" />
          </div>
          <div className="wt-col-2 wt-col-lg-3 wt-col-sm-12">
            <h3 className="footer__header-3">About JetBrains</h3>
            <div className="footer__about-links">
              <a href="/" className="footer__about-link">
                Company
              </a>
              <a href="/" className="footer__about-link">
                Contacts
              </a>
              <a href="/" className="footer__about-link">
                Press & Logos
              </a>
              <a href="/" className="footer__about-link">
                Careers
              </a>
            </div>
          </div>
          <div className="wt-col-5 wt-col-sm-12">
            <div className="footer__header-3">Follow JetBrains</div>
            <div className="footer__media">
              <a className="footer__media-item" href="/">
                <img src={twitterLogo} alt="" />
              </a>
              <a className="footer__media-item" href="/">
                <img src={inLogo} alt="" />
              </a>
              <a className="footer__media-item" href="/">
                <img src={ytLogo} alt="" />
              </a>
              <a className="footer__media-item" href="/">
                <img src={fbLogo} alt="" />
              </a>
              <a className="footer__media-item" href="/">
                <img src={blogLogo} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom-section">
          <span className="footer__bottom-text">© 2000—2017 JetBrains s.r.o. All rights reserved.</span>
          <span className="footer__bottom-text">Developed with drive and IntelliJ IDEA</span>

          <div className="footer__bottom-links">
            <a className="footer__bottom-link" href="/">Privacy & Security</a>
            <a className="footer__bottom-link" href="/">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
