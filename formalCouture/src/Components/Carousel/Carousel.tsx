import React from 'react'
import { Carousel } from 'primereact/carousel'
import { Button } from 'primereact/button'

const CarouselComponent: React.FC = () => {
  const items = [
    { id: 1, src: '/assets/images/item1.png', alt: 'Item 1' },
    { id: 2, src: '/assets/images/item2.png', alt: 'Item 2' },
    { id: 3, src: '/assets/images/item3.png', alt: 'Item 3' },
    { id: 4, src: '/assets/images/item1.png', alt: 'Item 1' },
    { id: 5, src: '/assets/images/item2.png', alt: 'Item 2' },
    { id: 6, src: '/assets/images/item9.png', alt: 'Item 3' },
  ]

  const itemTemplate = (item: any) => {
    return (
      <div className="text-center">
        <img src={item.src} alt={item.alt} className="w-full" style={{ height: '30rem' }} />
      </div>
    )
  }

  return (
    <section>
      {/* Carousel */}
      <div style={{ width: '64rem', marginLeft: '4rem' }}>
        <Carousel
          value={items}
          itemTemplate={itemTemplate}
          numVisible={3}
          numScroll={1}
          // prevIcon={'/assets/icons/chevron-down.png'}
        />
      </div>

      {/* Text and Button */}
      <div
        className="w-1/3 pl-12"
        style={{
          marginTop: '-20rem',
          marginLeft: '70rem',
        }}>
        <h2 className="text-xl font-bold" style={{ marginLeft: '12rem' }}>
          LIMITED EDITION
        </h2>
        <p className="mt-4 text-lg" style={{ marginLeft: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula lectus, convallis sed
          justo a, eleifend semper diam. Fusce vitae ultricies augue.
        </p>

        <Button
          label="Shop Now"
          className="mt-8 p-button-rounded px-6 py-3"
          style={{
            backgroundColor: '#050D52',
            borderColor: '#050D52',
            fontSize: '16px',
            width: '204px',
            height: '56px',
            color: '#F7F7F7',
            marginTop: '1rem',
            borderRadius: '10px',
            marginLeft: '12rem',
          }}
        />
      </div>
    </section>
  )
}

export default CarouselComponent
