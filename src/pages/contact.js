import React from 'react';
import Form from '@/components/Form';
import ContactStyles from '@/styles/ContactStyles.module.scss';
import formImage from '../../public/formImage.jpg';
import Image from 'next/image';

const Contact = () => {
    return (
        <div className={ContactStyles.container}>
            <div className={ContactStyles.formContainer}>
                <h1 className={ContactStyles.title}>
                    Contact Liz
                </h1>
                <Form />
            </div>
            <div className={ContactStyles.imgContainer}>
                <Image
                    src={formImage}
                    alt='Liz Posing Standing'
                    height={650}
                    className={ContactStyles.img}
                />
            </div>
        </div>
    )
}

export default Contact