import galleryImage1 from '../../public/imageOne.jpg';
import galleryImage2 from '../../public/imageTwo.jpg';
import galleryImage3 from '../../public/imageThree.jpg';
import galleryImage4 from '../../public/imageFour.jpg';
import galleryImage5 from '../../public/imageFive.jpg';
import galleryImage6 from '../../public/imageSix.jpg';
import galleryImage7 from '../../public/imageSeven.jpg';
import galleryImage8 from '../../public/imageEight.jpg';
import galleryImage9 from '../../public/imageNine.jpg';
import galleryImage10 from '../../public/imageTen.jpg';
import galleryImage11 from '../../public/imageEleven.jpg';
import galleryImage12 from '../../public/imageTwelve.jpg';
import Gallery from '@/components/Gallery';
import PhotoStyles from '@/styles/PhotoStyles.module.scss'


const Photos = () => {

  const galleryImages = [
    {
        id: 1,
        src: galleryImage1
    },
    {
        id: 2,
        src: galleryImage2
    },
    {
        id: 3,
        src: galleryImage10
    },
    {
        id: 4,
        src: galleryImage3
    },
    {
        id: 5,
        src: galleryImage9
    },
    {
        id: 6,
        src: galleryImage6
    },
    {
        id: 7,
        src: galleryImage7
    },
    {
        id: 8,
        src: galleryImage8
    },
    {
        id: 9,
        src: galleryImage12
    },
    {
        id: 10,
        src: galleryImage4
    },
    {
        id: 11,
        src: galleryImage11
    },
    {
        id: 12,
        src: galleryImage5
    }
]

  return (
    <div className={PhotoStyles.container}>
        <div className={PhotoStyles.heading}>
            <h1>Photos</h1>
            <p>Click to see full size image</p> 
        </div>
        <Gallery images={galleryImages} />
    </div>
  )
}

export default Photos