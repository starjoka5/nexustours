import { Col } from "react-bootstrap"

const DestinyItem = ({ image, title, description }) => {
    return (
        <Col>
            <div className="offers-item">
                <div className="offers-item-wrapper">
                    <div className="cover-wrapper" style={{ backgroundImage: `url(${image})` }}>

                    </div>
                    <div className="offers-data">
                        <div className="offers-title">{title}</div>
                        <div className="offers-description">{description}</div>
                    </div>
                </div>
            </div>
        </Col>
    )
}
export default DestinyItem