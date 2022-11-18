import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function ResponsiveAutoExample() {
  return (
    
    <Container fluid
      
    style={{backgroundImage:"url(image2/realback.jpg)",
    backgroundRepeat : "no-repeat",
    backgroundSize: "cover",
    marginLeft: "0px",
    marginRight: "0px",
      paddingLeft: "200px",
      paddingRight:"200px"
}}
    >
      <h3
        style={{
          marginTop: "20px",
        }}
      >
        <b>오사카의 사계절 내내 즐기는 축제</b>
      </h3>

      <Row
        style={{
          marginTop: "60px",
          marginBottom: "20px",
        }}
      >
        <Col lg={6}>
          <Link to="/Omiztori" style={{ textDecoration: "none", color: "black" }}>
            <img
              src={process.env.PUBLIC_URL + "/image2/omiztori.jpg"}
              width="300"
              height="250"
              data-reactied="266"
              alt="omiztori"
            />
          </Link>
        </Col>
        <Col lg={6}>
          <Link to="/Omiztori" style={{ textDecoration: "none", color: "black" }}>
            <h4
              style={{
                marginTop: "10px",
              }}
            >
              오미즈토리 마츠리
            </h4>
            <div>이를 부처에게 바치고 방문객에게 나눠준다. 이 물을 마시면, 병이 낫는다고 한다.<br></br> 밤에는 불이 주인공.<br></br>
            젊은 승려가 횃불을 들고 뛰어다닌다. 이때, 불꽃을 맞으면, 액운에서 지켜준다는 말이 있다.<br></br>
            전설에 따르면 물의 의식인 이 ‘오미즈토리'에 쓰이는 물은 상서로운 특성을 가지고 있으며,
            모든 병을 낫게 해 주는 치유 효과가 있다고 합니다.<br></br>
            그래서 이 물은 부처님께 바치고 난 뒤 방문객에게도 마실 기회를 줍니다.<br></br>
            승려들은 2월 20일~28일까지 슈니에 행사를 준비합니다.<br></br>
            </div>
          </Link>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        <Col lg={6}>
        <Link to="/Sacurano" style={{ textDecoration: "none", color: "black" }}>
          <img
            src={process.env.PUBLIC_URL + "/image2/Sacurano.jpg"}
            width="300"
            height="250"
            data-reactied="266>"
            alt="Sacurano"
            />
            </Link>
        </Col>
        
        <Col lg={6}>
        <Link to="/Sacurano" style={{ textDecoration: "none", color: "black" }}>
          <h4
            style={{
              marginTop: "10px",
            }}
          >
            사쿠라노 도리누케
          </h4>
          <div
            style={{
              marginTop: "10px",
            }}
          >
              【하나카이도 야마나카다니 벚꽃축제】<br></br>
              개최장소：완파쿠 왕국과 그 주변<br></br>
              개최기간 (일시)：예년은 4월 첫째 주 일요일<br></br>
              ※3월 말~4월 초순의 일몰~22：00 라이트업<br></br>
              입장료：무료<br></br>
              문의： 072-471-5678 (한난시청 지역활력창조과)<br></br>
            </div>
            </Link>
        </Col>
      </Row>

      <Row
        style={{
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        <Col lg={6}>
        <Link to="/Smiyorimachuri" style={{ textDecoration: "none", color: "black" }}>
          <img
            src={process.env.PUBLIC_URL + "/image2/Smiyorimachuri.jpg"}
            width="300"
            height="250"
            data-reactied="266>"
            alt="Smiyorimachuri"
            />
            </Link>
        </Col>
        <Col lg={6}>
        <Link to="/Smiyorimachuri" style={{ textDecoration: "none", color: "black" }}>
          <h4
            style={{
              marginTop: "10px",
            }}
          >
            스미요시 마츠리
          </h4>
          <div
            style={{
              marginTop: "10px",
            }}
          >
           오사카의 여름을 대미로 장식하는 스미요시 마츠리.<br></br>
            3일간에 걸쳐 다양한 의식 행사를 하는 등 성대하게 진행된다.<br></br>
            특히, 1,200명의 순행하는 “미코시 행렬”이 하이라이트!
            </div>
            </Link>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        <Col lg={6}>
        <Link to="/Universalport" style={{ textDecoration: "none", color: "black" }}>
          <img
            src={process.env.PUBLIC_URL + "/image2/chrismas.jpg"}
            width="300"
            height="250"
            data-reactied="266>"
            alt="chrismas"
            />
            </Link>
        </Col>
        <Col lg={6}>
        <Link to="/Universalport" style={{ textDecoration: "none", color: "black" }}>
          <h4
            style={{
              marginTop: "10px",
            }}
          >
            유니버설 크리스마스 축제
          </h4>
          <div
            style={{
              marginTop: "10px",
            }}
          >
            Wizarding World의 생각에 목구멍에 덩어리가 생기는 해리포터 이야기에 너무 매혹되면 크리스마스 휴가 동안 조직을 방문해야 할 수 있습니다.<br></br>
            유니버설은 2017 년 Harry Potter ™의 Wizarding World에서 크리스마스라는 새로운 휴가 경험을 선보였습니다.<br></br>
            낮에는 상록수와 장식을 볼 수 있습니다. 홀리데이 개구리 합창단의 공연도보실 수 있습니다.
            </div>
            </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;
