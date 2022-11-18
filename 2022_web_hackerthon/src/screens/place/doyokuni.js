import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Doyokuni() {
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
            src={process.env.PUBLIC_URL + "/image/Doyokuni.jpg"}
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
            <b>토요쿠니 신사</b>
          </h1>

          <div style={{ paddingTop: "40px" }}>
          530 Chayacho, Higashiyama Ward, Kyoto, 605-0931 일본
          </div>
          <div style={{ paddingTop: "20px" }}>전화번호: +81 75-561-3802</div>
          <div style={{ paddingTop: "20px" }}>매장 인물: 도요토미 히데요시, Kanō Naizen</div>
          <div style={{ paddingTop: "20px" }}>
            입장료: 무료
          </div>
          <div style={{ paddingTop: "20px" }}>주차공간: 없음</div>
          <div style={{ paddingTop: "20px" }}>영업시간: am 9:00 ~ pm 16:30</div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>설명</b>
          </h3>
          <div style={{ paddingTop: "20px" , fontSize:"20px" , lineHeight: "50px"}}>
            긴조를 지나 조금 더 내려오면 절이 있습니다. 도요토미 히데요시를 모시는 절입니다.
            오사카성을 세운 토요토미 히데요시, 그의 아들 히데요리, 그의 동생 히데나가를 신으로 모십니다.
            이 신사는 나카노시마에 1879년 세워졌으며, 1961년 현재의 장소로 옮겨놓았습니다.
            절의 내부에는 신으로 모시는 이들의 신위를 모시고 있으며 토요토미 히데요시 동상이 있습니다.
            참배하여 기도를 올리면 히데요시처럼 성공한다고 하여 사람들이 많이 찾는 신사입니다.
          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>오시는 길</b>
          </h3>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.6047153502404!2d135.77021835031408!3d34.99156468026452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108c9923443df%3A0x1d7856f2a77780d9!2z64-E7JqU7L-g64uIIOyLoOyCrA!5e0!3m2!1sko!2skr!4v1668742045776!5m2!1sko!2skr"
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
              src={process.env.PUBLIC_URL + "/image/sitennoji.jpg"}
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

export default Doyokuni;
