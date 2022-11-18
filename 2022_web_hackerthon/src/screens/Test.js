import { Container, Row, Col } from "react-bootstrap";

function Test() {
    return (
        <main>
            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div
                        className="bg-light shadow-sm mx-auto"
                        style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}
                    ></div>
                </div>

                <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div
                        className="bg-light shadow-sm mx-auto"
                        style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}
                    ></div>
                </div>
            </div>

            <Container fluid style={{ height: "582px", backgroundColor: "black" }}>
                {/* <Container>
                    <div className="ratio ratio-16x9" style={{width:"500px", height:"400px",}}>
                            <iframe
                                src="https://www.youtube.com/embed/O1sZPY1_pJI"
                                title="【일본 4K 랜선 산책】 일본 오사카 난바 도톤보리 걸어보기🚶🏻 l 오랜만에 오사카 여행 온 기분 내기"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                style={{display:"block"}}
                            />

                            <img src="image2/aburia.png"  style={{display:'block'}}/>
                    </div>
                </Container> */}
                {/* <Row>
                    <Col className="col-md-6" lg={6}>
                        <div className="ratio ratio-16x9" style={{width:"500px", height:"400px"}}>
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
                            <Col className="col-lg-6 ratio ratio-16x9" style={{ width: "335px", height:"220px" }}>
                                <img src="image2/aburia.png" style={{padding:"10px"}}/>
                            </Col>

                            <Col className="col-lg-6 ratio ratio-16x9" style={{ width: "335px", height:"220px" }}>
                                <img src="image2/aburia.png" style={{padding:"10px"}} />
                            </Col>
                        </Row>

                        <Row>
                            <Col className="col-lg-6 ratio ratio-16x9" style={{ width: "335px", height:"220px" }}>
                                <img src="image2/aburia.png" style={{padding:"10px"}} />
                            </Col>

                            <Col className="col-lg-6 ratio ratio-16x9" style={{ width: "335px", height:"220px" }}>
                                <img src="image2/aburia.png" style={{padding:"10px"}} />
                            </Col>
                        </Row>
                    </Col>
                </Row> */}

                <Container>
                    <Row>
                        <Col className="col-lg-4 col-md-4 col-sm-4">
                            <div
                                className="ratio ratio-16x9"
                                style={{ width: "500px", height: "400px"}}
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

                        <Col className="col-lg-8 col-md-8 col-sm-8">
                        <Row>
                            <Col className="col-lg-6 ratio ratio-16x9" style={{ width: "335px", height:"220px" }}>
                                <img src="image2/aburia.png" style={{padding:"10px"}}/>
                            </Col>

                            <Col className="col-lg-6 ratio ratio-16x9" style={{ width: "335px", height:"220px" }}>
                                <img src="image2/aburia.png" style={{padding:"10px"}} />
                            </Col>
                        </Row>

                        <Row>
                            <Col className="col-lg-6 ratio ratio-16x9" style={{ width: "335px", height:"220px" }}>
                                <img src="image2/aburia.png" style={{padding:"10px"}} />
                            </Col>

                            <Col className="col-lg-6 ratio ratio-16x9" style={{ width: "335px", height:"220px" }}>
                                <img src="image2/aburia.png" style={{padding:"10px"}} />
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </main>
    );
}

export default Test;
