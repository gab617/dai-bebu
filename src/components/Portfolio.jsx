/* eslint-disable react/prop-types */

export default function Portfolio({ corazones }) {
  return (
      <>

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
      </>
  )
}
