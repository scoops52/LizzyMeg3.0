import React from 'react';
import { useState } from 'react';
import GalleryStyles from '@/styles/GalleryStyles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import ImageColumn from './ImageColumn';

const Gallery = ({ images }) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    
    const columnSize = Math.ceil(images.length / 3);
    const imageColumnOne = images.slice(0, columnSize);
    const imageColumnTwo = images.slice(columnSize, columnSize * 2);
    const imageColumnThree = images.slice(columnSize * 2, columnSize * 3);

    const handleOpenModal = (imageId) => {
        const imageIndex = images.findIndex((image) => image.id === imageId)
        setSlideNumber(imageIndex);
        setOpenModal(true);
        console.log(images[slideNumber])
    };

    const handleCloseModal = () => {
        setOpenModal(false)
    };

    const nextSlide = () => {
        slideNumber + 1 === images.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
    };

    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(images.length - 1) : setSlideNumber(slideNumber - 1)
    };


    return (
        <>
            {openModal &&
                <div className={GalleryStyles.slider}>
                    <FontAwesomeIcon icon={faCircleXmark} className={GalleryStyles.closeBtn} onClick={handleCloseModal} />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className={GalleryStyles.prevBtn} onClick={prevSlide} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className={GalleryStyles.nextBtn} onClick={nextSlide} />
                    <div className={GalleryStyles.fullScreenImage}>
                        <Image src={images[slideNumber].src} />
                    </div>
                </div>
            }

            <div className={GalleryStyles.container}>
                <ImageColumn imageRange={imageColumnOne} onClick={handleOpenModal} />
                <ImageColumn imageRange={imageColumnTwo} onClick={handleOpenModal} />
                <ImageColumn imageRange={imageColumnThree} onClick={handleOpenModal} />
            </div>
        </>
    )
}

export default Gallery