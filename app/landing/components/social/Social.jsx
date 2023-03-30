import "./social.pcss";
import twitterLogo from "../../img/twitter-logo-orange.svg";
import blogLogo from "../../img/blog-logo-orange.svg";
import bugLogo from "../../img/bug-logo-orange.svg";

export default function Social() {
  return (
    <div className="social">
      <div className="wt-container">
        <div className="wt-row wt-row_size_0 wt-row-lg_size_l">
          <div className="wt-col-4 wt-col-lg-5 wt-col-sm-12 social__email-section">
            <h2 className="social__header-2">Stay updated</h2>
            <input
              type="text"
              placeholder="Your Email"
              className="social__mail-list-input"
            />
            <input
              type="checkbox"
              className="social__privacy-check"
              id="privacy-policy"
            />
            <label htmlFor="privacy-policy" className="social__input-label">
              By submitting this form I agree to the{" "}
              <a style={{ color: "var(--orange)" }} href="/">
                JetBrains Privacy Policy
              </a>
            </label>
            <button className="social__btn primary-button">Subscribe</button>
          </div>

          <div className="wt-col-6 wt-offset-left-2 wt-col-lg-6 wt-offset-left-lg-1 wt-col-sm-12 wt-offset-left-sm-0">
            <h3 className="social__header-3">Follow us</h3>
            <a href="/" className="social__media-link">
              <img className="social__media-icon" src={twitterLogo} alt="" /> @AllProductsPack on Twitter
            </a>
            <a href="/" className="social__media-link">
              <img className="social__media-icon" src={blogLogo} alt="" /> JetBrains Blog
            </a>
            <a href="/" className="social__media-link">
              <img className="social__media-icon" src={bugLogo} alt="" /> Bug and Issue Tracker
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
