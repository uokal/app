import { Button, Col, Container, Image, Row } from "react-bootstrap";

function Promo() {
  return (
    <>
      <section className="space white-bg">
        <Container>
          <Row>
            <Col
              md={12}
              className="wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="head-title">
                <span>MEDIZINSTUDIUM IM AUSLAND</span>
                <h2>Starte jetzt mit deinem Medizinstudium!</h2>

                <Button variant="link">
                  So funktioniert’s
                  <i className="fal fa-arrow-right"></i>
                </Button>
              </div>
            </Col>
            <Col
              md={5}
              className="wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div
                className="promo-img first-child"
                style={{
                  backgroundImage: `url(./assets/img/other/promo-1.jpg)`
                }}
              >
                <div className="promo-content">
                  <h1>Sorgenlos im Ausland studieren.</h1>
                  <Button variant="link">
                    Dein Weg zum Studium
                    <i className="fal fa-arrow-right"></i>
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <Row>
                <Col
                  md={12}
                  className="mb-20 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div
                    className="promo-img"
                    style={{
                      backgroundImage: `url(./assets/img/other/promo-2.png)`
                    }}
                  >
                    <div className="promo-content">
                      <span>Neu</span>
                      <h1>
                        Mit dem Bewerbungsportal am <br /> schnellsten zum
                        Studienplatz
                      </h1>
                      <Button variant="link">
                        Dein Weg zum Studium
                        <i className="fal fa-arrow-right"></i>
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col
                  md={12}
                  className="wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div
                    className="promo-img"
                    style={{
                      backgroundImage: `url(./assets/img/other/promo-3.png)`
                    }}
                  >
                    <div className="promo-content">
                      <span>Background</span>
                      <h1>
                        Über 700 Personen konnten seit <br /> 2019 durch uns
                        Medizin studieren.
                      </h1>
                      <Button variant="link">
                        Mehr über uns erfahren
                        <i className="fal fa-arrow-right"></i>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Promo;
