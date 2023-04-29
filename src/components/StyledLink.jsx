import React from 'react';
import Link from 'next/link';
import StyledLinkStyles from '@/styles/StyledLinkStyles.module.scss';

const StyledLink = ({ href, label, isEnter }) => {

  return (
    <div 
    className={`${StyledLinkStyles.container} ${
        isEnter ? StyledLinkStyles.enter : ''
         }`}
         >
        <span 
            className={StyledLinkStyles.innerContainer}
        >
            <Link href={href} passHref className={StyledLinkStyles.link}>{label}</Link>
        </span>
    </div>
  )
}

export default StyledLink