import "../global.css"
import "./styles.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faPhone, faBuilding, faClock } from '@fortawesome/free-solid-svg-icons';


export default function FooterComponent() {
    return (
        <footer className="container-background-yellow" id="contact">
            <div className="footer">
               <div className="icon-container">
                    <div className="icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="text-icon">
                        <p>contato@nectartec.com.br</p>
                    </div>
               </div>
               <div className="icon-container">
                    <div className="icon">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="text-icon">
                        <p>11 98508-7790</p>
                    </div>
               </div>
               <div className="icon-container">
                    <div className="icon">
                        <FontAwesomeIcon icon={faBuilding} />
                    </div>
                    <div className="text-icon">
                        <p>Piracicaba, São Paulo</p>
                    </div>
               </div>
               <div className="icon-container">
                    <div className="icon">
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className="text-icon">
                        <p>08:00 - 18:00</p>
                    </div>
               </div>
            </div>
        </footer>
    )
}