// Hero.js
import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero">
      {/* Left Side Text */}
      <div className="hero-text">
        <h1>
          All banks are <br />
          worried about <br />
          fintech ind.
        </h1>
        <p>
          We help you get paid any way you want, with the least amount of
          hassle. It’s just one of the reasons we are the most trusted name.
        </p>

        {/* Email Form */}
        <div className="email-form">
          <input placeholder="Business email" type="email" />
          <button>Get started</button>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stats-cards">
            <div className="stats-icon">
              {/* Money Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="icon"
              >
                <path
                  d="M9 5.5c1.4-.7 2.6-2.3 3-3.5 0 0 1.7 2 3.5 3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M6.8 9h10.4" strokeLinecap="round" />
                <path
                  d="M12 21c5.5 0 7.5-2.8 7.5-6.2 0-2.1-1-3.8-2.5-5.1-.6-.5-1.5-.7-2.3-.7H9.3c-.8 0-1.7.2-2.3.7C5.5 11 4.5 12.7 4.5 14.8 4.5 18.2 6.5 21 12 21Z"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12.2c-1.6 0-2.3.8-2.3 1.6 0 .8.7 1.4 1.9 1.6l.4.1c1 .2 1.6.6 1.6 1.3 0 .8-.9 1.5-2.1 1.5-1.3 0-2.1-.5-2.5-1.1M12 10.7v7.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="stats-text">
              <h3>$22k</h3>
              <p>
                Total Earning <span>+20.80%</span>
              </p>
            </div>
          </div>

          <div className="stats-cards">
            <div className="stats-icon">
              {/* Withdraw Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <div className="stats-text">
              <h3>$10k</h3>
              <p>
                Withdraw <span>+05.80%</span>
              </p>
            </div>
          </div>

          <div className="stats-cards">
            <div className="stats-icon">
              {/* Projects Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                />
              </svg>
            </div>
            <div className="stats-text">
              <h3>15</h3>
              <p>
                Total Projects <span>+10.80%</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="hero-right">
        <div className="hero-circle"></div>
        <div className="hero-img">
          <img src="/girl.png" alt="girl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
