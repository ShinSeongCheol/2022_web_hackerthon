import { Container, Row, Col } from "react-bootstrap";
import { Image, Button } from "react-bootstrap";

function Test() {
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
                <Col md="auto" style={{ marginTop: "2%" }}>
                    <h3>오사카</h3>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col md="auto" style={{ marginTop: "" }}>
                    <p>서일본 최대의 도시!</p>
                </Col>
            </Row>

            <div style={{ margin: "1%", padding: "0 5%" }}>
                <Row xs={1} md={2} lg={2}>
                    <Col>
                        <div className="ratio ratio-16x9" style={{ width: "100%", height: "100%" }}>
                            <iframe
                                src="https://www.youtube.com/embed/O1sZPY1_pJI"
                                title="【일본 4K 랜선 산책】 일본 오사카 난바 도톤보리 걸어보기🚶🏻 l 오랜만에 오사카 여행 온 기분 내기"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <div className="d-inline">
                                <Image
                                    src="image2/aburia.png"
                                    style={{ padding: "5px", borderRadius: "20px", width: "50%" }}
                                />
                            </div>

                            <div className="d-inline">
                                <Image
                                    src="image2/aburia.png"
                                    style={{ padding: "5px", borderRadius: "20px", width: "50%" }}
                                />
                            </div>

                            <div className="d-inline">
                                <Image
                                    src="image2/aburia.png"
                                    style={{ padding: "5px", borderRadius: "20px", width: "50%" }}
                                />
                            </div>

                            <div className="d-inline">
                                <Image
                                    src="image2/aburia.png"
                                    style={{ padding: "5px", borderRadius: "20px", width: "50%" }}
                                />
                            </div>
                        </div>
                    </Col>

                    {/* <Col>
                    <Row  className="ratio ratio-16x9">
                        <Col>
                            <Image
                                src="image2/aburia.png"
                                style={{ padding: "5px", borderRadius: "20px" }}
                            />
                        </Col>
                    </Row>
                </Col> */}
                </Row>
            </div>
        </Container>
    );
}

export default Test;
