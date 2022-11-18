import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function ResponsiveAutoExample() {
    return (
        <Container fluid
      
        style={{backgroundImage:"url(image2/realback.jpg)",
        backgroundRepeat : "no-repeat",
        backgroundSize: "cover",
        marginLeft: "0px",
        marginRight: "0px",
            paddingLeft: "100px",
            paddingRight:"100px"
        
    }}
        >
            
            <h3
                style={{
                    marginTop: "20px",
                }}
            >
                오사카 맛도리
            </h3>
            <Carousel>
                <Carousel.Item>
                    <Row
                        style={{
                            marginTop: "20px",
                            marginBottom: "20px",
                        }}
                    >
                        <Col>
                        <Link to="/Motomura" style={{textDecoration: 'none', color: 'black' }} >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image/gyukatsu.jpg"
                                }
                                width="300"
                                height="250"
                                alt="gyukatsu"
                                data-reactied="266"
                                />
                                </Link>
                        </Col>
                        <Col>
                        <Link to="/Motomura" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                모토무라 난마점
                            </h4>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                주소: 일본 〒542-0076 Osaka, Chuo Ward, Nanba, 3
                                Chome-3-1 地下一階 スガタビル
                            </div>
                            <div>영업시간: 오전 11:00 - 오후 11:00</div>
                            <div>라스트 오더: 22:00</div>
                            <div>가격: 규카츠 130g 1400엔</div>
                            <div>규카츠 130g 추가는 800엔 </div>
                                <div>(현금결제만 가능)</div>
                            </Link>
                        </Col>

                        <Col>
                            <img
                                src={
                                    process.env.PUBLIC_URL + "/image/ramen.png"
                                }
                                width="300"
                                height="250"
                                alt="ramen"
                                data-reactied="266>"
                            />
                        </Col>
                        <Col>
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                킨류라멘
                            </h4>
                            <div>
                                주소: 1 Chome-7-26 Dotonbori, Chuo Ward, Osaka,
                                542-0077 일본
                            </div>
                            <div>영업시간 :24시간</div>
                            <div>메뉴: 2가지 600엔 / 900엔</div>
                            <div>
                                600엔 메뉴에 비해서 900엔 라멘에는 차슈가 더
                                들어가 있습니다.
                            </div>
                            <div>
                                매장소개 킨류라멘, 금룡라면은 도톤보리
                                ...
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
                                    "/image2/ichran.jpg"
                                }
                                width="300"
                                height="250"
                                alt="ichran"
                                data-reactied="266>"
                            />
                        </Col>
                        <Col>
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                이치란 라멘
                            </h4>
                            <div>
                                주소: 5 Chome-3-2 Nakasu, Hakata Ward, Fukuoka,
                                810-0801 일본
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                라멘: 890엔, 삶은 달걀 반숙 130엔
                            </div>
                            <div> 24시간 영업</div>
                            <div>
                                설명: 이치란 라멘의 메뉴는 돈코츠 라멘 하나
                                뿐입니다. 오랜시간 고아서 만든 육수는 한국인
                                입맛에도 잘 맞아 인기가 많습니다...
                            </div>
                        </Col>
                        <Col>
                            {" "}
                            <img
                                src={
                                    process.env.PUBLIC_URL + "/image2/jibo.jpg"
                                }
                                width="300"
                                height="250"
                                alt="jibo"
                                data-reactied="266>"
                            />
                        </Col>
                        <Col>
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                치보 오코노미야끼 도톤보리점
                            </h4>
                            <div>
                                주소: 일본 〒542-0071 Osaka, Chuo Ward,
                                Dotonbori, 1 Chome-5-5 1~6F 道頓堀ビル
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                오코노미야끼: 1,400엔
                            </div>
                            <div>영업시간: 월-토 11:00~1:00 일 11:00~24:00</div>
                            <div>오사카에서 오코노미야끼로 가장... </div>
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
                                    "/image2/moeyomenske.png"
                                }
                                width="300"
                                height="250"
                                alt="moeyomenske"
                                data-reactied="266>"
                            />
                        </Col>
                        <Col>
                        <Link to="/Moeyomenske" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                모에요멘스케
                            </h4>
                            <div>
                                주소: 5 Chome-12-21 Fukushima, Fukushima Ward,
                                Osaka, 553-0003 일본
                                </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                가격: 950~1,200엔{" "}
                            </div>
                            <div>
                                영업 시간: 11:00 ~ 15:30 (화요일 휴무, 일요일만
                                16시 마감)
                            </div>
                            <div>
                                오사카 현지인들을 줄 세우는 모에요멘스케
                                </div>
                            </Link>
                        </Col>

                        <Col>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image2/torihachi.png"
                                }
                                width="300"
                                height="250"
                                alt="torihachi"
                                data-reactied="266>"
                            />
                        </Col>
                        <Col>
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                토리하치
                            </h4>
                            <div>
                                주소: 5 Chome-12-33 Hoshin, Higashiyodogawa
                                Ward, Osaka, 533-0014 일본
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                가격: 200엔~600엔
                            </div>
                            <div>영업시간: 17:00~1:00(목요일 휴무)</div>
                            <div>
                                때로 미식을 위해 먼 길을 떠나는 여행도 필요한
                                법. 오사카에서는 닭 전문점 ...{" "}
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
                                    "/image2/yahmakarayah.png"
                                }
                                width="300"
                                height="250"
                                alt="yahmakarayah"
                                data-reactied="266>"
                            />
                        </Col>
                        <Col>
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                야마카라야
                            </h4>
                            <div>
                                주소: 3 Chome-2-4 Bishoen, Abeno Ward, Osaka,
                                545-0003 일본
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                {" "}
                            </div>
                            <div>가격: </div>
                            <div>
                                영업시간: 11:00~14:00, 17:00~21:00(수요일 휴무)
                            </div>
                            <div>
                                도쿄를 주 무대로 하는 고로상이 오사카에 떴다.
                                고독한 미식가 시리즈에서 흔하지...{" "}
                            </div>
                        </Col>

                        <Col>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image2/nakatani.png"
                                }
                                width="300"
                                height="250"
                                alt="nakatani"
                                data-reactied="266>"
                            />
                        </Col>
                        <Col>
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                나카타니테이
                            </h4>
                            <div>
                                주소: 1 Chome-1-10 Kaigandori, Minato Ward,
                                Osaka, 552-0022 일본
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                가격: 500엔~700엔
                            </div>
                            <div>영업시간: </div>
                            <div>
                                타베로그 오사카 스위트 부분에서 랭킹 5위(평점
                                3.79)인 나카타니테이는 초콜릿을 잘 다루는 가게로
                                유명합니다...{" "}
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
                        <Link to="/Heijoen" style={{textDecoration: 'none', color: 'black' }} >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image2/heivoen.png"
                                }
                                width="300"
                                height="250"
                                alt="heivoen"
                                data-reactied="266>"
                                />
                                </Link>
                        </Col>
                        <Col>
                        <Link to="/Heijoen" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                헤이죠엔
                            </h4>
                            <div>
                                주소: 1 Chome-1-43 Abenosuji, Abeno Ward, Osaka,
                                545-6016 일본
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                가격: 1,500~5,300엔
                            </div>
                            <div>영업시간: 11:30~14:00, 15:00~21:00</div>
                            <div>
                                오코노미야끼와 타코야끼, 라멘 등 오사카에서
                                맛봐야 할 음식은 다양한데, 야끼니쿠도 빠트릴 수
                                없습니다. 직접 고기를 ...
                                </div>
                                </Link>
                        </Col>

                        <Col>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image2/hukutaro.png"
                                }
                                width="300"
                                height="250"
                                alt="hukutaro"
                                data-reactied="266>"
                            />
                        </Col>
                        <Col>
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                후쿠타로
                            </h4>
                            <div>
                                주소: 2 Chome-3-17 Sennichimae, Chuo Ward,
                                Osaka, 542-0074 일본
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                야끼소바: 720~1080엔
                            </div>
                            <div>오코노미야끼: 860~1880엔</div>
                            <div>
                                영업시간: 17:00~24:00(평일) 12:00~24:00(주말)
                            </div>
                            <div>
                                오사카 난바근처 오코노미야키와 야끼소바...
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
                                    "/image/osakasang.jpg"
                                }
                                width="300"
                                height="250"
                                alt="osakasang"
                                data-reactied="266>"
                            />
                        </Col>
                        <Col>
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                아부리야
                            </h4>
                            <div>
                                주소: 일본 〒542-0076 Osaka, Chuo Ward, Nanba, 3
                                Chome-4-16 ECS第32ビル 4F
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                {" "}
                                가격: 무제한 리필 코스 1인 4,082엔
                            </div>
                            <div>
                                영업시간: 평일 17:00~23:00 주말 11:00~23:00
                            </div>
                            <div>아부리야는 체인점입니다. 하지만... </div>
                        </Col>

                        <Col>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image2/harukoma.jpg"
                                }
                                width="300"
                                height="250"
                                alt="harukoma"
                                data-reactied="266>"
                            />
                        </Col>
                        <Col>
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                하루코마
                            </h4>
                            <div>
                                주소: 5 Chome-5-2 Tenjinbashi, Kita Ward, Osaka,
                                530-0041 일본
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                {" "}
                                달걀초밥 100엔 / 다랑어 200엔 / 장어 300엔 등
                            </div>
                            <div>영업시간: 11:00~21:30(화요일 휴무)</div>
                            <div>
                                도톰한 초밥과 뛰어난 맛 거기에 엄청나게 ...
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default ResponsiveAutoExample;
