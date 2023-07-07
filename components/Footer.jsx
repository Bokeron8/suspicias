import { AiOutlineWhatsApp, AiOutlineEnvironment } from "react-icons/ai"
import { FiAtSign } from "react-icons/fi"
const Footer = () => {
  return (
    <div className="footer-container">
        <div>
          <h3>NAVEGACÍON</h3>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="">Productos</a>
            </li>
            <li>
              <a href="">Contactos</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>CONTACTANOS</h3>
          <ul>
            <li><AiOutlineWhatsApp/> <a href="">3794268065</a> </li>
            <li><FiAtSign/> <a href="mailto:francozambrano88@gmail.com">francozambrano88@gmail.com</a></li>
            <li><AiOutlineEnvironment/> <a href="https://goo.gl/maps/mqfXxJiXJX9RgNmK6">Brazil 805</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer