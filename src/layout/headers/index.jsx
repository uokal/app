import useSticky from "@/src/hooks/use-sticky";
import Offcanvus from "@/src/common/offcanvus";
import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./nav-menu";
import Image from "next/image";

import logo from "../../../public/assets/img/logo/logo-black.svg";

const Header = () => {
  const { sticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="tp-header-height">
        <div
          id="header-sticky"
          className={`header-bottom__area header-bottom__plr-5 header-bottom__transparent z-index-3 white-bg ${
            sticky && "header-sticky"
          }`}
        >
          <div className="container-fluid p-0">
            <div className="row g-0 align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="header-bottom__logo">
                  <Link href="/">
                    <Image src={logo} alt="theme-pure" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-10 col-xl-7 col-lg-8 d-none d-lg-block">
                <div className="header-bottom__main-menu header-bottom__main-menu-5 text-end d-flex justify-content-end align-items-center">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                  <Link
                    className="btn btn-primary d-none d-lg-block me-2 ms-4"
                    href="/"
                  >
                    <span className="white-text">Jetzt bewerben</span>
                    <b></b>
                  </Link>
                  <Link
                    className="btn btn-outline-primary d-none d-lg-block"
                    href="/"
                  >
                    <span className="white-text">Kontakt</span>
                    <b></b>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-lg-2 col-md-8 col-6">
                <div className="header-bottom__right header-five__btn d-flex align-items-center justify-content-end">
                  <div className="header-bottom__btn d-flex align-items-center">
                    <a
                      className="header-bottom__bar tp-menu-bar d-lg-none"
                      onClick={() => setSidebarOpen(true)}
                    >
                      <i className="fal fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default Header;
