import { Button, Col, Container, Image, Row } from "react-bootstrap";

function About() {
  return (
    <>
      <section className="pt-20 blue-light about-content">
        <Container>
          <Row
            className="wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <Col md={12} className="text-center pb-20 wow tpfadeUp">
              <h6>Medien, die über uns berichtet haben:</h6>
            </Col>
            <Col lg={3} className="align-items-center d-flex col-6">
              <Image src="./assets/img/brands/brand-1.svg" />
            </Col>
            <Col lg={3} className="align-items-center d-flex col-6">
              <Image src="./assets/img/brands/brand-2.svg" />
            </Col>
            <Col lg={3} className="align-items-center d-flex col-6">
              <Image src="./assets/img/brands/brand-3.svg" />
            </Col>
            <Col lg={3} className="align-items-center d-flex col-6">
              <Image src="./assets/img/brands/brand-4.svg" />
            </Col>
          </Row>
          <Row
            className="space wow tpfadeUp justify-content-between"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <Col md={5}>
              <div className="about-img">
                <div className="about-content">
                  <h6>DURCHSTARTEN</h6>
                  <h1>95% unserer Bewerber:innen studieren heute Medizin.</h1>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className="about-features">
                <div className="aboutItems">
                  <div className="d-flex align-items-top">
                    <div className="me-2">
                      <Image src="./assets/img/icons/icon-1.png" alt="icon" />
                    </div>
                    <div className="aboutItems-content">
                      <strong>
                        Wir finden den perfekten Studienort für dich!
                      </strong>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Id ipsum mauris
                        lacus eleifend quis mi facilisis. Id proin a sed duis
                        vel. Nibh
                      </p>
                      <hr />
                    </div>
                  </div>
                </div>

                <div className="aboutItems">
                  <div className="d-flex align-items-top">
                    <div className="me-2">
                      <Image src="./assets/img/icons/icon-2.png" alt="icon" />
                    </div>
                    <div className="aboutItems-content">
                      <strong>Wir bereiten dich vor</strong>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Id ipsum mauris
                        lacus eleifend quis mi facilisis. Id proin a sed duis
                        vel. Nibh
                      </p>
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="aboutItems">
                  <div className="d-flex align-items-top">
                    <div className="me-2">
                      <Image src="./assets/img/icons/icon-3.png" alt="icon" />
                    </div>
                    <div className="aboutItems-content">
                      <strong>Wir unterstützen dich auf deinem Weg</strong>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Id ipsum mauris
                        lacus eleifend quis mi facilisis. Id proin a sed duis
                        vel. Nibh
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline-secondary">
                  Warum futuredoctor?
                  <Image src="./assets/img/icons/arrow.svg" alt="icon" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
