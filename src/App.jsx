import './App.css'
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

import { SocialIcon } from 'react-social-icons'
import { urls_imgs } from "./assets/imgsUrls.json"



function App() {
  const { corazones } = urls_imgs

  console.log(corazones)

  return (
    <div>
      {/* Navbar */}
      <nav>
        <div id='nav-content'>
          <div><h1>Dai Leg</h1></div>

          <ul>
            <li><a href="#Principal">Inicio</a></li>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#portfolio">Galería</a></li>
            {/* <li><a href="#video">Video</a></li> */}
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

      </nav>

      <section id="Principal">
        <div id='princ-left'>
          <div id='p-l-text'>
            <h2>Hola, soy</h2>
            <h1>Daiana Estefi</h1>
            <p>Artista/ Modelo/ Profesional de la danza</p>
          </div>
          <div id='redes-principal'>
            <ul>
              <li>
                <SocialIcon network="instagram" />
              </li>
              <li>
                <SocialIcon network="whatsapp" />
              </li>
            </ul>
          </div>


        </div>
        <div id='princ-right'>
          <img src="dai-portada.png" alt="" />
        </div>
      </section>

      {/* Sección Principal */}
      <section id="about">
        <div id='about-content'>
          <h1>Sobre mí</h1>
          <p>¡Bienvenid@ a mi portfolio! Soy Daiana Estefanía, una modelo apasionada por la moda, el arte, el amor y los horizontes a descubrir, siempre con la mejor vibra y disfrutando cada paso. En mí destaco la dedicación por el arte en general, siempre buscando involucrarme cada vez más en el mundo de la moda.</p>
          <div id='about-history'>
            <h1>Mi historia</h1>
            <p>Soy una modelo con varios años de experiencia en la industria. He trabajado en desfiles de moda, sesiones fotográficas y eventos destacados. También me encuentro capacitando en clases de varios tipos de danza como zumba, pole dance y twerk. Mi objetivo es seguir aprendiendo nuevos ritmos e ir puliendo cada vez más mis clases.</p>
          </div>
          <button>CV online</button>
        </div>

      </section>

      {/* Sección de Fotografía */}
      <section id="portfolio">

        <div id='gallery-video'>

        </div>

        <div id='gallery-content'>
          <h1>Galería</h1>

          <div id='gallery'>
            {
              corazones && corazones.map((pic, index) => (
                <div key={index} className='image'>
                  <img src={pic} alt="" />
                </div>
              ))
            }
          </div>
        </div>

      </section>

      {/* Formulario de Contacto */}
      <section id="contact">
        <div id="redes-sociales-footer">
          <h2>Sígueme en redes sociales</h2>
          <ul>
            <li>
              <SocialIcon network="instagram" />
            </li>
            <li>
              <SocialIcon network="whatsapp" />
            </li>
          </ul>
          <h1>Mail de contacto: 123@gmail.com </h1>
        </div>
      </section>
    </div>
  )
}

export default App
