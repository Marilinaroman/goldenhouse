import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import AlertContext  from '../../context/Alert';
import { useNavigate } from 'react-router-dom';

export const ContactUs = () => {
    const form = useRef()
    const {setNotification} = useContext(AlertContext)
    const navigate = useNavigate()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_geji25l','template_yoq5v6j', form.current, '_9x74mzrTJjsBxQWE')
        .then((result) => {
            if(result.text === 'OK'){
                setNotification('success', 'Your request has been sent')
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            }
            if(result.text !== 'OK'){
                setNotification('danger', 'Your request could not be sent')
            }
        }, (error) => {
            console.log(error.text)
        });
    };

    return (
        <div className='contactForm'>
            <h1>Contact us</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" required/>
                <label>Email</label>
                <input type="email" name="user_email" required/>
                <label>Message</label>
                <textarea name="message" required/>
                <input type="submit" value="Send" className='button'/>
            </form>
        </div>
    );
};