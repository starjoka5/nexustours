import { Container, Nav, Navbar } from "react-bootstrap"
import { faTicket, faHotel, faBus, faFireAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Menu = () => {

    const Item = ({ icon, title }) => (
        <Nav.Link href="#home" >
            <div>{icon}</div>
            <div>{title}</div>
        </Nav.Link>
    )
    return (
        <Navbar bg="light" variant="light">
            <Container className="justify-content-start">
                <Item title={'Hoteles'} icon={<FontAwesomeIcon icon={faHotel} />}></Item>
                <Item title={'Actividades'} icon={<FontAwesomeIcon icon={faTicket} />}></Item>
                <Item title={'Traslados'} icon={<FontAwesomeIcon icon={faBus} />}></Item>
                <Item title={'Ofertas'} icon={<FontAwesomeIcon icon={faFireAlt} />}></Item>
            </Container>
        </Navbar>

    )
}
export default Menu