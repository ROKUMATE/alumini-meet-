import React from 'react';

const Gallery = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://res.cloudinary.com/dge7dzxe0/image/upload/v1738065360/DSC_7079_jiewpn.webp" 
              alt="Gallery Image 1" 
              className="w-full h-full object-cover"
            />
          </div> */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://res.cloudinary.com/dge7dzxe0/image/upload/v1738065476/DSC_7471_epqbe0.webp" 
              alt="Gallery Image 2" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://res.cloudinary.com/dge7dzxe0/image/upload/v1738065579/DSC_7500_fjua7r.webp" 
              alt="Gallery Image 3" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://res.cloudinary.com/dge7dzxe0/image/upload/v1738065645/DSC_7524_lhojxd.webp" 
              alt="Gallery Image 3" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 