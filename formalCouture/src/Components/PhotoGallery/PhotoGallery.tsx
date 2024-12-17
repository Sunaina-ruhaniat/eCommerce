import React from 'react'
import { Button } from 'primereact/button'

const PhotoGallery: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#FBF9F5', height: '50rem' }}>
      {/* Main Container */}
      <div className="relative max-w-screen-lg mx-auto" style={{ marginLeft: '8rem' }}>
        {/* Large Image */}
        <div className="relative flex">
          {/* Big Image */}
          <img
            src="/assets/images/item10.png"
            alt="Elegant Gift"
            className="w-full h-auto rounded-lg shadow-xl"
          />

          {/* Overlaying Small Images */}
          <div
            className="transform -translate-y-1/2 flex flex-col"
            style={{ marginTop: '-46rem', marginLeft: '34rem' }}>
            {[1, 2, 3].map((item, index) => (
              <img
                key={index}
                src="/assets/images/item4.png"
                alt={`Small ${item}`}
                className="w-24 h-24 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
          {/* Content Section */}
          <div className="text-center" style={{ marginLeft: '44rem', marginTop: '5rem' }}>
            <h5
              style={{
                fontFamily: 'Lato',
                letterSpacing: '0.16em',
                marginLeft: '15rem',
                color: '#1B1D31',
                font: 'bold',
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
                marginLeft: '10rem',
              }}>
              ELEGANT GIFTS
            </h2>
            <p
              className="text-gray-600 mt-6 px-4 lg:px-40 leading-relaxed"
              style={{
                fontFamily: 'Lato',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: '26px',
                textAlign: 'center',
                marginLeft: '-5.5rem',
                marginRight: '12rem',
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula lectus, convallis
              sed justo a, eleifend semper diam. Fusce vitae ultricies augue.
            </p>

            {/* PrimeReact Button */}
            <Button
              label="Shop Now"
              style={{
                backgroundColor: '#050D52',
                borderColor: '#050D52',
                fontSize: '16px',
                width: '204px',
                height: '56px',
                color: '#F7F7F7',
                marginLeft: '15rem',
                borderRadius: '10px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery
