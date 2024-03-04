import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <div id='nav-content'>
                <div><h1>Dai Leg</h1></div>

                <ul>
                    <li><a href="#Principal">Inicio</a></li>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#portfolio">Galería</a></li>
                    {/* <li><a href="#video">Video</a></li> */}
                    <li><a href="#contact">Contacto</a></li>
                    <li><Link to={"/gallery"}>Galeria new</Link></li>
                </ul>
            </div>

        </nav>
    )
}
