import { useState } from "react";
import "./products.pcss"

function DesktopProducts({ prods }) {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="products desktop-products">
      <div className="wt-container">
        <div className="wt-row wt-row_size_0 wt-row-lg_size_l">
          <div className="wt-col-5 wt-col-sm-12">
            <div className="wt-row wt-row_size_m">
              {prods.map((ide) => {
                const Icon = ide.icon;
                return (
                  <div
                    key={ide.name}
                    className={`wt-col-3 wt-col-lg-4 wt-col-sm-6 desktop-products__logo-item ${
                      hoveredProduct && hoveredProduct != ide.name
                        ? "desktop-products__logo-item_lighted"
                        : ""
                    }`}
                  >
                    <Icon width="65" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="wt-col-6 wt-offset-left-1">
            <div className="wt-row">
              {prods.map((ide) => {
                return (
                  <a
                    className="wt-col-6 desktop-products__product-item"
                    key={ide.name}
                    onMouseEnter={() => setHoveredProduct(ide.name)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    href="/"
                  >
                    <div className="desktop-products__product-name">
                      {ide.name}
                    </div>
                    <div className="wt-row">
                      {ide.stack.map((tech) => {
                        return (
                          <div
                            key={tech}
                            className="wt-col-inline cover__product-tech"
                          >
                            {tech}
                          </div>
                        );
                      })}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileProducts({ prods }) {
  return (
    <div className="products mobile-products">
      <div className="wt-container">
        <div className="wt-row wt-row_size_m">
          {prods.map((ide) => {
            const Icon = ide.icon;

            return (
              <div
                className="wt-col-6 mobile-products__product-item"
                key={ide.name}
              >
                <div className="mobile-products__logo-item">
                  <Icon width="65" />
                </div>
                <div className="mobile-products__product-name">{ide.name}</div>
                <div className="wt-row">
                  {ide.stack.map((tech) => {
                    return (
                      <div
                        key={tech}
                        className="wt-col-inline cover__product-tech"
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Products({ products }) {
  return (
    <>
      <DesktopProducts prods={products} />
      <MobileProducts prods={products} />
    </>
  );
}
