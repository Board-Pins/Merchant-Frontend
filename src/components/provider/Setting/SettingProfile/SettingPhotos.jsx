import React, { useState } from 'react';
import img1 from '../../../../assets/images/provider/images1.png';
import img2 from '../../../../assets/images/provider/images2.png';
import img3 from '../../../../assets/images/provider/images3.png';
import img4 from '../../../../assets/images/provider/image4.png';

function SettingPhotos() {
  const [selectedImage, setSelectedImage] = useState(img4);
  const [thumbnails, setThumbnails] = useState([img1, img2, img3]);

  // Handler for file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      // Check if the file is of an accepted type
      if (fileType === 'image/png' || fileType === 'image/jpeg' || fileType === 'image/svg+xml') {
        console.log('Selected file:', file);
        const reader = new FileReader();
        reader.onloadend = () => {
          // Add the new image to the thumbnails array and set it as selected
          setThumbnails([...thumbnails, reader.result]);
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select a PNG, JPG, or SVG file.');
      }
    }
  };

  // Handler to update the main image when a thumbnail is clicked
  const handleThumbnailClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div>
      <div className='grid lg:grid-cols-4 grid-cols-1 w-full gap-5 pt-8'>
        <div className='col-span-3'>
          <img src={selectedImage} className='rounded-xl w-full' alt='Selected' />
        </div>
        <div className=' justify-center lg:h-full dev-side lg:flex lg:flex-col lg:items-center grid grid-cols-4 grid-rows-4 gap-2 '> {/* Set a specific height */}
          {thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              className='rounded-xl w-full lg:h-1/4 object-cover' // Use h-1/4 to take 25% of container height
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(thumbnail)}
            />
          ))}
          <label className='rounded-xl gradient-bg text-white flex items-center justify-center cursor-pointer w-full lg:h-1/4'>
            + Add more
            <input
              type='file'
              accept='image/png, image/jpeg, image/svg+xml'
              onChange={handleFileChange}
              className='hidden'
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default SettingPhotos;
