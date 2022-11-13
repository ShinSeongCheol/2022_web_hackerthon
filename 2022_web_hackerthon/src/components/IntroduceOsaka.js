import React from 'react';
import { Container,Row,Col,Image,Button } from 'react-bootstrap';

class IntroduceOsaka extends React.Component {
    render() {
        return (
            <Container
                fluid
                className=""
                style={{
                    backgroundColor: "",
                    height: "",
                }}
            >
                {/*URL(image3/osaka_night.jpg)*/}
                <Row className="justify-content-md-center">
                    <Col md="auto" style={{marginTop:"2%"}}>
                        <h3>오사카</h3>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col md="auto" style={{marginTop:""}}>
                        <p>서일본 최대의 도시!</p>
                    </Col>
                </Row>

                <div style={{ margin: "1%", padding:"0 5%" }}>
                    <Row>
                        <Col className="col-md-6" lg={6}>
                            <div
                                className="ratio ratio-16x9"
                                style={{ width: "100%", height: "100%" }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/O1sZPY1_pJI"
                                    title="【일본 4K 랜선 산책】 일본 오사카 난바 도톤보리 걸어보기🚶🏻 l 오랜만에 오사카 여행 온 기분 내기"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </Col>

                        <Col className="col-md-6">
                            <Row>
                                <Col className="ratio ratio-16x9">
                                    <Image
                                        src="image2/aburia.png"
                                        style={{ padding: "5px", borderRadius: "20px" }}
                                    />

                                    <div className="text-center" style={{ marginTop: "15%" }}>
                                        <h4>여행지</h4>

                                        <Button
                                            variant="outline-info"
                                            style={{ width: "70%", height: "25%" }}
                                        >
                                            자세히보기▶
                                        </Button>
                                    </div>
                                </Col>

                                <Col
                                    className="ratio ratio-16x9"
                                    style={{ width: "50%", height: "50%" }}
                                >
                                    <Image
                                        src="image2/aburia.png"
                                        style={{ padding: "5px", borderRadius: "20px" }}
                                    />

                                    <div className="text-center" style={{ marginTop: "15%" }}>
                                        <h4>맛도리</h4>

                                        <Button
                                            variant="outline-info"
                                            style={{ width: "70%", height: "25%" }}
                                        >
                                            자세히보기▶
                                        </Button>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col
                                    className="ratio ratio-16x9"
                                    style={{ width: "50%", height: "50%" }}
                                >
                                    <Image
                                        src="image2/aburia.png"
                                        style={{ padding: "5px", borderRadius: "20px" }}
                                    />

                                    <div className="text-center" style={{ marginTop: "15%" }}>
                                        <h4>축제</h4>

                                        <Button
                                            variant="outline-info"
                                            style={{ width: "70%", height: "25%" }}
                                        >
                                            자세히보기▶
                                        </Button>
                                    </div>
                                </Col>

                                <Col
                                    className="ratio ratio-16x9"
                                    style={{ width: "50%", height: "50%" }}
                                >
                                    <Image
                                        src="image2/aburia.png"
                                        style={{ padding: "5px", borderRadius: "20px" }}
                                    />

                                    <div className="text-center" style={{ marginTop: "15%" }}>
                                        <h4 style={{ width: "100%" }}>숙소</h4>

                                        <Button
                                            variant="outline-info"
                                            style={{ width: "70%", height: "25%" }}
                                        >
                                            자세히보기▶
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default IntroduceOsaka;
