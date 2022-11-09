import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

function ResponsiveAutoExample() {
  return (
    <Container>
      <h3 style={{
          marginTop: "20px"
        }}
        > 오사카 <b >HOT</b> 호텔 추천</h3>
        <Carousel variant="Closest Web Safe">
                    <Carousel.Item>
                        <Row
                            style={{
                                marginTop: "20px",
                                marginBottom: "20px",
                            }}
                        >
                            <Col>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image/arthotel.jpg"
                                    }
                                    width="300"
                                    height="250"
                                    data-reactied="266"
                                />
                            </Col>
                            <Col>
                                <h4
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    아트 호텔 오사카 베이 타워
                                </h4>
                                <div>주소: Benten, Minato-ku, 오사카, 일본</div>
                                <div
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    체크인: 15시부터
                                </div>
                                <div>체크아웃: 11시까지</div>
                                <div>
                                    이 호텔은 벤텐초 역과 바로 연결되어 있어서
                                    대중교통을 이용하여 주변을 둘러 보기에
                                    좋습니다. 오사카 타코야키 박물관과 오사카
                                    가이유칸 수족관, 유니버설 스튜디오 재팬이
                                    열차로 약 15분 거리에...
                                </div>
                            </Col>

                            <Col>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image/newotany.jpg"
                                    }
                                    width="300"
                                    height="250"
                                    data-reactied="266>"
                                />
                            </Col>
                            <Col>
                                <h4
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    오사카 뉴오타니 호텔
                                </h4>
                                <div>
                                    주소: 1 Chome-4-1 Shiromi, Chuo Ward, Osaka,
                                    540-8578 일본
                                </div>
                                <div
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    체크인: 14시부터
                                </div>
                                <div>체크아웃: 12시까지</div>
                                <div>
                                    센트럴 도쿄에 위치하여 도쿄 전망을 자랑하는
                                    이 현대적인 호텔은 아카사카에서 도보로 10분
                                    거리에 있고, 일본 국립극장, 국립국회도서관
                                    등이 도보로 20분...
                                </div>
                            </Col>
                        </Row>

                        <Row
                            style={{
                                marginBottom: "20px",
                            }}
                        >
                            <Col>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image/yusu.jpg"
                                    }
                                    width="300"
                                    height="250"
                                    data-reactied="266>"
                                />
                            </Col>
                            <Col>
                                <h4
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    호텔 유-슈
                                </h4>
                                <div>
                                    주소: 2 Chome-8-19 Shimanouchi, Chuo Ward,
                                    Osaka, 542-0082 일본
                                </div>
                                <div
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    체크인: 15시부터
                                </div>
                                <div>체크아웃: 11시까지</div>
                                <div>
                                    호텔 유슈는 일본의 전통적인 분위기를 느낄 수
                                    있고, 객실까지 깨끗해서 인기가 많은
                                    곳입니다. 유카타도 제공되며, 푹신한 침구에서
                                    쉴 수 있어서 힐링을...
                                </div>
                            </Col>
                            <Col>
                                {" "}
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image/ganeyoshi.jpg"
                                    }
                                    width="300"
                                    height="250"
                                    data-reactied="266>"
                                />
                            </Col>
                            <Col>
                                <h4
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    가네요시 료칸
                                </h4>
                                <div>
                                    주소: 3-12 Souemoncho, Chuo Ward, Osaka,
                                    542-0084 일본
                                </div>
                                <div
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    체크인: 15시부터
                                </div>
                                <div>체크아웃: 10시까지</div>
                                <div>
                                    오사카 중심에 있어 여행하기도 좋은데 깨끗한
                                    일본 전통 다다미 룸에서 편히 쉴 수 있어
                                    인기가 많은 곳입니다. 객실 내에도 욕조가
                                    있지만, 목욕탕이 따로...{" "}
                                </div>
                            </Col>
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
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image/yahmatoyah.jpg"
                                    }
                                    width="300"
                                    height="250"
                                    data-reactied="266>"
                                />
                            </Col>
                            <Col>
                                <h4
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    야마토야 혼텐 료칸
                                </h4>
                                <div>
                                    주소: 2 Chome-17-4 島の内 Chuo Ward, Osaka,
                                    542-0082 일본
                                </div>
                                <div
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    체크인: 15시부터{" "}
                                </div>
                                <div>체크아웃: 10시까지</div>
                                <div>
                                    도톤보리 바로 옆에 있기 때문에 리버뷰를 즐길
                                    수 있는 룸이 있어서 감성이 중요하신 분들에게
                                    추천합니다. 그리고...{" "}
                                </div>
                            </Col>

                            <Col>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image/sinsibasi.jpg"
                                    }
                                    width="300"
                                    height="250"
                                    data-reactied="266>"
                                />
                            </Col>
                            <Col>
                                <h4
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    신시바시 그랜드 호텔
                                </h4>
                                <div>
                                    주소: 2-4-4, Higashishinsaibashi,
                                    신사이바시, 오사카, 일본, 542 0083
                                </div>
                                <div
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    체크인: 15시부터
                                </div>
                                <div>체크아웃: 11:00까지</div>
                                <div>
                                    신시바시 그랜드 호텔 오사카 호텔은 난바
                                    햇치, 오사카 난바 관광객 센터,
                                    아메리카무라에서 걸어가실 수 있는 거리에
                                    있습니다. 그 밖에도, 난바 역, 난바 ...
                                </div>
                            </Col>
                        </Row>

                        <Row
                            style={{
                                marginTop: "20px",
                                marginBottom: "20px",
                            }}
                        >
                            <Col>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image/nanbaoriental.jpg"
                                    }
                                    width="300"
                                    height="250"
                                    data-reactied="266>"
                                />
                            </Col>
                            <Col>
                                <h4
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    난바 오리엔탈 호텔
                                </h4>
                                <div>
                                    주소: 2-8-17, Sennichimae, Chuo-ku, 난바,
                                    오사카, 일본, 542-0074
                                </div>
                                <div
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    {" "}
                                    체크인: 15시부터
                                </div>
                                <div>체크아웃: 11:00까지</div>
                                <div>
                                    이 호텔은 난바 지하철역에서 도보로 5분
                                    거리에 있어 오사카를 편리하게 둘러 보실 수
                                    있습니다. 간사이 국제공항까지는 열차로
                                    45분이 걸립니다. 주변의...{" "}
                                </div>
                            </Col>

                            <Col>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image/rootshostel.jpg"
                                    }
                                    width="300"
                                    height="250"
                                    data-reactied="266>"
                                />
                            </Col>
                            <Col>
                                <h4
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    루츠 호스텔 오사카
                                </h4>
                                <div>
                                    주소: 1-9-11, Itachibori, Nhishi-ku, Osaka,
                                    Osaka, 550-0012
                                </div>
                                <div
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    체크인: 15시부터
                                </div>
                                <div>체크아웃: 11:00까지</div>
                                <div>
                                    루츠 호스텔에서 차로 10분 이내 거리에는
                                    교세라 돔 오사카, 오사카 가이유칸 수족관
                                    등이 있습니다. 이곳에는 바/라운지가 있어 한
                                    잔의 여유를 즐기실 수...
                                </div>
                            </Col>
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
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image/ibis.jpg"
                                    }
                                    width="300"
                                    height="250"
                                    data-reactied="266>"
                                />
                            </Col>
                            <Col>
                                <h4
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    이비스 스타일스 오사카
                                </h4>
                                <div>
                                    주소: 2-13 Souemoncho, Chuo Ward, Osaka,
                                    542-0084 일본
                                </div>
                                <div
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    체크인: 14시부터
                                </div>
                                <div>체크아웃: 11:00까지</div>
                                <div>
                                    이비스 스타일스 오사카는 3성급 친환경 호텔,
                                    신사이바시에 위치해 있습니다.
                                    식료품점/편의점, 드라이클리닝/세탁 서비스,
                                    컨퍼런스 공간 외에도 수많은...
                                </div>
                            </Col>

                            <Col>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image2/ibisosaka.jpg"
                                    }
                                    width="300"
                                    height="250"
                                    data-reactied="266>"
                                />
                            </Col>
                            <Col>
                                <h4
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    이비스 오사카 우메다
                                </h4>
                                <div>
                                    주소: 일본 〒530-0018 Osaka, Kita Ward,
                                    Komatsubaracho, 1 Chome-5 Banchi
                                </div>
                                <div
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    체크인: 14시부터
                                </div>
                                <div>체크아웃: 11시까지</div>
                                <div>
                                    이비스 오사카 우메다는 JR 도카이도 본선,
                                    오사카 순환선 등이 지나는 오사카역 남쪽
                                    출구에서 걸어서 약 7분, 간사이 국제공항에서
                                    차로 약 1시간 거리에...
                                </div>
                            </Col>
                        </Row>

                        <Row
                            style={{
                                marginTop: "20px",
                                marginBottom: "20px",
                            }}
                        >
                            <Col>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image2/universalport.jpg"
                                    }
                                    width="300"
                                    height="250"
                                    data-reactied="266>"
                                />
                            </Col>
                            <Col>
                                <h4
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    호텔 유니버셜 포트비타
                                </h4>
                                <div>
                                    주소: 6, Shimaya, Konohana-ku, 오사카 베이
                                    에어리어, 오사카, 일본
                                </div>
                                <div
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    {" "}
                                    체크인: 15시부터
                                </div>
                                <div>체크아웃: 11시까지</div>
                                <div>
                                    호텔 유니버설 포트 비타에서 아사시오바시
                                    스테이션까지 도보로 20분 거리에 있어
                                    오사카에 방문하실 때 머무시기 좋은
                                    숙소입니다. 조금만 걸어가시면...
                                </div>
                            </Col>

                            <Col>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image2/mocci.jpg"
                                    }
                                    width="300"
                                    height="250"
                                    data-reactied="266>"
                                />
                            </Col>
                            <Col>
                                <h4
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    목시 오사카 혼마치 바이 메리어트
                                </h4>
                                <div>
                                    주소: 2 Chome-2-9 Kawaramachi, Chuo Ward,
                                    Osaka, 541-0048 일본
                                </div>
                                <div
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    {" "}
                                    체크인: 15시부터
                                </div>
                                <div>체크아웃: 12시까지</div>
                                <div>
                                    혼마치 역에서 도보 5분 거리에 있는 이 목시
                                    오사카 혼마치 바이 메리어트는 오사카 지역을
                                    방문하시는 분들이...
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>

    </Container>
  );
}

export default ResponsiveAutoExample;