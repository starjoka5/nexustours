import { Container } from "react-bootstrap"

import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Promo = () => {
    return (
        <>
            <div className="bg-overlay"></div>
            <Container>
                <h1 className="mb-4 text-white">
                    PROMOCION DE ULTIMO MINUTO
                </h1>
                <h2>Hard Rock Hotel Cancun</h2>
                <div className="stars">
                    {
                        (Array(5).fill(5)).map(() => {
                            return (
                                <FontAwesomeIcon icon={faStar} color={'#f37021'} size={'lg'} />
                            )
                        })
                    }
                </div>
                <div className="text-emphasis mb-2">
                    <em>
                        2 Adultos - 5 dias y 4 Noches
                    </em>
                </div>
                <div className="mb-4">
                    <strong>$2,900</strong> / persona
                </div>
                <div>
                    <button className="btn-promo">
                        <span className="mr-4"> Reservar</span>
                        <i >
                            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                        </i>
                    </button>
                </div>
            </Container>
        </>
    )
}
export default Promo