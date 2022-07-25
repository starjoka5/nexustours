import { Col, Row } from "react-bootstrap"

const Section = ({ body, parallax, styleName = '' }) => {
    const hasParallax = parallax ? 'parallax' : 'no-parallax'
    return (
        <section className={`${hasParallax} ${styleName}`}>
            <Row>
                <Col>
                    {body}
                </Col>
            </Row>
        </section>
    )
}
export default Section