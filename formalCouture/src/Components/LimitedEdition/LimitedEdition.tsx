import React from 'react'

const LimitedEdition = () => {
  const limitedItems = [
    {
      id: 1,
      image: '/assets/images/item1.png',
      name: 'Limited Edition Watch',
      description: 'Exclusive handcrafted watch with premium materials.',
      price: '$399',
    },
    {
      id: 2,
      image: '/assets/images/item2.png',
      name: 'Designer Handbag',
      description: 'Elegant and stylish handbag for formal occasions.',
      price: '$599',
    },
    {
      id: 3,
      image: '/assets/images/item3.png',
      name: 'Luxury Shoes',
      description: 'Hand-stitched luxury shoes with premium leather.',
      price: '$299',
    },
  ]

  return (
    <div className="py-12 px-8 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Limited Edition Collection</h2>
        <p className="text-gray-500 mt-2">Explore our exclusive limited edition items.</p>
      </div>

      {/* Limited Edition Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {limitedItems.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
            {/* Item Image */}
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />

            {/* Item Details */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-500 text-sm mt-2">{item.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">{item.price}</span>
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LimitedEdition
