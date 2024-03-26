import { SocialIcon } from 'react-social-icons'

// eslint-disable-next-line react/prop-types
export default function Principal({src_portda}) {
    return (
        <section id="Principal">
            <div id='princ-left'>
                <div id='p-l-text'>
                    <h2>Hola, soy</h2>
                    <h1>Daiana Estefania</h1>
                    <p>Artista & Modelo</p>
                </div>
                <div id='redes-principal'>
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
                </div>


            </div>
            <div id='princ-right'>
                <img src={src_portda} alt="" />
            </div>
        </section>
    )
}
