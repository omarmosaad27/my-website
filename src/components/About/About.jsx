import React, { useEffect } from 'react';
import styled from 'styled-components';
import Img from './../../images/undraw_web_developer_p3e5.svg';
import resume from './../../images/Omar-Resume.pdf';
import Aos, { init } from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(() => {
    init({
      duration: 2000,
    });
  }, []);
  return (
    <Wrapper id="about">
      <div className="about-section container">
        <h2 className="title">
          about me <span className="underline"></span>
        </h2>

        <div className="about">
          <div className="about-img" data-aos="zoom-in-up">
            <img src={Img} alt="about" />
          </div>
          <div className="about-info" data-aos="zoom-in-down">
            <h3>hello there,</h3>
            <p>
              i'm omar from Egypt, i'm 24 years old, i'm a web developer with a
              working proficiency in HTML, CSS, Javascript, React js. I am
              Passionate about Web Techniques, Seek a Keen Knowledge in this
              Field by Learning Day by day, my goal is to continuously grow as a
              developer while staying current with the latest trends and
              technologies.
            </p>
            <button className="btn">
              <a href={resume} download>
                get resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
const Wrapper = styled.section`
  padding-top: 100px;
  background: var(--clr-bcg);
  .title {
    position: relative;
  }
  .underline {
    position: absolute;
    width: 70px;
    height: 4px;
    background: var(--clr-primary);
    display: block;
    margin-top: 0.5rem;
  }
  .about {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 30px;
    padding: 2rem 0;
  }
  @media screen and (max-width: 900px) {
    .about {
      grid-template-columns: 1fr;
    }
  }
  .about-img {
    img {
      width: 100%;
    }
  }
  .about-info {
    h3 {
      margin-bottom: 0;
    }
    p {
      line-height: 1.6rem;
      text-transform: capitalize;
      color: var(--clr-font);
    }
  }
`;
