import ContentsCard from "./ContentsCard";
import Stack from "react-bootstrap/esm/Stack";
import CarouselFadeExample from "./CarouselFadeExample";
import Container from "react-bootstrap/Container";
import FestivalContainer from "./FestivalContainer";

function Home() {
    return (
        <Container fluid style={{padding:"0px"}}>
            {/* 카드 사용법과 캐러셀 사용법 익힘 */}
                {/* <Stack gap={3} className="col-md-12 mx-auto">
                    <CarouselFadeExample />
                    <ContentsCard />
                </Stack> */}
            <CarouselFadeExample />
            <FestivalContainer />
        </Container>
    );
}

export default Home;
