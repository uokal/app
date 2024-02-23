import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import side_img_1 from "../../../public/assets/img/other/slide-1.png";
import side_img_2 from "../../../public/assets/img/other/slide-2.png";
import side_img_3 from "../../../public/assets/img/other/slide-3.png";
import side_img_4 from "../../../public/assets/img/other/slide-3.png";

const gallery_data = [
  {
    id: 1,
    img: side_img_1,
    name: "Ungarn",
    title: "Budapest, Pecs"
  },
  {
    id: 2,
    img: side_img_2,
    name: "Slowakei",
    title: "Bratislava, Martin, Kosice",
    count: 94
  },
  {
    id: 3,
    img: side_img_3,
    name: "Tschechien",
    title: "Prag, Pilsen, Olmütz"
  },
  {
    id: 4,
    img: side_img_4,
    name: "Lettland",
    title: "Riga"
  },
  {
    id: 5,
    img: side_img_1,
    name: "Ungarn",
    title: "Budapest, Pecs"
  },
  {
    id: 6,
    img: side_img_2,
    name: "Slowakei",
    title: "Bratislava, Martin, Kosice",
    count: 94
  },
  {
    id: 7,
    img: side_img_3,
    name: "Tschechien",
    title: "Prag, Pilsen, Olmütz"
  },
  {
    id: 8,
    img: side_img_4,
    name: "Lettland",
    title: "Riga"
  }
];
const setting = {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 4
    },
    992: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 3
    },
    576: {
      slidesPerView: 1
    },
    0: {
      slidesPerView: 1
    }
  },
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true
  },
  navigation: {
    nextEl: ".test-prev",
    prevEl: ".test-next"
  }
};
function Gallery() {
  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
    setIsDragged(true);
  };

  const handleTransitionEnd = () => {
    setIsDragged(false);
  };
  console.log(gallery_data, "gallery_data");
  return (
    <section className="space gray-bg">
      <Container>
        <Row>
          <Col
            md={8}
            className="wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="head-title">
              <span>UNIS & LÄNDER</span>
              <h2>An welchem Ort würdest du am liebsten studieren?</h2>

              <Button variant="link">
                Zu den Universitäten <i className="far fa-arrow-right"></i>
              </Button>
            </div>
          </Col>
          <Col
            md={4}
            className="wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="d-flex align-items-center justify-content-start justify-content-md-end">
              <div className="test-next">
                <button className="arrow-btn">
                  <i className="far fa-arrow-left"></i>
                </button>
              </div>
              <div className="test-prev">
                <button className="arrow-btn">
                  <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="tp-testimonial-five-slider-section">
              <Swiper
                {...setting}
                onSliderMove={handleSlideChange}
                onTransitionEnd={handleTransitionEnd}
                modules={[Navigation, Scrollbar]}
                className={`swiper-container testimonial-five-slider-active ${
                  isDragged ? "dragged" : ""
                }`}
              >
                {gallery_data.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="gallery">
                      <div className="gallery-img">
                        <Image src={item.img} alt="theme-pure" />
                      </div>
                      <div className="gallery-content">
                        <h4>{item.name}</h4>
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="tp-scrollbar"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Gallery;
