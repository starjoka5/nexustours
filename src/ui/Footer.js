import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
    return (
        <footer id="main-footer">
            <Container>
                <Row>
                    <Col>
                        <a href="/">
                            <img src="/media/logo.png" alt='logo' />
                        </a>
                        <p>Ofrecemos servicios de reservación de hoteles, actividades, tours, traslados, paquetes de viaje y mucho más!</p>
                    </Col>
                    <Col>
                        <h4>Ofertas de Hoteles</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="/Hoteles/Cancún">
                                    Hoteles en Cancún
                                </a>
                            </li>
                            <li>
                                <a href="/Hoteles/Los-Cabos">
                                    Hoteles en Los Cabos
                                </a>
                            </li>
                            <li>
                                <a href="/Hoteles/Acapulco">
                                    Hoteles en Acapulco
                                </a>
                            </li>
                            <li>
                                <a href="/Hoteles/Mazatlán">
                                    Hoteles en Mazatlán
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col className='contact'>
                        <h4>Asistencia personalizada</h4>
                        <h4 class="text-accent">55 5555 5555</h4>
                        <h4><a href="/" class="text-accent">soporte@nexustours.com</a></h4>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer