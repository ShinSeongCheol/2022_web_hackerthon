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

function Universalport() {
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
            src={process.env.PUBLIC_URL + "image2/chrismas.jpg"}
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
            <b>유니버설 크리스마스 축제</b>
          </h1>

          <div style={{ paddingTop: "40px", fontSize: "20px", lineHeight: "43px" }}>
            Wizarding World의 생각에 목구멍에 덩어리가 생기는 해리포터 이야기에 너무 매혹되면 크리스마스 휴가 동안 조직을 방문해야 할 수 있습니다.<br></br>
            유니버설은 2017 년 Harry Potter ™의 Wizarding World에서 크리스마스라는 새로운 휴가 경험을 선보였습니다.<br></br>
            낮에는 상록수와 장식을 볼 수 있습니다. 홀리데이 개구리 합창단의 공연도보실 수 있습니다.<br></br>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>설명</b>
          </h3>
          <div style={{ paddingTop: "20px", fontSize: "20px", lineHeight: "43px" }}>
          The Three Broomsticks ™에서는 휴가 메뉴를 찾을 수 있습니다. 웜 버터 비어는 표준 콜드 버전과 함께 메뉴에 표시됩니다.
하루가 끝나면 마술이 시작됩니다. 그 때 무슨 일이 일어나면 연휴 기간에 방문하기에 충분한 이유가됩니다. 호그와트 (Hogwarts)의 가장 재능있는 교수와 학생들의 시각적 인 마법의 묘기로 성은 살아납니다. 가수는 성벽을 가리 킵니다. 떠 다니는 양초가 나타나고 올빼미가 지나간다. 눈사람은 산허리에 나타납니다. Weasley의 차가 평소와 같이 달려가는 불운 한 희생자 일뿐입니다. 성벽은 Boggarts Bangers에서 Decoy Detonators에 이르기까지 모든 것을 광고하는 거대한 광고판으로 바뀝니다.

          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>오시는 길</b>
          </h3>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13126.298839680852!2d135.4323382!3d34.665442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0d083d5e25d%3A0x3605fe25303252aa!2z7Jyg64uI67KE7ISkIOyKpO2KnOuUlOyYpCDsnqztjKw!5e0!3m2!1sko!2skr!4v1668689725154!5m2!1sko!2skr"
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

export default Universalport;
