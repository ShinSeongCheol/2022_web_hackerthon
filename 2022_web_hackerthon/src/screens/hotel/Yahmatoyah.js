import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Yahmatoyah() {
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
            src={process.env.PUBLIC_URL + "/image/Yahmatoyah.jpg"}
            width="100%"
            height="90%"
            alt="image"
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
            <b>야마토야 혼텐 료칸</b>
          </h1>

          <div style={{ paddingTop: "40px" }}>
          5 Chome-12-21 Fukushima, Fukushima Ward, Osaka, 553-0003 일본
          </div>
          <div style={{ paddingTop: "20px" }}>전화번호: +81 6-6452-2101</div>
          <div style={{ paddingTop: "20px" }}>가격: 950~1,200엔</div>
          <div style={{ paddingTop: "20px" }}>주차공간: 있음</div>
          <div style={{ paddingTop: "20px" }}>영업시간:  11:00 ~ 15:30 (화요일 휴무, 일요일만 16시 마감)</div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>설명</b>
          </h3>
          <div style={{ paddingTop: "20px", fontSize: "20px", lineHeight: "50px" }}>
            한국에 국밥이 있다면 일본에는 라멘이 있다. 다양한 종류의 국밥이 있듯 라멘의 세계도 다채롭다,
            어떤 육수인지, 무엇으로 간을 하는지, 면의 굵기, 면을 먹는 방식(국물·비빔·찍먹) 등을 조합하고, 
            각 가게별 비법이 들어가면 서로 다른 수천 개의 라멘이 완성된다.오사카 현지인들을 줄 세우는 
            모에요멘스케는 오리와 닭을 활용해 깔끔하면서도 깊은 육수를 뽑아내는 걸로 유명하다. 쫄깃한 면과, 
            그 면을 살포시 덮고 있는 부드럽고 적당히 기름진 차슈도 매력 포인트. 350엔(한화 약 3,500원)으로 
            맛볼 수 있는 차슈 덮밥도 꼭 먹어봐야 한다. 
          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>오시는 길</b>
          </h3>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.7635711502076!2d135.486736463719!3d34.6962518362416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e73d8ea37a69%3A0xd319b6d6c0d798c5!2z66qo7JeQ7JqUIOupmOyKpOy8gA!5e0!3m2!1sko!2skr!4v1668582261634!5m2!1sko!2skr"
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
                alt="image"
                data-reactied="266>"
              />
              <div className="banner-txt"></div>
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/chibo.jpg"}
                width="300"
                height="250"
                alt="image"
                data-reactied="266>"
              />
            </Col>

            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image/moeyomenske.jpg"}
                width="300"
                height="250"
                alt="image"
                data-reactied="266>"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image2/torihachi.png"}
                width="300"
                height="250"
                alt="image"
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
                src={process.env.PUBLIC_URL + "image/biainabenotennoji.jpg"}
                width="300"
                height="250"
                alt="image"
                data-reactied="266>"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image2/heivoen.png"}
                width="300"
                height="250"
                alt="image"
                data-reactied="266>"
              />
            </Col>

            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image2/nakatani.png"}
                width="300"
                height="250"
                alt="image"
                data-reactied="266>"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/image2/hukutaro.png"}
                width="300"
                height="250"
                alt="image"
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

export default Yahmatoyah;
