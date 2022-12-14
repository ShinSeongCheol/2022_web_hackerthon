import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Sitennoji() {
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
            src={process.env.PUBLIC_URL + "/image/Sitennoji.jpg"}
            width="100%"
            height="90%"
            alt="sitennoji"
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
            <b>μνλΈμ§</b>
          </h1>

          <div style={{ paddingTop: "40px" }}>
          1-11-18, Shitennouji, Tennouji-ku, Osaka-shi, Osaka, 543-0051
          </div>
          <div style={{ paddingTop: "20px" }}>μ νλ²νΈ: +81 6-6771-0066</div>
          <div style={{ paddingTop: "20px" }}>μ± μ’λ₯: μμ¦ν€-λͺ¨λͺ¨μΌλ§ μμμ μ±</div>
          <div style={{ paddingTop: "20px" }}>
            μμ₯λ£: μ±μΈ: 300μ(μ£Όμ ν¨μ€κ° μμΌλ©΄, λ¬΄λ£)
          </div>
          <div style={{ paddingTop: "20px" }}>μ£Όμ°¨κ³΅κ°: μμ</div>
          <div style={{ paddingTop: "20px" }}>μμμκ°: 24μκ°</div>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>μ€λͺ</b>
          </h3>
          <div style={{ paddingTop: "20px" , fontSize:"20px" , lineHeight: "50px"}}>
            μ§κΈμΌλ‘λΆν° 1400λ μ΄μ μ΄μ , 593λμ μΌν μΏ  νμ(θεΎ³ε€ͺε­)κ° κ±΄λ¦½ν μνλΈμ§.
            μΌλ³Έ λΆκ΅ μ΅μ΄μ κ΄κΆμ¬λ‘ κ±΄λ¦½ μ΄μ κ° βμΌλ³Έ μκΈ°βμλ κΈ°λ‘λμ΄ μμ΅λλ€.
            λ¨μͺ½μμ λΆμͺ½μ ν₯ν΄ μ€λ¬Έ, μ€μΈ΅ν, κΈλΉ, κ°λΉμ μΌμ§μ μΌλ‘ λ°°μΉνλ βμνλΈμ§μ κ°λ λ°°μΉβλΌλ
            μΌλ³Έμμ κ°μ₯ μ€λλ κ±΄μΆ μμμΌλ‘ μ§μ΄μ‘μ΅λλ€. μ°μλ μ μμΌλ‘ μΈν΄ μ¬λ¬ λ² μμ€λμμΌλ©° μ§κΈμ μ¬μ°°
            κ±΄λ¬Όμ 1963λμ μ°½κ±΄ λΉμμ κ°μ λͺ¨μ΅μΌλ‘ μΆ©μ€νκ² μ¬νλμμ΅λλ€. μμ μλ μ²νμ’μ μνλ μκΈ°λ μμμΌλ
            νλμλ νΉμ  μ’νμ μνμ§ μμ νμ’μ μ΄λ³Έμ°μλλ€.
          </div>
        </Col>
        <Col lg={7}>
          <h3 style={{ paddingTop: "50px" }}>
            <b>μ€μλ κΈΈ</b>
          </h3>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.9924627905725!2d135.51475505030297!3d34.65489328035028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000ddf814c3d229%3A0xb1c4b1f7b63b76e9!2z7J2867O4IOOAkjU0My0wMDUxIOyYpOyCrOy5tOu2gCDsmKTsgqzsubTsi5wg642064W47KeA6rWsIOyLnO2FkOuFuOyngA!5e0!3m2!1sko!2skr!4v1668739156985!5m2!1sko!2skr"
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
              alt="sitennoji"
              data-reactied="266>"
              />
              <div className="banner-txt"></div>
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/img3.jpg"}
              width="300"
              height="250"
              alt="sitennoji"
              data-reactied="266>"
            />
          </Col>

          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/doyokuni.jpg"}
              width="300"
              height="250"
              alt="sitennoji"
              data-reactied="266>"
            />
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/gaiukan.jpg"}
              width="300"
              height="250"
              alt="sitennoji"
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
              alt="sitennoji"
              data-reactied="266>"
            />
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/gumon.jpg"}
              width="300"
              height="250"
              alt="sitennoji"
              data-reactied="266>"
            />
          </Col>

          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/dendentaun.jpg"}
              width="300"
              height="250"
              alt="sitennoji"
              data-reactied="266>"
            />
          </Col>
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/image/ssiyositai.jpg"}
              width="300"
              height="250"
              alt="sitennoji"
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

export default Sitennoji;
