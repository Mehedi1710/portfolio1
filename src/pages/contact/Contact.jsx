import React, { useRef, useState } from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaYoutube,
  FaDribbble,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[sub, setSub] = useState('');
  const[message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gwk7bzd', 'template_sk4f4fg', form.current, {
        publicKey: '9q6j2YdxcAuKu4rNN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">mehedihasan171052@gmail.com</h4>
              </div>
            </div>
          </div>
          <div className="contact__info">
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">01603717770</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="contact__social-link">
              <FaXTwitter />
            </a>
            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>
            <a href="https://dribbble.com" className="contact__social-link">
              <FaDribbble />
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} action="" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form__input-div last__div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                onChange={(e)=>setSub(e.target.value)}
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
              onChange={(e)=>setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className="button">
            Send Message{' '}
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
