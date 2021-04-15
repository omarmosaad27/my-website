import React, { useEffect } from 'react'
import styled from 'styled-components'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import resume from './../../images/Omar-Resume.pdf'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    },[])
    return (
        <Wrapper id="contact">
            <div className=" container">
            <h2 className="title">contact <span className="underline"></span></h2>
            <div className="contact">
                <ul className="contact-info" data-aos="fade-up">
                    <li><span>name :</span> omar mosaad </li>
                    <li><span>age :</span> 24</li>
                    <li><span>mobile number :</span> 01091485337</li>
                    <li><span>email :</span> omarmosaada27@gmail.com</li>
                    <button className="btn">
                        <a href={resume} download>get resume</a>
                    </button>
                </ul>
                
                    <ul className="social-media" data-aos="fade-left">
                        <li>
                            <a href="https://www.linkedin.com/in/omar-mosaad-6a404318a/"><AiOutlineLinkedin/></a>
                        </li>
                        <li>
                            <a href="https://github.com/omarmosaad27"><FaGithub/></a>
                        </li>
                        
                    </ul>
                
            </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section ` 
    padding-top: 100px;
    padding-bottom: 100px;
    background: var(--clr-bcg);
    .title{
        position: relative;
    }
    .underline{
        position: absolute;
        width: 70px;
        height: 4px;
        background: var(--clr-primary);
        display: block;
        margin-top: 0.5rem;
    }
    .contact{
        display: grid;
        grid-template-columns: 6fr 1fr 1fr;
        gap:20px;
        margin-top: 3rem;

    }
    @media screen and (max-width:840px){
        .contact{
            grid-template-columns: 1fr;
        }
    }
    
    .contact-info{
        background: var(--clr-bcg);
        color: var(--clr-font);
        padding: 0.5rem 1rem;
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
        text-transform: capitalize;
        li{
            margin-bottom: 0.5rem;
        }
    }
    .social-media{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap:20px;
        li{
            background: var(--clr-bcg);
            color: var(--clr-font);
            padding: 1rem 2rem;
            box-shadow: 0 0 5px rgba(0,0,0,0.3);
            display: flex;
            font-size: 2.5rem;
            justify-content: center;
            align-items: center;
            
            
        }
    }
    @media screen and (max-width:400px){
        .social-media{
            grid-template-columns: 1fr;
        }
    }
` 
export default Contact
