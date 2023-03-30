import "./infographics.pcss";
import img from "../../img/img-2@2x.jpg";

export default function Infographics() {
  return (
    <>
      <section className="infographics">
        <div className="wt-container">
          <div className="wt-row wt-row_size_0 wt-row-lg_size_l">
            <div className="wt-col-6 infographics__img">
              <img src={img} width="459" alt="" />
            </div>
            <div className="wt-col-6 wt-col-sm-12">
              <h2 className="infographics__header-2">
                Enhance your productivity and speed up coding with JetBrains
                tools!
              </h2>
              <a href="/" className="infographics__link">
                Download the All Products Pack infographics
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
