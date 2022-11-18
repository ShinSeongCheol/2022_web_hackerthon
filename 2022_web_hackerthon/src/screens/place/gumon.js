import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Gumon() {
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
            src={process.env.PUBLIC_URL + "/image/Gumon.jpg"}
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
            <b>오사카 구로몬 시장</b>
          </h1>

          <div style={{ paddingTop: "40px" }}>
          2-4-1, Nipponbashi, Chuo-ku, Osaka-shi, Osaka
          </div>
          <div style={{ paddingTop: "20px" }}>전화번호: 없음</div>
          <div style={{ paddingTop: "20px" }}>주차공간: 없음</div>
          <div style={{ paddingTop: "20px" }}>
          영업시간: am 17:00까지
          </div>
          <div style={{ paddingTop: "20px" }}>
            식자재 전통시장인 구로몬시장은
            맛잡 골목으로도 유명하다.
            매우 활기차고 서민적인 분위기인데
            지금은 관광객들이 주요 타겟이다.</div>
          
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>설명</b>
          </h3>
          <div style={{ paddingTop: "20px" , fontSize:"20px" , lineHeight: "50px"}}>
          ‘구로몬 시장’은 오사카시의 중심, 미나미의 닛폰바시 근처에 위치하고 있습니다. 
          약 580미터의 아케이드 상가에 수산물점, 청과점, 정육점, 제과점 등 약 170개의 
          점포가 늘어서 있습니다. 오사카 사람들의 먹거리를 책임지는 부엌으로 알려지면서 
          평소에는 하루 3만명, 연말에는 15만명의 쇼핑객들이 이곳을 찾습니다. 에도 시대, 
          1822년부터 이곳에서 생선 매매가 이루어졌다고 하며 메이지 말기까지는 근처에 있던 
          사원 이름을 따서 엔묘지 시장으로 불렸다. 엔묘지의 산문이 검은 색이었던 점에서 
          점차 구로몬 시장이라고 불리게 되었습니다.
          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>오시는 길</b>
          </h3>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13126.312512177452!2d135.5062259!3d34.6653557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac1d2c78be23c141!2z6rWs66Gc66qs7Iuc7J6l!5e0!3m2!1sko!2skr!4v1668756682270!5m2!1sko!2skr"
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
              src={process.env.PUBLIC_URL + "/image/Gumon.jpg"}
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

export default Gumon;
