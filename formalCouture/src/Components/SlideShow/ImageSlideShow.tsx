import React, { useState, useEffect } from 'react'
import './ImageSlideshow.css' // Import the styles

const ImageSlideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const images = [
    { src: '/assets/images/item6.png', caption: 'Caption Text' },
    { src: '/assets/images/item1.png', caption: 'Caption Two' },
    { src: '/assets/images/item2.png', caption: 'Caption Three' },
  ]

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: any) => {
    setSlideIndex(index)
  }

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(timer) // Cleanup timer
  }, [])

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div key={index} className={`mySlides fade ${index === slideIndex ? 'active' : ''}`}>
          <img src={image.src} alt={`Slide ${index + 1}`} className="slide-image" />
          <div className="text">{image.caption}</div>
        </div>
      ))}

      {/* Dots */}
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}></span>
        ))}
      </div>
    </div>
  )
}

export default ImageSlideshow
