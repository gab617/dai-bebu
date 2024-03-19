/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react"
import "./Gallery.css"
import { Link } from "react-router-dom"



export default function Gallery({ galeriaData }) {
    console.log(galeriaData)

    const [categActual, setCategActual] = useState("")
    const [urlsActuales, setUrlsActuales] = useState([])




    function actualizarCategoria(categ) {
        console.log(categ)
        setCategActual(categ)
    }

    useEffect(()=>{
        setUrlsActuales(galeriaData[categActual])
    },[urlsActuales,categActual])    


    return (
        <>
            <div id="navGallery">

                <Link to={"/"}>Volver a Inicio</Link>
                <a href="#Gallery">Estilos</a>

            </div>
            <div id='Gallery'>
                <div className='card-portfolio fade-in'>
                    <a href="#sesion-selected" >
                        <div onClick={() => actualizarCategoria("casual")}>
                            <img src="gallery/casual/1.jpg" alt="" />
                        </div>
                    </a>
                    <h1>Casual</h1>
                </div>

                <div className='card-portfolio fade-in'>
                    <a href="#sesion-selected" className='card-portfolio fade-in' >
                        <div onClick={() => actualizarCategoria("fest")}>
                            <img src="gallery/fest/8.jpg" alt="" />
                        </div>

                    </a>
                    <h1>Fest</h1>

                </div>

                <div className='card-portfolio fade-in'>
                    <a href="#sesion-selected" className='card-portfolio fade-in' >
                        <div onClick={() => actualizarCategoria("formal")}>
                            <img src="gallery/formal/1.jpg" alt="" />
                        </div>

                    </a>
                    <h1>Formal</h1>
                </div>
            </div>

            <div id="GaleriaComponente">

                {
                    urlsActuales && urlsActuales.map(enlace => {
                        return (
                            <>
                                <div >
                                    <img src={`https://dgexpress.onrender.com${enlace}`} alt="" />
                                </div>
                            </>
                        )
                    })
                }

            </div>


            {/*             <div id="sesion-selected">
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyPortfolio
                        urls={actual}
                    />
                </Suspense>
            </div> */}

        </>
    )
}
