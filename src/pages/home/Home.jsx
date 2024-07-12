import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import profile from '../../assets/profile.png'

const Home = () => {
  return (
    <section className="home section grid">
      <img src={profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Mehedi.</span> Web Developer
          </h1>
          <p className="home__description">
            I`m a web designer & frontend developer focus on crafting clean and
            user-friendly experiences,I am passionate about building excellent
            that improves that lives of those around me.
          </p>
          <Link to="/about" className="button">
            More About Me{' '}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
