import img from "../../img/img-4@2x.jpg";
import "./advantages.pcss";
import discount from "../../img/discount.svg";
import flex from "../../img/flex.svg";
import learn from "../../img/learn.svg"
import useAcc from "../../img/use-account.svg"

export default function Advantages() {
  return (
    <div className="advantages">
      <div className="wt-container">
        <div className="wt-row wt-row_size_0 wt-row-lg_size_l">
          <div className="wt-col-6 advantages__img">
            <img width="430" src={img} />
          </div>
          <div className="wt-col-6 wt-col-sm-12">
            <div className="advantages__advantage-item">
              <img className="advantages__advantage-icon" src={discount}></img>
              <h4 className="advantages__head-4">Great value</h4>
              <div className="light-grey-text advantages__text">
                Get 10 IDEs for the price of 2.
              </div>
            </div>
            <div className="advantages__advantage-item">
              <img className="advantages__advantage-icon" src={flex}></img>
              <h4 className="advantages__head-4">Flexibility</h4>
              <div className="light-grey-text advantages__text">
                Use different tools for different projects on multiple machines
                as and when you need them. Easily switch between the tools under
                the All Products Pack license.
              </div>
            </div>
            <div className="advantages__advantage-item">
              <img className="advantages__advantage-icon" src={learn}></img>
              <h4 className="advantages__head-4">Simple license management</h4>
              <div className="light-grey-text advantages__text">
                One unique license includes all the JetBrains desktop tools. Get
                unlimited access to all of them.
              </div>
            </div>
            <div className="advantages__advantage-item">
              <img className="advantages__advantage-icon" src={useAcc}></img>
              <h4 className="advantages__head-4">Further your skills</h4>
              <div className="light-grey-text advantages__text">
                Advance your programming skills with the best professional
                tools.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
