import { textAlign, width } from "@mui/system";
import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
// import React, { useState } from "react";

function Home() {
    // let [good, goodchange] = useState(0);

    return (
        <Container fluid style={{ backgroundColor: "green", height: "700px" }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <h4>Welcome Osaka!</h4>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md="auto">
                        <h5>서울 평균</h5>
                    </Col>
                </Row>

                {/* <Container style={{ backgroundColor: "", height: "500px" }}>
                    <Container className="ratio ratio-16x9" style={{width:"860px" ,height:"500px", alignItems:"center"}}>
                        <iframe
                            width="640"
                            height="460"
                            src="https://www.youtube.com/embed/O1sZPY1_pJI"
                            title="【일본 4K 랜선 산책】 일본 오사카 난바 도톤보리 걸어보기🚶🏻 l 오랜만에 오사카 여행 온 기분 내기"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </Container>
                    
                    <Row
                        style={{
                            backgroundColor: "",
                            margin: "10px 0px",
                            height: "480px",
                            alignItems: "center",
                        }}
                    >
                        <Col>
                            <Container className="ratio ratio-16x9">
                                <iframe
                                    width="640"
                                    height="460"
                                    src="https://www.youtube.com/embed/O1sZPY1_pJI"
                                    title="【일본 4K 랜선 산책】 일본 오사카 난바 도톤보리 걸어보기🚶🏻 l 오랜만에 오사카 여행 온 기분 내기"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </Container>
                        </Col>

                        <Col>
                            <Container style={{ backgroundColor: "" }}>
                                <h1>gd</h1>
                            </Container>
                        </Col>
                    </Row>
                </Container> */}
            </Container>
        </Container>
    );
}

export default Home;
