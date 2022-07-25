import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col';

const OffersItem = ({ image, title, description, price, stars }) => {
    return (
        <Col md={4} sm={6} xl={4}>
            <div className="offers-item">
                <div className="offers-item-wrapper">
                    <div className="cover-wrapper" style={{ backgroundImage: `url(${image})` }}>

                    </div>
                    <div className="offers-data">
                        <div>
                            {
                                Array(parseInt(stars)).fill(parseInt(stars)).map(() => {
                                    return (
                                        <FontAwesomeIcon icon={faStar} size={'xs'} color={'#f37021'}></FontAwesomeIcon>
                                    )
                                })
                            }
                        </div>
                        <div className="offers-title">{title}</div>
                        <div className="offers-description">{description}</div>
                        <div className="offers-price">
                            desde
                            <span className="mx-1">{price}</span>
                            / noche
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}
export default OffersItem