import { Scale } from "@mui/icons-material";
// import "./osaka.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Osaka = () => {
  return (
    <Container fluid
      
        style={{backgroundImage:"url(image2/realback.jpg)",
        backgroundRepeat : "no-repeat",
        backgroundSize: "cover",
        marginLeft: "0px",
        marginRight: "0px",
        paddingLeft:"200px"
        
    }}
        >
      <h1
        style={{
          marginTop: "20px",

        }}
      >
        오사카를 소개합니다 ╰(*°▽°*)╯
      </h1>
      <Row style={{ height: "400px", marginTop: "90px" }}>
        <Col lg={6}>
          <div style={{ marginTop: "20px"}}>
            <b style={{fontSize:"20px"}}>오사카<br></br>
              오사카는 도쿄와 더불어 일본의 2대 교통중심지이며, 일본 혼슈 서부에 위치한
              세토나이카이의 동쪽, 오사카만에 면한 도시입니다. 신칸센을 비롯하여 철도 지하철 도로가
              발달하여 교토와 나라, 고베등 인근의 도시 및 관광지를 연결하고 있습니다. 오사카에는
              교토, 나라등의 인근 도시에 비해 관광자원은 많지 않으나 오랜 역사를 지닌 도시인 만큼
              유적지가 많습니다. 오사카성을 비롯하며, 일본에서 가장 오래된 시찰의 하나인 시텐노사,
              일본의 3대 민속제전의 하나인 천신제로 유명한 덴만궁 등의 사찰, 신사가 있습니다.
            </b>
          </div>
        </Col>
        <Col lg={6}>
          <img
            src={process.env.PUBLIC_URL + "/image2/background1.jpg"}
            width="90%"
            height="350px"
            data-reactied="266"
            style={{
              borderRadius: "10px 100px / 120px",
              objectFit:"cover"
            }}
          />
        </Col>
      </Row>
      <Row style={{ height: "400px" }}>
        <Col lg={6}>
        <img
            src={process.env.PUBLIC_URL + "/image2/background3.jpg"}
            width="90%"
            height="300px"
            data-reactied="266"
            style={{
              borderRadius: "10px 100px / 120px",
              objectFit:"cover"  }}
          />
        </Col>
        <Col lg={6}>
          
          <div>
            <b style={{fontSize:"20px"}}>
              〜활기차고 웃음 짓게 해주는 곳, 오사카〜<br></br> 오사카는 서일본의 중심적 도시로 고층
              빌딩과 상업 시설이 즐비하면서도 예로부터 경제, 문화의 중심지로서 번영했던 역사를 이어
              오면서 고분 등의 역사적 장소나 건조물이 기색 짙게 남아 있는 곳입니다. 그리고 가미가카
              라쿠고나 만담은 대중 예능으로 오사카에서 시작되어 오사카인들에는 결코 빼놓을 수 없는
              ‘웃음’의 문화로서 깊은 사랑을 받고 있습니다. ‘새로움’과 ‘그리움’을 자극하면서 찾아 준
              사람들이 웃지 않고는 배길 수 없게 하는, 웃음과 활기가 넘치는 곳, 그런 ‘오사카’의
              매력을 만끽해 보시기 바랍니다
            </b>
          </div>
        </Col>
      </Row>
      <Row style={{ height: "400px" }}>
        <Col lg={6}>
          <div>
            <b style={{fontSize:"20px"}}>
              〜세상의 맛있는 것들이 한데 모여 있는 곳, 오사카〜 예로부터 ’천하의 부엌’이라 불려
              오듯이 일본 전국의 특산품들이 모이는 맛의 중심지로서 번영해 온 배경에서부터, 오사카의
              식문화는 발전을 거듭해 일본 요리에서는 빼놓을 수 없는 ‘다시 (육수)’ 문화는 오사카에서
              비롯되어 전국으로 전파되었습니다. 재산을 다 잃을 정도로 과식하게 되는?! 이라는 의미도
              있는 온갖 맛있는 것들이 모여 있는 오사카는 ‘먹부림’의 거리로도 유명. 타코야키,
              오코노미야키를 시작으로, 유명 음식점의 맛과 솜씨가 빛나는 일본 요리까지 배도 마음도
              만족할 수 있는 먹거리의 고장으로 계속 진화하고 있습니다.
            </b>
          </div>
        </Col>
        <Col lg={6}>
          <img
            src={process.env.PUBLIC_URL + "/image2/background4.jpg"}
            width="90%"
            height="70%"
            data-reactied="266"
            style={{ borderRadius: "10px 100px / 120px" }}
          />
        </Col>
      </Row>
      <Row style={{ height: "400px" }}>
        <Col lg={6}>
        <img
            src={process.env.PUBLIC_URL + "/image2/back.jpg"}
            width="440px"
            height="70%"
            style={{
              borderRadius: "10px 100px / 120px",
              objectFit:"cover"
            }}
          />
        </Col>
        <Col lg={6}>
          
          <div>
            <b style={{fontSize:"20px"}}>
              〜봐도 좋고 해도 좋고! 스포츠의 고장, 오사카〜
              <br></br>야구나 축구, 농구... 오사카에는 다양한 프로 스포츠 팀이 있어서 박력 넘치는
              경기가 언제나 어디서나 열립니다. 시즌 중에 펼쳐지는 프로 선수들의 뜨거운 경기를
              경기장에서 관전할 수 있을 뿐만 아니라, 패들 보드를 타고 노를 젓는 ‘SUP’ 등의 스포츠를
              도시 한가운데서 마음껏 즐길 수 있습니다.
            </b>
          </div>
        </Col>
      </Row>
      <Row style={{ height: "400px" }}>
        <Col lg={6}>
          <div
          // style={{
          //   paddingLeft: "5em",
          //   paddingRight: "5em",
          // }}
          >
            <b style={{fontSize:"20px"}}>
              〜서쪽 대중 문화의 성지, 오사카〜<br></br> 일본 3대 전기의 고장 중 하나인 오사카
              닛폰바시는 애니메이션, 만화, 게임 등 일본 특유의 대중 문화가 밀집한 장소. 일본
              최대급의 코스프레 페스티벌 ‘닛폰바시 스트리트 페스타’는 매년 간사이 지역뿐만 아니라
              간토나 해외에서도 코스프레 마니아들이 모여 ‘탈일상’을 즐기는 이들이 오사카로
              집결합니다!
            </b>
          </div>
        </Col>
        <Col lg={6}>
          <img
            src={process.env.PUBLIC_URL + "/image2/pretty.jpg"}
            width="70%"
            height="70%"
            data-reactied="266"
            style={{
              borderRadius: "10px 100px / 120px"
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Osaka;
