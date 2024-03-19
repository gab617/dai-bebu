import { lazy, Suspense, useEffect, useState } from 'react';
import './App.css'
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { urls_imgs } from "./assets/imgsUrls.json"
import NavBar from './components/Navbar/NavBar';
import Principal from './components/Principal/Principal';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';

const LazyPortfolio = lazy(() => import("./components/Portfolio"))

const servidor = "https://dgexpress.onrender.com"

function App() {
  const { corazones } = urls_imgs
  const [galeriaData, setGaleriaData] = useState({})
  const [loadGaleria, setLoadGaleria] = useState(false)


  useEffect(() => {
    setLoadGaleria(true)
    fetch("https://dgexpress.onrender.com/archivos-galeria")
      .then(response => response.json())
      .then(json => {
        setGaleriaData(json)
        setLoadGaleria(false)
      })
  }, [])


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
                galeriaData={galeriaData}
                loading = {loadGaleria}
              />
            }
          />

        </Routes>
      </Router>

    </div>
  )
}

export default App
