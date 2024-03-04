
import "./Gallery.css"
import { cantidadFotos } from "../../assets/modules"
import { Suspense, lazy, useState } from "react"
import { Link } from "react-router-dom"

const LazyPortfolio = lazy(() => import("../Portfolio"))


export default function Gallery() {
    const [actual, setActual] = useState([])

    console.log(actual)

    function handleChangeCategory(categ) {
        let arr = []
        if (categ == "casual") {
            for (let i = 1; i < cantidadFotos.casual + 1; i++) {
                console.log(i.toString())
                arr.push("gallery/casual/" + i.toString() + ".jpg");
            }
        }
        if (categ == "formal") {
            for (let i = 1; i < cantidadFotos.formal + 1; i++) {
                console.log(i.toString())
                arr.push("gallery/formal/" + i.toString() + ".jpg");
            }
        }
        if (categ == "fest") {
            for (let i = 1; i < cantidadFotos.fest + 1; i++) {
                console.log(i.toString())
                arr.push("gallery/fest/" + i.toString() + ".jpg");
            }
        }
        setActual(arr)
    }


    return (
        <>
            <div id="navGallery">

                <Link to={"/"}>Volver a Home</Link>
                <a href="#Gallery">Estilos</a>

            </div>
            <div id='Gallery'>
                <div className='card-portfolio fade-in'>
                    <a href="#sesion-selected" >
                        <div onClick={() => handleChangeCategory("casual")}>
                            <img src="gallery/casual/1.jpg" alt="" />
                        </div>
                    </a>
                    <h1>Casual</h1>
                </div>

                <div className='card-portfolio fade-in'>
                    <a href="#sesion-selected" className='card-portfolio fade-in' >
                        <div onClick={() => handleChangeCategory("fest")} >
                            <img src="gallery/fest/1.jpg" alt="" />
                        </div>

                    </a>
                    <h1>Fest</h1>

                </div>

                <div className='card-portfolio fade-in'>
                    <a href="#sesion-selected" className='card-portfolio fade-in' >
                        <div onClick={() => handleChangeCategory("formal")}>
                            <img src="gallery/formal/1.jpg" alt="" />
                        </div>

                    </a>
                    <h1>Formal</h1>

                </div>








            </div>

            <div id="sesion-selected">
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyPortfolio
                        urls={actual}
                    />
                </Suspense>
            </div>

        </>
    )
}
