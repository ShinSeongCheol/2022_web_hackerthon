import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./festival.css";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Sacurano() {
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
            src={process.env.PUBLIC_URL + "/image2/Sacurano.jpg"}
            width="100%"
            height="90%"
            data-reactied="266"
            alt="Sacurano"
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
            <b>야마나카다니</b>
          </h1>

          <div style={{ paddingTop: "40px", fontSize: "20px", lineHeight: "48px" }}>
          <b>【예년의 절정시기】3월 하순~4월 초순</b><br></br>
              【하나카이도 야마나카다니 벚꽃축제】<br></br>
              개최장소：완파쿠 왕국과 그 주변<br></br>
              개최기간 (일시)：예년은 4월 첫째 주 일요일<br></br>
              ※3월 말~4월 초순의 일몰~22：00 라이트업<br></br>
              입장료：무료<br></br>
              문의： 072-471-5678 (한난시청 지역활력창조과)<br></br>
            
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>설명</b>
          </h3>
          <div style={{ paddingTop: "20px", fontSize: "20px", lineHeight: "35px" }}>
            야마나카다니 지구는 에도시대(1603~1867년)에는 역참마을 ‘야마나카슈쿠’로 번영, 온천가로도 명성을 날리던 곳이다.<br></br>
            과거의 활기를 되찾기 위해 1965년경부터 야마나카 강의 양 기슭 1km에 걸쳐 약 1,000그루의 벚나무를 심어 멋진 가로수길을 조성했다.<br></br>
            지금은 상춘객들의 발길이 끊이지 않는 벚꽃명소로 거듭났다.
            벚꽃이 절정을 맞을 무렵 개최되는 ‘하나카이도 야마나카다니 벚꽃축제’에서는 전통 북 연주인 ‘랏코’와 전통 춤 ‘요사코이 오도리 등 다양한 볼거리가 있고, 라이트업을 한 환상적인 밤벚꽃도 함께 즐길 수 있다.<br></br>
            야마나카슈쿠의 한 켠에 위치한 사찰 지후쿠지는 경내를 뒤덮을 듯 뻗은 가지가 눈길을 끄는 시다레자쿠라가 명물이다.<br></br>
            입장료가 무료인 완파쿠 왕국(시영공원)도 추천스팟 중 하나다.
          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>오시는 길</b>
          </h3>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.9877724377916!2d135.26868735029225!3d34.325330780436985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b5d75c7640eb%3A0xb30b46e510c653c7!2z7JmE7YyM7L-gIOyZleq1rQ!5e0!3m2!1sko!2skr!4v1668690026753!5m2!1sko!2skr"
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

export default Sacurano;
