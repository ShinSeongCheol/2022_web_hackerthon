import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Jivri() {
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
            src={process.env.PUBLIC_URL + "/image/img3.jpg"}
            width="100%"
            height="90%"
            alt="Jivri"
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
            <b>지브리 파크</b>
          </h1>

          <div style={{ paddingTop: "40px" }}>
          일본 Aichi, Nagakute, Ibaragabasama, 乙1533-1 内 Expo 2005 Aichi Commemorative Park (Moricoro Park)
          </div>
          <div style={{ paddingTop: "20px" }}>전화번호: +81 570-089-154</div>
          <div style={{ paddingTop: "20px" }}>개장: 2022년</div>
          <div style={{ paddingTop: "20px" }}>
            입장료<br></br>
            지브리의 대창고 2000엔<br></br>
            청춘의 언덕 1000엔<br></br>
            돈토코의 숲 1000엔<br></br>
          </div>
          <div style={{ paddingTop: "20px" }}>영업시간: am 9:00 ~ pm 17:00</div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>설명</b>
          </h3>
          <div style={{ paddingTop: "20px" , fontSize:"20px" , lineHeight: "50px"}}>
            정문에는 하울의 움직이는 성과 같은 19세기 말 공상과학적 요소를 채용한 엘리베이터 동이 설치된다.
            주변에는 귀를 기울이면의 골동품 가게를 재현한 건물도 설치한다.
            모노노케 히메를 모티브로 한 모노노케 지역에는 타타라장을 모티브로 한 건물과 재앙신 오브제가 설치된다.
            하울의 움직이는 성과 마녀 배달부 키키그리고 아야와 마녀를 모티브로 한 마녀 계곡 지역에는 마법을 소재로
            한 작품이 테마로 키키의 집과 아야의 집이 만들어질 예정이며 놀이공원도 만들어진다.
            또한 기존에 있던 사츠키와 메이의 집도 정비되며 숲 산책로도 재정비한다고 한다.
          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>오시는 길</b>
          </h3>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.2285043216975!2d137.08631605032016!3d35.17585688021861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600367450203d0b3%3A0x36164b7a69c5128b!2sGhibli%20Park!5e0!3m2!1sko!2skr!4v1668739877774!5m2!1sko!2skr"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              title="map"
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
              alt="Jivri"
              data-reactied="266>"
              />
              <div className="banner-txt"></div>
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/sitennoji.jpg"}
              width="300"
              height="250"
              alt="Jivri"
              data-reactied="266>"
            />
          </Col>

          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/doyokuni.jpg"}
              width="300"
              height="250"
              alt="Jivri"
              data-reactied="266>"
            />
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/gaiukan.jpg"}
              width="300"
              height="250"
              alt="Jivri"
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
              alt="Jivri"
              data-reactied="266>"
            />
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/gumon.jpg"}
              width="300"
              height="250"
              alt="Jivri"
              data-reactied="266>"
            />
          </Col>

          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/dendentaun.jpg"}
              width="300"
              height="250"
              alt="Jivri"
              data-reactied="266>"
            />
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/ssiyositai.jpg"}
              width="300"
              height="250"
              alt="Jivri"
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

export default Jivri;
