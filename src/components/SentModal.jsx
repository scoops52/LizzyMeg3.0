import React from 'react'
import { useState } from 'react'
import SentModalStyles from '@/styles/SentModalStyles.module.scss';

const SentModal = ({ handleClose }) => {


  return (
    <aside className={SentModalStyles.modalContainer}>
                <div className={SentModalStyles.modal}>
                    <h1>Your message has been sent!</h1>
                    <p>I will get back to you as soon as possible</p>
                    <button onClick={handleClose}>Return</button>
                </div>
    </aside>
  )
}

export default SentModal