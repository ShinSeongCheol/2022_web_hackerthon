import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Heijoen() {
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
            src={process.env.PUBLIC_URL + "/image2/heivoen.png"}
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
            <b>헤이죠엔</b>
          </h1>

          <div style={{ paddingTop: "40px" }}>9-9-44 Toyotsucho, Suita, Osaka 564-0051 일본</div>
          <div style={{ paddingTop: "20px" }}>전화번호: +81 6-6380-3392</div>
          <div style={{ paddingTop: "20px" }}>가격: 1,500~5,300엔</div>
          <div style={{ paddingTop: "20px" }}>주차공간: 있음</div>
          <div style={{ paddingTop: "20px" }}>영업시간: 11:30~14:00, 15:00~21:00</div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>설명</b>
          </h3>
          <div style={{ paddingTop: "20px", fontSize: "20px", lineHeight: "50px" }}>
            오코노미야끼와 타코야끼, 라멘 등 오사카에서 맛봐야 할 음식은 다양한데, 야끼니쿠도 빠트릴
            수 없습니다. 직접 고기를 구워 먹는 문화는 한국이 단연 으뜸이지만, 일본의 방식으로 해석된
            바비큐도 꽤 매력적입니다. 헤이죠엔은 유튜브 '오사카에 사는 사람들' 채널에서 소개했는데,
            제법 가성비가 좋고 맛도 준수합니다. 고기 메뉴에서는 하라미(안창살), 가루비(갈비),
            규탕(소혀) 등이고 시오(소금)와 타레(양념)를 취향에 따라 선택하면 됩니다. 특히, 양념의
            경우 우리의 돼지갈비가 그러하듯 흰쌀밥과의 조화가 훌륭합니다. 일본식 육회와 냉면,
            전(지짐이)도 맛보는 것도 추천합니다.
          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>오시는 길</b>
          </h3>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13111.46479398363!2d135.4962452!3d34.7589632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e50a9700eeb3%3A0x4c2ca8bf6c7c1c25!2z7Zek7J207KOg7JeU!5e0!3m2!1sko!2skr!4v1668658877861!5m2!1sko!2skr"
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
                src={process.env.PUBLIC_URL + "image2/ichran.jpg"}
                width="300"
                height="250"
                data-reactied="266>"
              />
              <div className="banner-txt"></div>
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/chibo.jpg"}
                width="300"
                height="250"
                data-reactied="266>"
              />
            </Col>

            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/takoyaki.webp"}
                width="300"
                height="250"
                data-reactied="266>"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image2/torihachi.png"}
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
                src={process.env.PUBLIC_URL + "/image2/yahmakarayah.png"}
                width="300"
                height="250"
                data-reactied="266>"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/torihachi.jpg"}
                width="300"
                height="250"
                data-reactied="266>"
              />
            </Col>

            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/ramen.png"}
                width="300"
                height="250"
                data-reactied="266>"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image2/hukutaro.png"}
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

export default Heijoen;
