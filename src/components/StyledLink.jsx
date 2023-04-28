import React from 'react';
import Link from 'next/link';
import StyledNavLink from './StyledNavLink.module.css';


const StyledLink = ({href, linkText}) => {

  return (
    <div className={StyledNavLink.container}>
        <span className={StyledNavLink.innerContainer}>
            <Link href={href} className={StyledNavLink.link}>{linkText}</Link>
        </span>
    </div>
  )
}

export default StyledLink