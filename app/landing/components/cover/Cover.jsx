import "./cover.pcss";
import img from "../../img/img-1@2x.jpg";
import {
  IntellijIdeaLogo,
  WebstormLogo,
  RiderLogo,
  RubymineLogo,
  ResharperLogo,
  AppcodeLogo,
  DatagripLogo,
  PhpstormLogo,
} from "@jetbrains/logos/react";

const ides = [
  {
    name: "IntelliJ IDEA Ultimate",
    stack: ["Kotlin", "Java"],
    icon: IntellijIdeaLogo,
  },
  {
    name: "WebStorm",
    stack: ["mysql"],
    icon: WebstormLogo,
  },
  {
    name: "Rider",
    stack: ["C#", ".NET"],
    icon: RiderLogo,
  },
  {
    name: "RubyMine",
    stack: ["Ruby"],
    icon: RubymineLogo,
  },
  {
    name: "ReSharper Ultimate",
    stack: ["C++"],
    icon: ResharperLogo,
  },
  {
    name: "AppCode",
    stack: ["mysql", "database"],
    icon: AppcodeLogo,
  },
  {
    name: "DataGrip",
    stack: ["C"],
    icon: DatagripLogo,
  },
  {
    name: "CLion",
    stack: ["Ruby"],
    icon: AppcodeLogo,
  },
  {
    name: "PhpStorm",
    stack: ["mysql", "database"],
    icon: PhpstormLogo,
  },
  {
    name: "PyCharm",
    stack: ["mysql", "database"],
    icon: PhpstormLogo,
  },
];

function DesktopIdes() {
  return (
    <div className="products desktop-products">
      <div className="wt-container">
        <div className="wt-row wt-row_size_0 wt-row-lg_size_l">
          <div className="wt-col-5 wt-col-sm-12">
            <div className="wt-row wt-row_size_m">
              {ides.map((ide) => {
                const Icon = ide.icon;
                return (
                  <div
                    key={ide.name}
                    className="wt-col-3 wt-col-lg-4 wt-col-sm-6 desktop-products__logo-item"
                  >
                    <Icon width="65" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="wt-col-6 wt-offset-left-1">
            <div className="wt-row">
              {ides.map((ide) => {
                return (
                  <div
                    className="wt-col-6 desktop-products__product-item"
                    key={ide.name}
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileIdes() {
  return (
    <div className="products mobile-products">
      <div className="wt-container">
        <div className="wt-row wt-row_size_m">
          {ides.map((ide) => {
            const Icon = ide.icon;

            return (
              <div className="wt-col-6 mobile-products__product-item" key={ide.name}>
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

function Ides() {
  return (
    <>
      <DesktopIdes />
      <MobileIdes />
    </>
  );
}

export default function Cover() {
  return (
    <section className="cover">
      <div className="wt-container">
        <div className="cover__banner wt-row wt-row-sm_direction_column-reverse wt-row_size_0 wt-row-lg_size_l">
          <div className="wt-col-6 wt-col-sm-auto-fill">
            <img width="480" src={img} alt="" />
          </div>
          <div className="wt-col-6 wt-col-sm-auto-fill">
            <h1 className="cover__header-1">All Products Pack</h1>
            <h2 className="cover__header-2">
              The complete full-stack <br /> developer toolkit
            </h2>
            <a href="/" className="cover__btn">
              I Want it All
            </a>
            <span className="light-grey-text cover__text-1">
              An upgrade and switch option available
            </span>
          </div>
        </div>
      </div>
      <div className="wt-container">
        <div className="wt-row wt-row_size_0 wt-row-lg_size_l wt-row-sm_size_0">
          <div className="wt-col-5 wt-offset-left-6 wt-col-lg-6 wt-col-sm-12 wt-offset-left-sm-0">
            <span className="light-grey-text cover__text-2">
              Get access to all JetBrains desktop tools including 10 IDEs, 2
              extensions and 3 profilers
            </span>
          </div>
        </div>
        <div className="wt-row">
          <h3 className="cover__header-3">10 IDEs</h3>
        </div>
      </div>

      <Ides />
    </section>
  );
}
