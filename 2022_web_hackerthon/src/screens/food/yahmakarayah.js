import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function yahmakarayah() {
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
            src={process.env.PUBLIC_URL + "/image/yahmakarayah.jpg"}
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
            <b>모토무라 난마점</b>
          </h1>

          <div style={{ paddingTop: "40px" }}>일본 〒542-0076 Osaka, Chuo Ward, Nanba, 3 Chome-3-1 地下一階 スガタビル</div>
          <div style={{ paddingTop: "20px" }}>전화번호: +81 6-6643-3313</div>
          <div style={{ paddingTop: "20px" }}>규카츠 130g : 1400엔 260g : 2200엔 130g : 추가는 800엔</div>
          <div style={{ paddingTop: "20px" }}>주차공간: 없음</div>
          <div style={{ paddingTop: "20px" }}>
            영업시간: 11:00 ~ 22:00 (화요일 휴무, 일요일만 16시 마감)
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>설명</b>
          </h3>
          <div style={{ paddingTop: "20px", fontSize: "20px", lineHeight: "50px" }}>
            규카츠(牛カツ)는 돈가스의 소고기 버전으로 돼지고기가 아닌 쇠고기로 만들어서 빵가루
            옷을 입히고 튀긴 음식인데, 한참 규카츠가 인기있던 2016~2017년 무렵엔, 한국에서도 
            일본식 규카츠 전문점을 어렵지 않게 볼 수 있었습니다.
            튀김옷만 바싹 익히고, 고기는 거의 익지 않은 레어상태로 나와서 불판에 직접 구워먹으면 
            되는데 굽기에 따라 식감과 맛이 달라지는 게 규카츠의 가장 큰 매력입니다. 
          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>오시는 길</b>
          </h3>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.528463513408!2d135.50196169999998!3d34.66660960000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e76b53bc67e9%3A0xc718ee6b423ad7d3!2z6rec7Lm07LigIOuqqO2GoOustOudvCDrgpzrsJTsoJA!5e0!3m2!1sko!2skr!4v1668591091610!5m2!1sko!2skr"
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
                src={process.env.PUBLIC_URL + "/image/yahmakarayah.jpg"}
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
                src={process.env.PUBLIC_URL + "/image2/heivoen.png"}
                width="300"
                height="250"
                data-reactied="266>"
              />
            </Col>

            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image2/nakatani.png"}
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

export default yahmakarayah;
