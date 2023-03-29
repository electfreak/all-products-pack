import img from "../../img/tb-screenshot@2x.jpg";
import "./toolboxApp.pcss";

export default function ToolboxApp() {
  return (
    <div className="toolbox-app">
      <div className="wt-container">
        <div className="wt-row wt-row_size_0 wt-row-lg_size_l">
          <div className="toolbox-app__img wt-col-4 wt-offset-left-2 wt-col-lg-6 wt-offset-left-lg-0">
            <div className="wt-row wt-row_size_0 wt-row-lg_justify_center">
              <img src={img} width="234"></img>
            </div>
          </div>
          <div className="wt-col-6 wt-col-sm-12 toolbox-app__text-section">
            <h2 className="toolbox-app__header-2">
              Maintain your tools with the Toolbox App
            </h2>
            <h3 className="toolbox-app__header-3">
              Simple installations, updates, and more
            </h3>
            <a href="/" className="toolbox-app__link">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
