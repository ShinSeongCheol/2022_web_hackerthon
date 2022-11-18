import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import "./festival.css";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Omiztori() {
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
            src={process.env.PUBLIC_URL + "/image2/omiztori.jpg"}
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
            <b>오미즈토리 마츠리</b>
          </h1>

          <div style={{ paddingTop: "40px", lineHeight: "38px" }}>물과 불을 기리는 축제. 후쿠이현 오바마시에서 신성한 물을 가져온다.<br></br>
            이를 부처에게 바치고 방문객에게 나눠준다. 이 물을 마시면, 병이 낫는다고 한다. 밤에는 불이 주인공.<br></br>
            젊은 승려가 횃불을 들고 뛰어다닌다. 이때, 불꽃을 맞으면, 액운에서 지켜준다는 말이 있다.<br></br>
            전설에 따르면 물의 의식인 이 ‘오미즈토리'에 쓰이는 물은 상서로운 특성을 가지고 있으며,
            모든 병을 낫게 해 주는 치유 효과가 있다고 합니다.<br></br>
            그래서 이 물은 부처님께 바치고 난 뒤 방문객에게도 마실 기회를 줍니다.<br></br>
            승려들은 2월 20일~28일까지 슈니에 행사를 준비합니다.<br></br>
            이들은 보통 26일~28일 동안 묵언을 행하도록 되어 있습니다.
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>설명</b>
          </h3>
          <div style={{ paddingTop: "20px", fontSize: "20px", lineHeight: "43px" }}>
            

            <b>불과 물을 기리는 극적인 축제</b><br></br>
            지난 1,250여 년간 계속되어온 이 전통 축제는 2주 동안 이어지는 극적인 불교 축제로, 신성한 물과 정화 효과가 있는 불꽃이 주인공으로 등장합니다.
            3월 1일부터 14일까지 이곳에서 펼쳐지는 웅장한 불교 제례를 현장에서 직접 지켜보세요.
<br></br>
            <b>2주간의 축제</b><br></br>
            슈니에는 사실 14일간 이어지는 기원 기간에서 절정 부분입니다.
            이 기간 중에는 승려들이 일반 신자들의 죄를 대신 참회해주고, 온 세상의 평안과 풍성한 추수를 기원하며 기도를 올립니다.
          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>오시는 길</b>
          </h3>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13122.567797634583!2d135.8398158!3d34.6889851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600139907a0876dd%3A0xf890ac3f9dd53c8f!2z64-E64uk7J207KeA!5e0!3m2!1sko!2skr!4v1668686136527!5m2!1sko!2skr"
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

export default Omiztori;
