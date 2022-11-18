import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
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
                    marginTop: "20px", fontFamily: "Gamja Flower"
                }}
            >
                {" "}
                오사카 <b>HOT</b> 여행지
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
                        <Link to="/Osakasang" style={{textDecoration: 'none', color: 'black' }} >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image/osakasang.jpg"
                                }
                                width="300"
                                height="250"
                                alt="image"
                                data-reactied="266"
                                />
                                </Link>
                        </Col>
                        <Col>
                            
                            <Link to="/Osakasang" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                
                                    오사카 성{" "}
                                    
                                </h4>
                                
                                

                            <div>
                                주소: 일본 〒540-0002 Osaka, Chuo Ward, Osakajo,
                                １番１号
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                성내 박물관 오전 9시~오후 5시까지 엽니다.
                                입장료는 성인 600엔, 만 15세 이하 어린이는
                                무료입니다.{" "}
                            </div>
                            <div>일본에서는 수많은 영화의...</div>
                                </Link>
                                
                        </Col>

                        <Col>
                        <Link to="/Universal" style={{textDecoration: 'none', color: 'black' }} >
                            <img
                                src={
                                    process.env.PUBLIC_URL + "/image/studio.jpg"
                                }
                                width="300"
                                height="250"
                                data-reactied="266>"
                                alt="image"
                                />
                                </Link>
                        </Col>
                        <Col>
                        <Link to="/Universal" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                유니버셜 스튜디오 재팬
                            </h4>
                            <div>
                                주소: 2 Chome-1-33 Sakurajima, Konohana Ward,
                                Osaka, 554-0031 일본
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                유니버셜 스튜디오 재팬은 여러 유니버설 스튜디오
                                놀이공원중 하나로 일본 오사카시에 있으며, 2001년
                                3월 31일...
                                </div>
                                </Link>
                        </Col>
                    </Row>

                    <Row
                        style={{
                            marginBottom: "20px",
                        }}
                    >
                        <Col>
                        <Link to="/depojan" style={{textDecoration: 'none', color: 'black' }} >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image/depojan.jpg"
                                }
                                width="300"
                                height="250"
                                alt="image"
                                data-reactied="266>"
                                />
                                </Link>
                        </Col>
                        <Col>
                        <Link to="/depojan" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                덴포잔 대관람차
                            </h4>
                            <div>
                                주소: 1 Chome-1-10 Kaigandori, Minato
                                Ward, Osaka, 552-0022 일본
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                높이 112.5m, 직경 100m의 대규모 관람차로,
                                오사카는 물론, 간사이 전체 풍경을 한눈에 조망할
                                수 있는 인기 어트랙션이다...
                                </div>
                                </Link>
                        </Col>
                        <Col>
                        <Link to="/sitennoji" style={{textDecoration: 'none', color: 'black' }} >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image/sitennoji.jpg"
                                }
                                width="300"
                                height="250"
                                alt="image"
                                data-reactied="266>"
                                />
                                </Link>
                        </Col>
                        <Col>
                        <Link to="/sitennoji" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                시텐노지
                            </h4>
                            <div>
                                주소: 1-11-18 Shitennoji, Tennoji Ward, Osaka,
                                543-0051 일본
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                지금으로부터 1400년 이상 이전, 593년에 쇼토쿠
                                태자(聖徳太子)가 건립한 시텐노지. 일본 불교
                                최초의 관궁사로 건립 이유가 ‘일본 서기'...
                                </div>
                                </Link>
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
                        <Link to="/Umeda" style={{textDecoration: 'none', color: 'black' }} >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image/skybuilding.png"
                                }
                                width="300"
                                height="250"
                                alt="image"
                                data-reactied="266>"
                                />
                                </Link>
                        </Col>
                        <Col>
                        <Link to="/Umeda" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                우메다 스카이 빌딩
                            </h4>
                            <div>
                                주소: 일본 〒540-0002 Osaka, Chuo Ward, Osakajo,
                                １番１号
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                성내 박물관 오전 9시~오후 5시까지 엽니다.
                                입장료는 성인 600엔, 만 15세 이하 어린이는
                                무료입니다.{" "}
                            </div>
                            <div>
                                일본에서는 수많은 영화의 소설 속에서...
                                </div>
                                </Link>
                        </Col>

                        <Col>
                        <Link to="/jivri" style={{textDecoration: 'none', color: 'black' }} >
                            <img
                                src={process.env.PUBLIC_URL + "/image/img3.jpg"}
                                width="300"
                                height="250"
                                data-reactied="266>"
                                />
                                </Link>
                                alt="image"
                        </Col>
                        alt="image"
                        <Col>
                        <Link to="/jivri" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                지브리파크
                            </h4>
                            <div>
                                주소: 일본 Aichi, Nagakute, Ibaragabasama,
                                乙1533-1 内 Expo 2005 Aichi Commemorative Park
                                (Moricoro Park)
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                정문에는 하울의 움직이는 성과 같은 19세기 말
                                공상과학적 요소를 채용한 엘리베이터...
                                </div>
                                </Link>
                        </Col>
                    </Row>

                    <Row
                        style={{
                            marginTop: "20px",
                            marginBottom: "20px",
                        }}
                    >
                        <Col>
                        <Link to="place/doyokuni" style={{textDecoration: 'none', color: 'black' }} >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image/doyokuni.jpg"
                                }
                                width="300"
                                height="250"
                                alt="image"
                                data-reactied="266>"
                                />
                                </Link>
                        </Col>
                        <Col>
                        <Link to="/doyokuni" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                도요쿠니 신사
                            </h4>
                            <div>
                                주소: 530 Chayacho, Higashiyama Ward, Kyoto,
                                605-0931 일본
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                {" "}
                                긴조를 지나 조금 더 내려오면 절이 있습니다.
                                도요토미 히데요시를 모시는 절입니다. 오사카성을
                                세운 토요토미 히데요시, 그의 아들 히데요리, 그의
                                    동생 히데나가를...{" "}
                                    
                                </div>
                                </Link>
                        </Col>

                        <Col>
                        <Link to="/gaiukan" style={{textDecoration: 'none', color: 'black' }} >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image/gaiukan.jpg"
                                }
                                width="300"
                                height="250"
                                alt="image"
                                data-reactied="266>"
                                />
                                </Link>
                        </Col>
                        <Col>
                        <Link to="/gaiukan" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                가이유칸
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
                                가이유칸은 일본에서 가장 장관을 이루는 수족관
                                가운데 하나이며 독특한 전시 방법이 세계적으로
                                유명합니다. 가이유칸에서는 자연환경을 재현하여
                                환태평양...
                                </div>
                                </Link>
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
                        <Link to="/Aveno" style={{textDecoration: 'none', color: 'black' }} >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image/harukas.png"
                                }
                                width="300"
                                height="250"
                                alt="image"
                                data-reactied="266>"
                                />
                                </Link>
                        </Col>
                        <Col>
                        <Link to="/Aveno" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                아베노 하루카스
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
                                일본에서 가장 높은 빌딩으로서 탁 트인 전망대로
                                유명한 우메다 공중공원을 제치고 오사카의 새로운
                                랜드마크가 된 하루카스는 새로운 랜드마크가 된
                                하루카스 300...{" "}
                                </div>
                                </Link>
                        </Col>

                        <Col>
                        <Link to="/gumon" style={{textDecoration: 'none', color: 'black' }} >
                            <img
                                src={
                                    process.env.PUBLIC_URL + "/image/gumon.jpg"
                                }
                                width="300"
                                height="250"
                                data-reactied="266>"
                                alt="image"
                                />
                                </Link>
                        </Col>
                        <Col>
                        <Link to="/gumon" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                오사카 구로몬시장
                            </h4>
                            <div>
                                주소: 2-4-1, Nipponbashi, Chuo-ku, Osaka-shi,
                                Osaka (Moricoro Park)
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                ‘구로몬 시장’은 오사카시의 중심, 미나미의
                                닛폰바시 근처에 위치하고 있습니다. 약 580미터의
                                아케이드 상가에 수산물점, 청과점, 정육점, 제과점
                                등 약 170개의 ...
                                </div>
                                </Link>
                        </Col>
                    </Row>

                    <Row
                        style={{
                            marginTop: "20px",
                            marginBottom: "20px",
                        }}
                    >
                        <Col>
                        <Link to="/dendentaun" style={{textDecoration: 'none', color: 'black' }} >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image/dendentaun.jpg"
                                }
                                width="300"
                                height="250"
                                alt="image"
                                data-reactied="266>"
                                />
                                </Link>
                        </Col>
                        <Col>
                        <Link to="/dendentaun" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                덴덴타운
                            </h4>
                            <div>
                                주소: 일본 〒556-0005 Osaka, Naniwa Ward,
                                Nipponbashi, 3 Chome, 〜５丁目
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                {" "}
                                긴조를 지나 조금 더 내려오면 절이 있습니다.
                                도요토미 히데요시를 모시는 절입니다. 오사카성을
                                세운 토요토미 히데요시, 그의 아들 히데요리, 그의
                                동생 히데나가를...{" "}
                                </div>
                                </Link>
                        </Col>

                        <Col>
                        <Link to="/ssiyositai" style={{textDecoration: 'none', color: 'black' }} >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/image/ssiyositai.jpg"
                                }
                                width="300"
                                height="250"
                                alt="image"
                                data-reactied="266>"
                                />
                                </Link>
                        </Col>
                        <Col>
                        <Link to="/ssiyositai" style={{textDecoration: 'none', color: 'black' }} >
                            <h4
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                스미요시 타이샤
                            </h4>
                            <div>
                                주소: 2 Chome-9-89 Sumiyoshi, Sumiyoshi Ward,
                                Osaka, 558-0045 일본
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                {" "}
                                스미요시 타이샤에 모셔져 있는 스미요시 대신은
                                바다의 신, 고사의 신으로 옛날부터 외교 / 무역,
                                산업을 수호하는 신으로 추앙받고 있습니다. 옛날
                                책에 따르면 바닷속에서...
                                </div>
                                </Link>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default ResponsiveAutoExample;
