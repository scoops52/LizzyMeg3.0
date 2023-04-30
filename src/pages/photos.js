import React from 'react';
import Gallery from '@/components/Gallery';
import galleryImages from '../../public/assets/GalleryImages/galleryImages';


const Photos = () => {

  const images = [
    {
      id: 1,
       img: '/assets/GalleryImages/1.JPG',
       width: 260,
       height: 187,
    },
    {
      id: 12,
       img: '/assets/GalleryImages/2.JPG',
       width: 260,
       height: 390,
    },
    {
      id: 13,
       img: '/assets/GalleryImages/3.JPEG',
       width: 260,
       height: 388,
    },
    {
      id: 14,
      img:'/assets/GalleryImages/4.JPEG',
      height: 199,
    },
    {
      id: 15,
      img:'/assets/GalleryImages/5.JPG',
      height: 199,
    },
    {
      id: 16,
      img:'/assets/GalleryImages/4.JPEG',
      height: 199,
    },
    {
      id: 14,
      img:'/assets/GalleryImages/4.JPEG',
      height: 199,
    },
    {
      id: 14,
      img:'/assets/GalleryImages/4.JPEG',
      height: 199,
    },
    {
      id: 14,
      img:'/assets/GalleryImages/4.JPEG',
      height: 199,
    },
    {
      id: 14,
      img:'/assets/GalleryImages/4.JPEG',
      height: 199,
    },
    {
      id: 14,
      img:'/assets/GalleryImages/4.JPEG',
      height: 199,
    },
    {
      id: 14,
      img:'/assets/GalleryImages/4.JPEG',
      height: 199,
    }
 ];

  return (
    <Gallery images={galleryImages} />
  )
}

export default Photos