import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class IntroduceFestival extends React.Component {
    render() {
        return (
            <Container
                fluid
                // style={{backgroundImage:"url(image3/backgroundImage1.jpg)"}}
            >
                <Row
                    className="justify-content-md-center"
                    style={{ marginTop: "2%" }}
                >
                    <Col xs="2" md="2" lg="2"></Col>
                    <Col xs="auto" md="auto">
                        <h1>사계절 내내 즐기는 축제</h1>
                    </Col>
                    <Col xs="2" md="2" lg="2"></Col>
                </Row>

                <div style={{ padding: "0 10%", marginTop: "2%" }}>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="image2\omiztori.jpg" style= {{height: "230px"}} />
                                <Card.Body>
                                    <Card.Title>
                                    오미즈토리 마츠리
                                    </Card.Title>
                                    <Card.Text>
                                    날짜 : 매년 3월 1-14일<br></br> 장소 : 도다이지
                                    </Card.Text>
                                    <Link to="/Omiztori">
                                        <Button variant="outline-dark">
                                            더보기
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="image2\sacurano.jpg" style= {{height: "230px"}}/>
                                <Card.Body>
                                    <Card.Title>
                                      사쿠라노 도리누케
                                    </Card.Title>
                                    <Card.Text>
                                    날짜 : 매년 4월 초에서 중순<br></br>장소 : 오사카 조폐 박물관 구내
                                    </Card.Text>
                                    <Link to="/Sacurano">
                                        <Button variant="outline-dark">
                                            더보기
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="image2\smiyorimachuri.jpg" style= {{height: "230px"}}/>
                                <Card.Body>
                                    <Card.Title>
                                    스미요시 마츠리
                                    </Card.Title>
                                    <Card.Text>
                                    날짜 : 매년 7월 30일 - 8월 1일<br></br>장소 : 스미요시 신사
                                    </Card.Text>
                                    <Link to="/Smiyorimachuri">
                                        <Button variant="outline-dark">
                                            더보기
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="image2\chrismas.jpg" style= {{height: "230px"}}/>
                                <Card.Body>
                                    <Card.Title>
                                    유니버설 크리스마스 축제
                                    </Card.Title>
                                    <Card.Text>
                                    날짜 : 11월 11일 -  1월 9일<br></br>장소 : 유니버설 스튜디오 재팬
                                    </Card.Text>
                                    <Link to="/Universalport">
                                        <Button variant="outline-dark">
                                            더보기
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* <Col className="col-md-3">
                        <Image src="festival/1.jpeg" />
                    </Col> */}
                    </Row>
                </div>
            </Container>
        );
    }
}

export default IntroduceFestival;