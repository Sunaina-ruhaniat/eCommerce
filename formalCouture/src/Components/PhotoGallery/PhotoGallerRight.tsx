import React from 'react'
import { Button } from 'primereact/button'

const PhotoGalleryRight: React.FC = () => {
  return (
    <div style={{ height: '50rem' }}>
      {/* Main Container */}
      <div
        className="relative max-w-screen-lg mx-auto flex"
        style={{ marginLeft: '8rem', alignItems: 'center' }}>
        <div className="relative flex-1">
          {/* Content Section */}
          <div className="text-left flex-1" style={{ marginLeft: '8rem', marginTop: '20rem' }}>
            <h5
              style={{
                fontFamily: 'Lato',
                letterSpacing: '0.16em',
                color: '#1B1D31',
                fontWeight: 'bold',
                fontSize: '16px',
              }}>
              LUXURY GIFTING
            </h5>
            <h2
              className="text-4xl font-bold text-gray-800 mt-3"
              style={{
                fontFamily: 'Georgia',
                fontSize: '32px',
                lineHeight: '48px',
                letterSpacing: '0.08em',
              }}>
              ELEGANT GIFTS
            </h2>
            <p
              className="text-gray-600 mt-6 leading-relaxed"
              style={{
                fontFamily: 'Lato',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: '26px',
                marginRight: '10rem',
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula lectus, convallis
              sed justo a, eleifend semper diam. Fusce vitae ultricies augue.
            </p>
            {/* Button */}
            <Button
              label="Shop Now"
              style={{
                backgroundColor: '#050D52',
                borderColor: '#050D52',
                fontSize: '16px',
                width: '204px',
                height: '56px',
                color: '#F7F7F7',
                marginTop: '1rem',
                borderRadius: '10px',
              }}
            />
          </div>

          {/* Large Image */}
          <div style={{ marginLeft: '60rem', marginTop: '-30rem' }}>
            {/* Big Image */}
            <img
              src="/assets/images/item5.png"
              alt="Elegant Gift"
              className="w-full h-auto rounded-lg shadow-xl"
            />

            {/* Overlaying Small Images */}
            {/* <div
              className="transform -translate-y-1/2 flex flex-col items-center"
              style={{ position: 'absolute', top: '120%', right: '40rem' }}>
              {[1, 2].map((item, index) => (
                <img
                  key={index}
                  src="/assets/images/item6.png"
                  alt={`Small ${item}`}
                  className="w-24 h-24 object-cover rounded-lg shadow-md mb-2"
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoGalleryRight
