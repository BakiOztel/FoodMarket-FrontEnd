import { Container, Row } from "react-bootstrap";
import HomeHeaderLayout from "./HomeHeader.js";
import Footer from "./HomeFooter.js";
import HomeBody from "./HomeBody.js";
const HomePage = () => {


    return (

        <Container>

            <Row className="header">
                <HomeHeaderLayout page="Home" />
            </Row>
            <Row >
                <HomeBody />
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}
export default HomePage;