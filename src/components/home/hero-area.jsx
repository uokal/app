import LineShapTwo from "@/src/svg/line-shap-2";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";

// import shape images\
import shape_4 from "../../../public/assets/img/hero/hero-shape-5-1-1.svg";
import { Col, Container, Row } from "react-bootstrap";
import tustpilot from "../../../public/assets/img/other/tustpilot.svg";
import Count from "./count";
import erfolgreiche from "../../../public/assets/img/icons/HeadsIcon.svg";
import headsIcon2 from "../../../public/assets/img/icons/HeadsIcon2.svg";
import headsIcon3 from "../../../public/assets/img/icons/HeadsIcon3.svg";

const fun_fact_data = [
  {
    id: 1,
    cls: "1",
    count: 700,
    simble: "+",
    img: erfolgreiche,
    description: (
      <>
        Erfolgreiche <br />
        Vermittlungen
      </>
    )
  },
  {
    id: 2,
    cls: "2",
    count: 8,
    simble: "",
    img: headsIcon2,

    description: (
      <>
        Verschiedene <br /> Länder
      </>
    )
  },
  {
    id: 3,
    cls: "3",
    count: 14,
    simble: "",
    img: headsIcon3,
    description: (
      <>
        Top-Universitäten <br /> zur Auswahl
      </>
    )
  }
];
const HeroArea = () => {
  useEffect(() => {
    let tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
    tl.to(".hero-text-anim-2 i.child-2", {
      y: "0px",
      duration: 0.9,
      opacity: 1,
      stagger: 0.3,
      delay: 0.3
    });
  });

  return (
    <>
      <div className="tp-hero-area tp-hero-five__ptb-5 p-relative fix">
        <Container>
          <Row className="align-items-center">
            <Col md={9}>
              {" "}
              <div className="tp-hero-five-section-wrap">
                <div className="tp-hero-five-section-box z-index">
                  <h1 className="tp-hero-title-5 hero-text-anim-2">
                    <i>
                      <i className="child-2">Dein Traum vom</i>
                    </i>{" "}
                    <br />
                    <i>
                      <i className="child-2">
                        <span className="child-1 p-relative chonky">
                          Medirinstudium
                        </span>{" "}
                        ist zum greifen nahe!
                        <br />
                      </i>
                    </i>
                  </h1>
                  <p
                    className="wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    Schon über 700 Studierende haben mit unserer Unterstützung
                    ihren Medizinstudienplatz
                    <br /> gesichert – ergreife jetzt die Chance, deinen Traum
                    Wirklichkeit werden zu lassen.
                  </p>
                </div>
                <Col md={8} className="d-flex count">
                  {fun_fact_data.map((item, i) => (
                    <div key={i} className="w-100">
                      <div className={` d-flex align-items-center flex-column`}>
                        <Image src={item.img} alt="theme-pure" />
                        <h4>
                          <span
                            data-purecounter-duration="1"
                            data-purecounter-end="300"
                            className="purecounter"
                          >
                            <Count number={item.count} text={item.simble} />
                          </span>
                        </h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </Col>
                <div
                  className="tp-hero-five-btn-box d-flex align-items-center wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  <Link className="btn btn-primary" href="/">
                    Infos dazu erhalten
                  </Link>
                  <Image src={tustpilot} alt="tustpilot" className="ms-3" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="tp-hero-five-2-thumb-main p-relative">
          <Image
            src={shape_4}
            className="tp-hero-five-2-thumb-inner"
            alt="theme-pure"
          />
        </div>
      </div>
    </>
  );
};

export default HeroArea;
