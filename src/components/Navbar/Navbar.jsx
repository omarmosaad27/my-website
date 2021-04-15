import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from './../../Context'
import {FaBars, FaSun} from 'react-icons/fa'
import {FiMoon} from 'react-icons/fi'
const Navbar = () => {
    
    const {toggleTheme ,isLight, click, handleClick} = useGlobalContext()

    return (
        <Wrapper>
            <nav className="container">
                <div className="logo">
                    OMAR
                </div>
                <ul className={click ? "nav-links active":"nav-links"}>
                    <li><a href="#home">home</a> </li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#skills">skills</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
                <div>
                    <div className="theme-mode"  onClick={toggleTheme}>
                        {
                            isLight ? <FiMoon/> : <FaSun/>
                        }
                    </div>
                </div>
                <button className="bars" onClick={handleClick}>
                    <FaBars />
                </button>
            </nav>
        </Wrapper>
    )
}

export default Navbar

const Wrapper =  styled.div `
        height: 80px;
        width: 100vw;
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
        padding: 1rem 0;
        background: var(--clr-bcg);
        position: fixed;
        z-index:100;

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    .nav-links{
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            margin: 0 0.8rem;
            font-size: 1.1rem;
            a{
                color: var(--clr-font);
                text-transform: capitalize;
                transition: all 100ms linear;
                padding-bottom: 5px;
                &:hover{
                    color: var(--clr-primary);
                    border-bottom: 2px solid var(--clr-primary);
                }
            }
        }
    }
    .theme-mode{
        padding: 0.5rem;
        font-size: 1.5rem;
        background: var(--clr-font);
        color:var(--clr-bcg);
        border-radius: 50%;
        cursor: pointer;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bars{
        font-size: 2rem;
        color: var(--clr-font);
        display: none;
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
    }
    @media screen and (max-width:900px){
        .bars{
            display: block;
        }
        .nav-links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 64.50px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;
    }
    .nav-links li{
        padding: 1rem 0;
    }
    .nav-links.active {
        background: var(--clr-bcg);
        left: 0;
        opacity: 1;
        transition: all 0.6s ease;
        z-index: 2;
    }
    }

`