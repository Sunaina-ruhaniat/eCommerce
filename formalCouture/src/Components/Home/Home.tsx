import React from 'react'
import Header from '../Header/Header'
import PhotoGallery from '../PhotoGallery/PhotoGallery'
import LimitedEdition from '../LimitedEdition/LimitedEdition'
import CarouselComponent from '../Carousel/Carousel'
import ShareWithUs from '../ShareWithUs/ShareWithUs'
import Footer from '../Footer/Footer'
import PhotoGalleryRight from '../PhotoGallery/PhotoGallerRight'
import ImageSlideShow from '../SlideShow/ImageSlideShow'

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <ImageSlideShow />
      </div>
      <main className="bg-gray-100" style={{ marginTop: '5rem' }}>
        <PhotoGallery />
        <PhotoGalleryRight />
        <div style={{ marginTop: '-10rem' }}>
          <CarouselComponent />
        </div>
        <div style={{ marginTop: '12rem' }}>
          <ShareWithUs />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
