
const examplePhotos = [
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
 ];

const photos = examplePhotos.map((photo) => ({
  src: photo.img,
  width: photo.width,
  height: photo.height,
}));

export default photos;