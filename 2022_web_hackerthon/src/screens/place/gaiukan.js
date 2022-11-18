import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Gaiukan() {
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
            src={process.env.PUBLIC_URL + "/image/Gaiukan.jpg"}
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
            <b>가이유칸</b>
          </h1>

          <div style={{ paddingTop: "40px" }}>
          1 Chome-1-10 Kaigandori, Minato Ward, Osaka, 552-0022 일본
          </div>
          <div style={{ paddingTop: "20px" }}>전화번호: +81 6-6576-5501</div>
          <div style={{ paddingTop: "20px" }}>건축가: 피터 체르메이예프</div>
          <div style={{ paddingTop: "20px" }}>
            입장료: 성인: 2,300엔, 어린이 (초/ 중학생) 1,200엔, 유아 (4세 이상) 600엔, 시니어 (60세 이상 ※ 필수 인증서) 2,000엔
          </div>
          <div style={{ paddingTop: "20px" }}>주차공간: 있음</div>
          <div style={{ paddingTop: "20px" }}>성내 박물관 영업시간: am 9:00 ~ pm 19:00</div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>설명</b>
          </h3>
          <div style={{ paddingTop: "20px" , fontSize:"20px" , lineHeight: "50px"}}>
            가이유칸은 일본에서 가장 장관을 이루는 수족관 가운데 하나이며 독특한 전시 방법이 세계적으로 유명합니다.
            가이유칸에서는 자연환경을 재현하여 환태평양에서 서식하는 생물들의 생동하는 모습을 소개하고 있습니다.
            15개 이상의 거대한 수족관이 있으며 각각의 수족관은 환태평양의 구체적인 지역을 재현하고 있습니다. 관람자는 태평양을 순회하는 여행을 즐길 수 있습니다. 태양 광선이 들이비치는 일본의 아름다운 숲을 재현한 ‘일본의 숲’, 얼음과 눈으로 뒤덮인 ‘남극대륙’, 그리고 중심 수조는 세계에서 가장 큰 어류 ‘고래상어’가 헤엄치고 있는 깊이 9m, 길이 34m, 수량 5,400톤의 ‘태평양’ 수족관 등이 있습니다.
          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>오시는 길</b>
          </h3>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.007315540599!2d135.426770450303!3d34.654518180350365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e8f48c0da9cd%3A0x6f83c520ae082ccc!2z7ZW07Jyg6rSA!5e0!3m2!1sko!2skr!4v1668742337397!5m2!1sko!2skr"
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
              src={process.env.PUBLIC_URL + "/image/sitennoji.jpg"}
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

export default Gaiukan;
