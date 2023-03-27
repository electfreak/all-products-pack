import "./header.pcss";

import { useState } from "react";

const desktopHeader = (
  <header className="header-desktop">
    <div className="wt-container">
      <div className="wt-row wt-row_justify_between wt-row_align-items_center">
        <span className="header-desktop__logo">Toolbox</span>

        <div className="header-desktop__menu wt-row wt-row_size_m wt-row_align-items_center">
          <a
            className="header-desktop__btn header-desktop__btn_primary wt-col"
            href="/"
          >
            Overview
          </a>
          <a className="header-desktop__btn wt-col" href="/">
            Toobox App
          </a>
          <a
            className="header-desktop__btn header-desktop__btn_bordered wt-col"
            href="/"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  </header>
);

const mobileMenu = (
  <div className="wt-container header-mobile__menu-list">
    <a className="header-mobile__menu-list-item wt-row" href="/">
      Overview
    </a>
    <a className="header-mobile__menu-list-item wt-row" href="/">
      Toobox App
    </a>
    <a className="header-mobile__menu-list-item wt-row" href="/">
      Buy Now
    </a>
  </div>
);

const overlay = <div className="overlay"></div>;

function MobileMenu() {
  let [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const toggleMenu = () => setMobileMenuOpened(!mobileMenuOpened);

  return (
    <>
      <header className="header-mobile">
        <div className="wt-container">
          <div className="wr-row">
            <div className="wt-col">
              <button
                className="header-mobile__menu-trigger wt-row wt-row_align-items_center"
                onClick={toggleMenu}
              >
                Overview
                <svg
                  viewBox="0 0 24 24"
                  className={`header-mobile__triangle ${
                    mobileMenuOpened ? "header-mobile__triangle_flipped" : ""
                  }`}
                >
                  <path d="M12 17L5 9h14l-7 8z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpened && mobileMenu}
      </header>
      {mobileMenuOpened && overlay}
    </>
  );
}

export default function Header() {
  return (
    <>
      {desktopHeader}
      <MobileMenu />
    </>
  );
}
