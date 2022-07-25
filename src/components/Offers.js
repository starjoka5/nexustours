import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { getHotels } from "../services/hotels"
import OffersItem from "./OffersItem"

const Offers = () => {
    const [hotels, setHotels] = useState([])

    useEffect(() => {
        getHotels().then(({ hotels }) => {
            setHotels(hotels.slice(0, 6))
        })
    }, [])
    return (
        <div>
            <Container>

                <h1> Ofertas de ultimo minuto</h1>
                <div className="offers-list">
                    <Row>
                        {
                            hotels.map((hotel, index) => (
                                <OffersItem key={index} image={hotel.mainPhoto?.cloudUri}
                                    stars={hotel.stars}
                                    title={hotel.name}
                                    description={`${hotel.locationInfo?.state}, ${hotel.locationInfo?.country}`}
                                    price={'$25,000'}
                                ></OffersItem>
                            ))
                        }
                    </Row>
                </div>
            </Container>
        </div>
    )
}
export default Offers