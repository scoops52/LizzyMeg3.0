import Image from 'next/image';
import React from 'react';
import GalleryStyles from '@/styles/GalleryStyles.module.scss';

const ImageColumn = ({ imageRange, onClick }) => {
  return (
    <div className={GalleryStyles.column}>
        {imageRange.map((image) => (
            <div key={image.id} className={GalleryStyles.imageWrapper} onClick={() => onClick(image.id)}>
                <Image
                    src={image.src} 
                    alt='' 
                    width={400}

                />
            </div>
        ))}
    </div>
  )
}

export default ImageColumn