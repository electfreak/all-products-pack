import "./faq.pcss";

export default function Faq() {
  return (
    <div className="faq">
      <div className="wt-container">
        <h2 className="faq__header-2">FAQ</h2>
        <div className="wt-row wt-row_size_0 wt-row-lg_size_l">
          <div className="wt-col-5 wt-col-lg-6 wt-col-sm-12">
            <h3 className="faq__header-3">
              Can I upgrade my existing IntelliJ IDEA, PyCharm, WebStorm or
              ReSharper Ultimate or any other JetBrains IDE license to the All
              Products Pack?
            </h3>
            <div className="faq__text">
              Yes, your existing licenses to any JetBrains desktop product make
              you eligible to purchase new All Products Pack subscriptions with
              an additional discount.
            </div>
          </div>
          <div className="wt-col-5 wt-col-lg-6 wt-offset-left-1 wt-offset-left-lg-0 wt-col-sm-12">
            <div className="faq__header-3">
              How to upgrade to the All Products Pack?
            </div>
            <div className="faq__text">
              You can upgrade your current subscription to All Products Pack
              license from your JetBrains account using the “Upgrade” link,
              which is displayed next to all the licenses that can be upgraded.
              You can click this link to go to JetBrains eStore and complete the
              order. If you have any questions, please contact Sales.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
