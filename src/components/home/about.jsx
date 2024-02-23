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
            <Col md={3}>
              <Image src="./assets/img/brands/logo-1.png" />
            </Col>
            <Col md={3}>
              <Image src="./assets/img/brands/logo-2.png" />
            </Col>
            <Col md={3}>
              <Image src="./assets/img/brands/logo-3.png" />
            </Col>
            <Col md={3}>
              <Image src="./assets/img/brands/logo-4.png" />
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
                      lacus eleifend quis mi facilisis. Id proin a sed duis vel.
                      Nibh
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="aboutItems">
                <div className="d-flex align-items-top">
                  <div className="me-2">
                    <Image src="./assets/img/icons/icon-2.png" alt="icon" />
                  </div>
                  <div className="aboutItems-content">
                    <strong>Wir bereiten dich vor</strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Id ipsum mauris
                      lacus eleifend quis mi facilisis. Id proin a sed duis vel.
                      Nibh
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="aboutItems">
                <div className="d-flex align-items-top">
                  <div className="me-2">
                    <Image src="./assets/img/icons/icon-3.png" alt="icon" />
                  </div>
                  <div className="aboutItems-content">
                    <strong>Wir unterstützen dich auf deinem Weg</strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Id ipsum mauris
                      lacus eleifend quis mi facilisis. Id proin a sed duis vel.
                      Nibh
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="outline-secondary mt-30">
                Warum futuredoctor?
                <Image src="./assets/img/icons/arrow.svg" alt="icon" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;