import React from 'react'
import './ShareWithUs.css'

const ShareWithUs: React.FC = () => {
  return (
    <section className="container mx-auto py-12 px-6" style={{ marginLeft: '6rem' }}>
      <h2 className="text-center text-2xl font-bold text-gray-900" style={{ marginLeft: '40rem' }}>
        SHARE WITH US #FORMALCOUTURE
      </h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="/assets/images/item9.png" alt="Mike" style={{ width: '100%' }} />
            <div className="hero-image">
              <div className="hero-text">
                <p>Green Tank Top</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="/assets/images/item3.png" alt="Mike" style={{ width: '100%' }} />
            <div className="hero-image">
              <div className="hero-text">
                <p>Green Tank Top</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="/assets/images/item2.png" alt="Mike" style={{ width: '100%' }} />
            <div className="hero-image">
              <div className="hero-text">
                <p>Green Tank Top</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="/assets/images/item9.png" alt="Mike" style={{ width: '100%' }} />
            <div className="hero-image">
              <div className="hero-text">
                <p>Green Tank Top</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="flex justify-center space-x-4 overflow-x-auto flex-wrap md:flex-nowrap"
        style={{ marginTop: '5rem' }}>
        <div className="text-center w-48 mb-4 relative group">
          <img
            src="/assets/images/item9.png"
            alt="White Skirt"
            className="w-full transition-transform duration-300 group-hover:scale-125"
            style={{ transition: 'transform 0.3s ease' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-semibold">Shop Now</p>
          </div>
        </div>
     
        <div
          className="text-center w-48 mb-4 relative group"
          style={{ marginTop: '-29.7rem', marginLeft: '28rem' }}>
          <img
            src="/assets/images/item1.png"
            alt="Green Tank Top"
            className="w-full transition-transform duration-300 group-hover:scale-125"
            style={{ transition: 'transform 0.3s ease' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-semibold">Shop Now</p>
          </div>
        </div>
        <div
          className="text-center w-48 mb-4 relative group"
          style={{ marginTop: '-29.7rem', marginLeft: '55rem' }}>
          <img
            src="/assets/images/item2.png"
            alt="White Dress"
            className="w-full transition-transform duration-300 group-hover:scale-125"
            style={{ transition: 'transform 0.3s ease' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-semibold">Shop Now</p>
          </div>
        </div>
        <div
          className="text-center w-48 mb-4 relative group"
          style={{ marginTop: '-29.7rem', marginLeft: '80rem' }}>
          <img
            src="/assets/images/item3.png"
            alt="Partywear Dress"
            className="w-full transition-transform duration-300 group-hover:scale-125"
            style={{ transition: 'transform 0.3s ease' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-semibold">Shop Now</p>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default ShareWithUs
