import React from 'react';
import Link from 'next/link';
import FooterStyles from '@/styles/FooterStyles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <div className={FooterStyles.container}>
        <div className={FooterStyles.copyright}>
            <h4>Made by Sean Cooper &copy; 2023 </h4>
        </div>
        <div className={FooterStyles.contact}>
            <Link href='contact' className={FooterStyles.contactLink}>
                Contact Me
                <FontAwesomeIcon icon={faPaperPlane} size={50} className={FooterStyles.contactIcon} />
            </Link>
        </div>
    </div>
  )
}

export default Footer