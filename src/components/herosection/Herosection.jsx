import React from 'react'
import styled from 'styled-components'
import Img from './../../images/undraw_coding_6mjf.svg'
const Herosection = () => {
    return (
        <Wrapper id="home">
            <article className="hero-section container">
                <div className="hero-info">
                    <h3>hello there,</h3>
                    <div className="main-title">
                        <h3>I'M</h3>
                        <h1 data-text="Omar..." >Omar...</h1>
                    </div>
                    <h4>front end web developer</h4>
                </div>
                <div className="hero-img">
                    <img src={Img} alt="omar"/>
                </div>
            </article>
        </Wrapper>
    )
}

export default Herosection

const Wrapper = styled.section `
    width: 100%;
    height: 100vh;
    padding-top: 120px;
    background: var(--clr-bcg);
    .hero-section{
        display: grid;
        grid-template-columns: 2fr 3fr;
        justify-content: center;
        align-items: center;
        
    }
    @media screen and (max-width:800px){
        .hero-section{
            grid-template-columns: 1fr;
        }
    }
    .hero-info{
        h3,h4{
            font-size: clamp(1.5rem, -0.8750rem + 8.3333vw, 1.5rem);
        }
        .main-title{
            display: flex;
            align-items: center;
            h3{
                font-size: clamp(1.5rem, -0.8750rem + 8.3333vw, 2.5rem);
                margin-right: 5px;
            }
        }
        h1{
            position: relative;
            font-size: clamp(2.5rem, -0.8750rem + 8.3333vw, 4rem);
            color: var(--clr-bcg);
            -webkit-text-stroke: 1px var(--clr-font);
            font-family: 'Rajdhani', sans-serif;
            text-transform: uppercase;
            font-weight: 500;
        }
        h1:before{
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            color: var(--clr-primary);
            -webkit-text-stroke: 0px var(--clr-font);
            overflow: hidden;
            border-right: 3px solid var(--clr-primary);
            animation: animate 6s linear infinite;
        }
        @keyframes animate {
            0%{
                width: 0;
            }
            100%{
                width: 100%;
            }

        }
    }
    .hero-img{
        padding: 2rem;
        img{
            width: 100%;
        }
    }
`
