import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { getHotels } from "../services/hotels"
import DestinyItem from "./DestinyItem"

const Destinies = () => {
    const [destinies, setDestinies] = useState([])
    useEffect(() => {
        getHotels().then(({ hotels }) => {
            setDestinies(hotels.slice(0, 4))
        })
    }, [])

    return (
        <Container>
            <h1>Destinos Favoritos</h1>
            <div className="destinies-list">
                <Row>
                    {
                        destinies.map((destiny, index) => {
                            return (
                                <DestinyItem key={index} image={destiny.mainPhoto?.cloudUri}
                                    description={destiny.title} title={destiny.locationInfo?.city}
                                />
                            )
                        })
                    }
                </Row>
            </div>
        </Container>
    )
}
export default Destinies