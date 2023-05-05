import React, { useState } from 'react';
import FormStyles from '@/styles/FormStyles.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import emailjs from 'emailjs-com';
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import SentModal from './SentModal';

const Form = () => {
    const [nameValidity, setNameValidity] = useState(null);
    const [emailValidity, setEmailValidity] = useState(null);
    const [messageValidity, setMessageValidity] = useState(null);
    const [nameClassName, setNameClassName] = useState(`${FormStyles.formControl}`);
    const [emailClassName, setEmailClassName] = useState(`${FormStyles.formControl}`);
    const [messageClassName, setMessageClassName] = useState(`${FormStyles.formControl}`);
    const [name, setName] = useState('');
    const [captchaToken, setCaptchaToken] = useState('');
    const [openModal, setOpenModal] = useState(false)

   

    const checkNameValidity = (e) => {
        const input = e.target;
        
        if (!input.checkValidity()) {
            setNameValidity(false);
            setNameClassName(`${FormStyles.wasInvalidated}`);
            console.log(nameClassName);
        } else {
            setNameValidity(true);
            setNameClassName(`${FormStyles.wasValidated}`);
            console.log(nameClassName);
        }
        
    };

    const checkEmailValidity = (e) => {
        const input = e.target;
        if (!input.checkValidity()) {
            setEmailValidity(false)
            setEmailClassName(`${FormStyles.wasInvalidated}`);
        } else {
            setEmailValidity(true);
            setEmailClassName(`${FormStyles.wasValidated}`);
        }
    };

    const checkMessageValidity = (e) => {
        const input = e.target;
        
        if (!input.checkValidity()) {
            setMessageValidity(false);
            setMessageClassName(`${FormStyles.wasInvalidated}`);
            console.log(nameClassName);
        } else {
            setMessageValidity(true);
            setMessageClassName(`${FormStyles.wasValidated}`);
            console.log(nameClassName);
        }
        
    };

    const handleName = (e) => {
        setName(e.target.value);
    }

    //  *****emailJS******

    const form = useRef();
    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    }
    const sendEmail = (e) => {
        e.preventDefault();
        if (captchaToken) {
            emailjs.sendForm('service_6h3545w', 'template_b139nh3', form.current, 'HM4xy5fugu2lLLMLl')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            alert('Please verify that you are a human')
        };
        setOpenModal(true);
    };

    

    return (
        <>
        <form ref={form} className={FormStyles.form} onSubmit={sendEmail}>
            <input type="hidden" name="form-name" value="contact" className={FormStyles.input} />
            <div className={`${FormStyles.formFloating} ${FormStyles.info}`}>
                <input name='name' type="text" placeholder='name' className={nameClassName}  onBlur={checkNameValidity} onChange={handleName} required />
                <label htmlFor="name">Name</label>
                {nameValidity && (
                    <>
                    <FontAwesomeIcon icon={faCircleCheck} color='green' size={20} className={`${FormStyles.invalidIcon}`}/>
                    <div className={`${FormStyles.validFeedback}`}>
                        {`Thanks ${name}!`}
                    </div>
                    </>
                )}
                {nameValidity === false && (
                   <>
                   <FontAwesomeIcon icon={faCircleXmark} color='red' size={20} className={`${FormStyles.invalidIcon}`}/>
                    <div className={`${FormStyles.invalidFeedback}`}>
                        Please provide a name!
                    </div>
                    </>
                )}
            </div>
            <div className={`${FormStyles.formFloating} ${FormStyles.info}`}>
                <input name='email' type="email" placeholder='email' onBlur={checkEmailValidity} className={emailClassName} required />
                <label htmlFor="email">E-Mail</label>
                {emailValidity && (
                    <>
                    <FontAwesomeIcon icon={faCircleCheck} color='green'  className={`${FormStyles.invalidIcon}`}/>
                    <div className={`${FormStyles.validFeedback}`}>
                        Looks Good!
                    </div>
                    </>
                )}
                {emailValidity === false && (
                    <>
                    <FontAwesomeIcon icon={faCircleXmark} color='red'  className={`${FormStyles.invalidIcon}`}/>
                    <div className={`${FormStyles.invalidFeedback}`}>
                        Please provide your E-Mail so I can reply!
                    </div>
                    </>
                )}
            </div>
            <div className={`${FormStyles.formFloating} ${FormStyles.messageContainer}`} >
                <textarea name='message' type='textarea' placeholder='message' onBlur={checkMessageValidity} className={messageClassName} required/>
                <label htmlFor="message">Message</label>
                {messageValidity && (
                    <>
                    <FontAwesomeIcon icon={faCircleCheck} color='green' className={`${FormStyles.invalidIcon}`}/>
                    <div className={`${FormStyles.validFeedback}`}>
                        I look forward to reading your message {name}!
                    </div>
                    </>
                )}
                {messageValidity === false && (
                    <>
                    <FontAwesomeIcon icon={faCircleXmark} color='red'  className={`${FormStyles.invalidIcon}`}/>
                    <div className={`${FormStyles.invalidFeedback}`}>
                        Please add some details about your inquiry.
                    </div>
                    </>
                )}
            </div>
            <div className={FormStyles.btnContainer}>
                <button className={FormStyles.submitBtn} type='submit'>Send</button>
            </div>
            <div className={FormStyles.captchaContainer}>
            <ReCAPTCHA
                sitekey='6LcV-wklAAAAACLLv86NqxGtUabwi9raw36CLqtK'
                onChange={handleCaptchaChange}
                
                
            />
            </div>
        </form>
        {openModal && <SentModal handleClose={() => setOpenModal(false)} />}
        </>
    )
}

export default Form