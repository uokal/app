import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileMenus from "../layout/headers/mobile-menus";

// images import
import logo from "../../public/assets/img/logo/logo-black.svg";

const Offcanvus = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div className="tpoffcanvas-area">
        <div className={`tpoffcanvas ${sidebarOpen && "opened"}`}>
          <div className="tpoffcanvas__close-btn">
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="tpoffcanvas__logo text-center">
            <Link href="/" onClick={() => setSidebarOpen(false)}>
              <Image src={logo} alt="theme-pure" />
            </Link>
          </div>
          <div className="mobile-menu mean-container">
            <MobileMenus />
          </div>
          <div className="tpoffcanvas__instagram text-center"></div>
          <div className="tpoffcanvas__social">
            <Link className="btn btn-primary w-100 mb-15" href="/">
              <span className="white-text">Jetzt bewerben</span>
              <b></b>
            </Link>
            <Link className="btn btn-outline-primary  w-100" href="/">
              <span className="white-text">Kontakt</span>
              <b></b>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`body-overlay ${sidebarOpen && "apply"}`}
        onClick={() => setSidebarOpen(false)}
      ></div>
    </>
  );
};

export default Offcanvus;
