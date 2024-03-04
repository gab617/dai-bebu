/* eslint-disable react/prop-types */

export default function Portfolio({ urls }) {
  return (
      <>

        <div id='gallery-video'>

        </div>

        <div id='gallery-content'>
          <h1>Galería</h1>

          <div id='gallery'>
            {
              urls && urls.map((pic, index) => (
                <div key={index} className='image fade-in'>
                  <img src={pic} alt="" />
                </div>
              ))
            }
          </div>
        </div>
      </>
  )
}
