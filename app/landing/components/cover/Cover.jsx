import "./cover.pcss";
import img from "../../img/img-1@2x.jpg";
import Products from "../products/Products";
import {
  IntellijIdeaLogo,
  WebstormLogo,
  RiderLogo,
  RubymineLogo,
  ResharperLogo,
  AppcodeLogo,
  DatagripLogo,
  PhpstormLogo,
  ClionLogo,
  PycharmLogo,
  ResharperCppLogo,
  DottraceLogo,
  DotcoverLogo,
  DotmemoryLogo
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
    icon: ClionLogo,
  },
  {
    name: "PhpStorm",
    stack: ["mysql", "database"],
    icon: PhpstormLogo,
  },
  {
    name: "PyCharm",
    stack: ["mysql", "database"],
    icon: PycharmLogo,
  },
];

const exts = [
  {
    name: "ReSharper",
    stack: ["mysql", "database"],
    icon: ResharperLogo
  },
  {
    name: "ReSharper C++",
    stack: ["C++"],
    icon: ResharperCppLogo
  },
  {
    name: "dotTrace",
    stack: ["Ruby"],
    icon: DottraceLogo
  },
  {
    name: "dotCover",
    stack: ["mysql"],
    icon: DotcoverLogo
  },
  {
    name: "dotMemory",
    stack: ["C"],
    icon: DotmemoryLogo
  }
];

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
            <a href="/" className="cover__btn primary-button">
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
      </div>
      
      <div className="wt-container">
        <div className="wt-row">
          <h3 className="cover__header-3">10 IDEs</h3>
        </div>
      </div>

      <Products products={ides} />

      <div className="wt-container">
        <div className="wt-row">
          <h3 className="cover__header-3">2 Extentions & 3 Profilers</h3>
        </div>
      </div>

      <Products products={exts} />
    </section>
  );
}
