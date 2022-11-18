import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Arthotel() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  return (
    <Container>
      <Row>
        <Col lg={7}>
          <img
            src={process.env.PUBLIC_URL + "/image/arthotel.jpg"}
            width="100%"
            height="90%"
            alt="artHotel"
            data-reactied="266"
            style={{
              marginTop: "40px",
            }}
          />
        </Col>

        <Col
          lg={5}
          style={{
            paddingTop: "10px",
            height: "150px",
            left: "50%",
          }}
        >
          <div style={styles.stars}>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                    marginTop: "50px",
                  }}
                />
              );
            })}
          </div>

          <h1
            style={{
              marginTop: "10px",
            }}
          >
            <b>아트 호텔 오사카 베이 타워</b>
          </h1>

          <div style={{ paddingTop: "40px" }}>
          1 Chome-2-1 Benten, Minato Ward, Osaka, 552-0007 일본
          </div>
          <div style={{ paddingTop: "20px" }}>전화번호: +81 6-6577-1111</div>
          <div style={{ paddingTop: "20px" }}>가격: 메인 홈페이지 참조</div>
          <div style={{ paddingTop: "20px" }}>주차공간: 있음</div>
          <div style={{ paddingTop: "20px" }}>체크인: 15:00 ~ 체크 아웃: 11:00</div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>설명</b>
          </h3>
          <div style={{ paddingTop: "20px", fontSize: "20px", lineHeight: "50px" }}>
            이 호텔은 벤텐초 역과 바로 연결되어 있어서 대중교통을 이용하여 주변을 둘러 보기에 좋습니다.
            오사카 타코야키 박물관과 오사카 가이유칸 수족관, 유니버설 스튜디오 재팬이 열차로 약 15분 거리에 있습니다.
            또한, 오사카 과학박물관과 신사이바시 쇼핑 아케이드가 약 4km 떨어져 있습니다.
            이 호텔은 여행객뿐만 아니라 비즈니스 고객들도 이용하시기 좋은 숙소입니다. 비즈니스 고객을 위한 회의실 시설을 갖추고 있습니다.
            또한 마사지, 커피숍, 미용실 등도 이용하실 수 있습니다.
          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>오시는 길</b>
          </h3>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13125.665657983658!2d135.4609843!3d34.6694384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e632218a402d%3A0xaebd7ce3ae49c5d!2z7JWE7Yq4IO2YuO2FlCDsmKTsgqzsubQg67Kg7J20IO2DgOybjA!5e0!3m2!1sko!2skr!4v1668599602295!5m2!1sko!2skr"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              title="map"
              referrerpolicy="no-referrer-when-downgrade"
              style={{
                paddingBottom: "50px",
                paddingTop: "20px",
              }}
            ></iframe>
          </div>
        </Col>
      </Row>
      <Carousel>
        <Carousel.Item>
          <Row
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Col>
              <img
                src={process.env.PUBLIC_URL + "image/yusu.jpg"}
                width="300"
                height="250"
                alt="artHotel"
                data-reactied="266>"
              />
              <div className="banner-txt"></div>
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/ganeyoshi.jpg"}
                width="300"
                height="250"
                alt="artHotel"
                data-reactied="266>"
              />
            </Col>

            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/yahmatoyah.jpg"}
                width="300"
                height="250"
                alt="artHotel"
                data-reactied="266>"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/sinsibasi.jpg"}
                width="300"
                height="250"
                alt="artHotel"
                data-reactied="266>"
              />
            </Col>
          </Row>

          <Row
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          ></Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/nanbaoriental.jpg"}
                width="300"
                height="250"
                alt="artHotel"
                data-reactied="266>"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "image2/universalport.jpg"}
                width="300"
                height="250"
                alt="artHotel"
                data-reactied="266>"
              />
            </Col>

            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/rootshostel.jpg"}
                width="300"
                height="250"
                alt="artHotel"
                data-reactied="266>"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/ibis.jpg"}
                width="300"
                height="250"
                alt="artHotel"
                data-reactied="266>"
              />
            </Col>
          </Row>

          <Row
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          ></Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default Arthotel;
