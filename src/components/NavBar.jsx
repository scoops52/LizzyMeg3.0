import React, { useState } from 'react';
import Link from 'next/link';
import StyledLink from './StyledLink';
import NavbarStyles from '@/styles/NavbarStyles.module.scss';
import Image from 'next/image';
import logo from '../../public/assets/logo.png';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = (e) => open ? setOpen(false) : setOpen(true);

  return (
    <nav className={NavbarStyles.container}>
    <div className={NavbarStyles.logoContainer}>
        <Link
            className={NavbarStyles.logoLink}
            href='/'
        >

            <Image src={logo} alt='logo' />

        </Link>
    </div>
    <div className={NavbarStyles.linksContainer}>
        <ul className={NavbarStyles.links}>
            {['about', 'photos', 'reels', 'projects', 'contact'].map((item) => (
                <li key={`link-${item}`} className={NavbarStyles.linkLi}>
                    <StyledLink href={`/${item}`} label={item} />
                </li>
            ))}
        </ul>

        <div className={NavbarStyles.socials} >
            <Link href='https://www.instagram.com/lizzy_meg_/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faInstagram} className={NavbarStyles.socialIcon} />
            </Link>
            <Link href='https://youtu.be/7zixqxX4yMU' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faYoutube} className={NavbarStyles.socialIcon} />
            </Link>
        </div>
    </div>
    <div className={NavbarStyles.dropdownIcon}>
        {!open ?
            <FontAwesomeIcon icon={faBars} onClick={handleClick} />
            :
            <FontAwesomeIcon icon={faXmark} onClick={handleClick} />}
    </div>
    <div className={NavbarStyles.dropdown}>
        {open && (
            <motion.div
                whileInview={{ x: [300, 0] }}
                transition={{ durtation: 0.85, ease: 'easeOut' }}
            >
                <ul className={NavbarStyles.dropdownLinks}>
                    {['about', 'photos', 'reels', 'projects', 'contact'].map((item) => (
                        <li key={`mobile-link-${item}`} className={NavbarStyles.dropdownLinkLi}>
                            <Link href={`/${item}`} className={NavbarStyles.dropdownNavLink}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        )}
    </div>
</nav>
  )
}

export default NavBar