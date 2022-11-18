import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./festival.css";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Smiyorimachuri() {
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
            src={process.env.PUBLIC_URL + "/image2/Smiyorimachuri.jpg"}
            width="100%"
            height="90%"
            data-reactied="266"
            alt="Smiyorimachuri"
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
            <b>스미요시 마츠리</b>
          </h1>

          <div style={{ paddingTop: "40px", fontSize: "20px", lineHeight: "48px" }}>
            오사카의 여름을 대미로 장식하는 스미요시 마츠리.<br></br>
            3일간에 걸쳐 다양한 의식 행사를 하는 등 성대하게 진행된다.<br></br>
            특히, 1,200명의 순행하는 “미코시 행렬”이 하이라이트!
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>설명</b>
          </h3>
          <div style={{ paddingTop: "20px", fontSize: "20px", lineHeight: "43px" }}>
            스미요시대사 신사는 일본 전국에 2300개 있는 스미요시 신사의 총본사로, 셋쓰노쿠니 지방 제일의 신사로서 추앙을 받아 연초에는 200만 명 이상의 참배자들이 방문합니다.<br></br>
            스미요시 축제 7/30~8/1 오사카의 여름축제를 마무리하는 축제로, 3일간에 걸쳐 제사와 봉납행사가 성대하게 거행됩니다.<br></br>
            7월 31일에 열리는 여름 넘기기 목욕재계 행사는 오사카부의 무형문화재로 지정되어 있습니다. (※폐문 시간: 22:00까지 연장)
          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>오시는 길</b>
          </h3>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2189.3598790933256!2d135.44024986796356!3d34.69677100806486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000ef51f1bdf735%3A0xe05f702edad4c8d3!2z7Iqk66-47JqU7IucIOyLoOyCrA!5e0!3m2!1sko!2skr!4v1668690278335!5m2!1sko!2skr"
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

export default Smiyorimachuri;
