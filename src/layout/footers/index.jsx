import Link from "next/link";
import Image from "next/image";
import React from "react";
import footer_strom from "../../../public/assets/img/logo/strom-01-3.svg";
import footer_dron from "../../../public/assets/img/other/drone-mail-300x268.png";
import footer_logo from "../../../public/assets/img/logo/logo-black.svg";
import { Button } from "react-bootstrap";

const footer_content = {
  info: "tubenbastei 12, 1010 Vienna, Austria Elisabethstraße 2, 80796 Munich, Germany",
  phone: "+49 89 6282 5737",
  tel: "+49 89 6282 5737",
  email: "info@future-doctor.de"
};
const { info, phone, email, tel } = footer_content;

const Footer = ({ style_contact, bg_style = true, style_team }) => {
  return (
    <>
      <div
        className={`tp-footer__pl-pr footer-bg pt-50 ${
          style_contact && "pt-105"
        } ${bg_style ? "grey-bg-2" : ""}`}
      >
        <div
          className={`tp-footer__area ${
            style_contact && "p-relative"
          } tp-footer__tp-border-bottom`}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-md-6 pb-30  wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div
                  className={`tp-footer__widget ${
                    style_team && "tp-footer__input-inner"
                  } footer-widget-3 footer-col-3-1`}
                >
                  <h4 className="tp-footer__widget-title">Kontakt</h4>
                  <div className="tp-footer__logo mb-25">
                    <Link href="/">
                      <Image src={footer_logo} alt="" />
                    </Link>
                  </div>
                  <div className="tp-footer__contact-info">
                    <p>{info}</p>
                    <ul>
                      <li>
                        <Link className="first-child" href={`tel:${phone}`}>
                          {phone}
                        </Link>
                      </li>
                      <li>
                        <Link className="first-child" href={`tel:${tel}`}>
                          {tel}
                        </Link>
                      </li>
                      <li>
                        <Link href={`mailto:${email}`}>{email}</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="tp-footer__social-3">
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                  <Image src={footer_strom} alt="" style={{ width: "50%" }} />
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 pb-30  wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="tp-footer__widget footer-widget-3 footer-widget-5 footer-col-3-4">
                  <h4 className="tp-footer__widget-title">
                    Interessante Links
                  </h4>
                  <div className="tp-footer__contact-info">
                    {" "}
                    <Image src={footer_dron} alt="" />
                    <p>
                      Take the first step and order your free information
                      package about studying medicine abroad today.
                    </p>
                    <Button>Request information material</Button>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 pb-30  wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="tp-footer__widget footer-widget-3 footer-widget-5 footer-col-3-4">
                  <h4 className="tp-footer__widget-title">
                    Infopaket bestellen
                  </h4>
                  <div className="tp-footer__link">
                    <ul>
                      <li>
                        <Link className="first-child" href="">
                          <i className="fal fa-arrow-right"></i> Contact
                        </Link>
                      </li>
                      <li>
                        <Link className="first-child" href="">
                          <i className="fal fa-arrow-right"></i> About us
                        </Link>
                      </li>
                      <li>
                        <Link className="first-child" href="">
                          <i className="fal fa-arrow-right"></i> Offer
                        </Link>
                      </li>
                      <li>
                        <Link className="first-child" href="">
                          <i className="fal fa-arrow-right"></i> Universities
                        </Link>
                      </li>
                      <li>
                        <Link className="first-child" href="">
                          <i className="fal fa-arrow-right"></i> Cost overview
                        </Link>
                      </li>
                      <li>
                        <Link className="first-child" href="">
                          <i className="fal fa-arrow-right"></i> Student
                          advisory service
                        </Link>
                      </li>
                      <li>
                        <Link className="first-child" href="">
                          <i className="fal fa-arrow-right"></i> Blog
                        </Link>
                      </li>
                      <li>
                        <Link className="first-child" href="">
                          <i className="fal fa-arrow-right"></i> Video library
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-bottom">
                <div className="container">
                  <div className="text-center">
                    <p className="copyright">
                      <span>Copyright © 2024 futuredoctor GmbH. </span>
                    </p>
                    <p id="block-18" className="widget widget_block copyright">
                      <span>
                        futuredoctor - Simply study medicine. All rights
                        reserved.
                        <Link href="">Imprint</Link> and
                        <Link href="">Data protectionLink</Link>
                        <br />
                        <Link href="#" className="borlabs-cookie-preference">
                          Change privacy settings
                        </Link>
                        <Link href="" target="_blank" rel="nofollow">
                          AGB
                        </Link>
                        <span></span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
