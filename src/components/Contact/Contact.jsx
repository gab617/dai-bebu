import { SocialIcon } from "react-social-icons";
import "./Contact.css"
export default function Contact() {
    return (
        <section id="contact">
            <div id="redes-sociales-footer">
                <div id='r-s-f-photo'>
                    <img src="/redes.jpeg" alt="" />
                </div>
                <div id="r-s-f-cont">
                    <h2>Sígueme en redes sociales</h2>
                    <ul>
                        <li>
                            <a target="_blank" href="https://www.instagram.com/daianaa.estefania/">
                                <SocialIcon network="instagram" />
                            </a>
                        </li>
                        <li>
                            <SocialIcon network="whatsapp" />
                        </li>
                    </ul>
                    <h1>Mail de contacto:</h1>
                    <h1 id='mail-txt'>ayaladaiana10@gmail.com</h1>
                </div>
            </div>
        </section>
    )
}
