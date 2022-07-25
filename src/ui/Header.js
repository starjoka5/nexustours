import { Col, Container, Row } from "react-bootstrap"

const Header = () => {
    return (
        <div className="header">
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <img src={'/media/logo.png'} alt='logo' />
                    </Col>
                    <Col className="justify-start-end" xs={6} md={4}>
                        <div >
                            <span>USD $</span>
                            <span>ESP</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Header