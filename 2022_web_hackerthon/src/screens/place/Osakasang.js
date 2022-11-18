import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Osakasang() {
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
            src={process.env.PUBLIC_URL + "/image/osakasang.jpg"}
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
            <b>오사카성</b>
          </h1>

          <div style={{ paddingTop: "40px" }}>
            일본 〒540-0002 Osaka, Chuo Ward, Osakajo, １番１号
          </div>
          <div style={{ paddingTop: "20px" }}>전화번호: +81 6-6941-3044</div>
          <div style={{ paddingTop: "20px" }}>성 종류: 아즈키-모모야마 양식의 성</div>
          <div style={{ paddingTop: "20px" }}>
            입장료: 성인: 600엔, 만 15세 이하 어린이는 무료입니다.
          </div>
          <div style={{ paddingTop: "20px" }}>주차공간: 없음</div>
          <div style={{ paddingTop: "20px" }}>성내 박물관 영업시간: am 9:00 ~ pm 17:00</div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>설명</b>
          </h3>
          <div style={{ paddingTop: "20px" , fontSize:"20px" , lineHeight: "50px"}}>
            일본에서는 수많은 영화의 소설 속에서 각색되는 도요토미 히데요시의 오사카성. 요새입니다.
            해자를 깊이 파서 적이 쉽사리 넘어 들어올 수 없게하고 높은 누각을 지어 적의 침입을 빠르게
            알아낼 수 있도록 하였습니다. 1583년 히데요시가 지어올린 이 성은 5층의
            데슈카쿠(천수각)에, 기와까지 히데요시가 좋아하던 금박을 입혀서 당시 눈부시게 화려한
            성이었다고 합니다.
          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>오시는 길</b>
          </h3>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.750019870646!2d135.5237758151773!3d34.6862580914994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0cd5c283afd%3A0xf01d07d5ca11e41!2z7Jik7IKs7Lm0IOyEsQ!5e0!3m2!1sko!2skr!4v1668428005853!5m2!1sko!2skr"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{
                paddingBottom: "50px", paddingTop: "20px"
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
              src={process.env.PUBLIC_URL + "/image/skybuilding.png"}
              width="300"
              height="250"
              data-reactied="266>"
              />
              <div className="banner-txt"></div>
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/img3.jpg"}
              width="300"
              height="250"
              data-reactied="266>"
            />
          </Col>

          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/doyokuni.jpg"}
              width="300"
              height="250"
              data-reactied="266>"
            />
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/gaiukan.jpg"}
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
        >
       
        </Row>
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
              src={process.env.PUBLIC_URL + "/image/harukas.png"}
              width="300"
              height="250"
              data-reactied="266>"
            />
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/gumon.jpg"}
              width="300"
              height="250"
              data-reactied="266>"
            />
          </Col>

          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/dendentaun.jpg"}
              width="300"
              height="250"
              data-reactied="266>"
            />
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/ssiyositai.jpg"}
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
        >
       
        </Row>
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

export default Osakasang;
