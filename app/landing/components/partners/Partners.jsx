import "./partners.pcss";
import twitterLogo from "../../img/twitter-logo.svg";
import googleLogo from "../../img/google-logo.svg";
import hpLogo from "../../img/hp-logo.svg";
import salesforceLogo from "../../img/salesforce-logo.svg";
import expediaLogo from "../../img/expedia-logo.svg";
import samsungLogo from "../../img/samsung-logo.svg";

export default function Partners() {
  return (
    <section className="partners">
      <div className="wt-container">
        <div className="wt-row wt-row_size_0 wt-row-lg_size_l">
          <div className="wt-col-3 wt-col-lg-4 wt-col-sm-12">
            <h4 className="partners__header-4">
              Trusted by 320,083 businesses worldwide
            </h4>
          </div>
          <div className="wt-col-8 wt-offset-left-1 wt-offset-left-lg-0 wt-col-sm-12">
            <div className="wt-row wt-row_size_0">
              <div className="wt-col-4 wt-col-sm-6 partners__logo">
                <img src={googleLogo} />
              </div>
              <div className="wt-col-4 wt-col-sm-6 partners__logo">
                <img src={hpLogo} />
              </div>
              <div className="wt-col-4 wt-col-sm-6 partners__logo">
                <img src={samsungLogo} />
              </div>
              <div className="wt-col-4 wt-col-sm-6 partners__logo">
                <img src={salesforceLogo} />
              </div>
              <div className="wt-col-4 wt-col-sm-6 partners__logo">
                <img src={expediaLogo} />
              </div>
              <div className="wt-col-4 wt-col-sm-6 partners__logo">
                <img src={twitterLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
