import { lazy, Suspense, useState } from 'react';
import './App.css'
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { urls_imgs } from "./assets/imgsUrls.json"
import NavBar from './components/Navbar/NavBar';
import Principal from './components/Principal/Principal';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { cantidadFotos } from './assets/modules';
import Gallery from './components/Gallery/Gallery';

const LazyPortfolio = lazy(() => import("./components/Portfolio"))


function App() {
  const { corazones  } = urls_imgs
  const [portafData] = useState (cantidadFotos)
  console.log(portafData)




  return (
    <div>
      <Router>
        <Routes>


          <Route
            path='/'
            element={
              <>
                <NavBar />
                <Principal
                  src_portda={"portada.jpeg"}
                />
                <About />
                <section id="portfolio">
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyPortfolio
                      urls={corazones}
                    />
                  </Suspense>
                </section>
                <Contact />
              </>
            }
          />

          <Route
            path='/gallery'
            element={
              <Gallery

              />
            }
          />

        </Routes>
      </Router>

    </div>
  )
}

export default App
