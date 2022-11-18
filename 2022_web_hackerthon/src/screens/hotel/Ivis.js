import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Ivis() {
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
            src={process.env.PUBLIC_URL + "/image/ibis.jpg"}
            width="100%"
            height="90%"
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
            <b>이비스 스타일스</b>
          </h1>

          <div style={{ paddingTop: "40px" }}>
          2-13 Souemoncho, Chuo Ward, Osaka, 542-0084 일본
          </div>
          <div style={{ paddingTop: "20px" }}>전화번호: +81 6-6211-3555</div>
          <div style={{ paddingTop: "20px" }}>가격: 950~1,200엔</div>
          <div style={{ paddingTop: "20px" }}>체크인: 14시부터</div>
          <div style={{ paddingTop: "20px" }}>체크아웃: 11:00까지</div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>설명</b>
          </h3>
          <div style={{ paddingTop: "20px", fontSize: "20px", lineHeight: "50px" }}>
          이비스 스타일스 오사카는 3성급 친환경 호텔, 신사이바시에 위치해 있습니다. 
          식료품점/편의점, 드라이클리닝/세탁 서비스, 컨퍼런스 공간 외에도 수많은 편의 시설 
          및 서비스를 이비스 스타일스 오사카 남바에서 이용하실 수 있습니다. 
          고객은 레스토랑 외에도 객실 내 무료 WiFi 등을 이용하실 수 있습니다. 
          투숙 중에는 다음과 같은 편의 시설 및 서비스를 함께 이용하실 수 있습니다.
          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>오시는 길</b>
          </h3>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13125.628248769717!2d135.5049282!3d34.6696745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2d67a0b305014a!2z7J2067mE7IqkIOyKpO2DgOydvOyKpCDsmKTsgqzsubQ!5e0!3m2!1sko!2skr!4v1668762463162!5m2!1sko!2skr"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
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
                data-reactied="266>"
              />
              <div className="banner-txt"></div>
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/ganeyoshi.jpg"}
                width="300"
                height="250"
                data-reactied="266>"
              />
            </Col>

            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image2/mocci.jpg"}
                width="300"
                height="250"
                data-reactied="266>"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/sinsibasi.jpg"}
                width="300"
                height="250"
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
                src={process.env.PUBLIC_URL + "image/ganeyoshi.jpg"}
                width="300"
                height="250"
                data-reactied="266>"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "image/nanbaoriental.jpg"}
                width="300"
                height="250"
                data-reactied="266>"
              />
            </Col>

            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/rootshoetel.jpg"}
                width="300"
                height="250"
                data-reactied="266>"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image2/ibisosaka.jpg"}
                width="300"
                height="250"
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

export default Ivis;
