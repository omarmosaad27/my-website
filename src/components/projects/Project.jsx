import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {FaGithub} from 'react-icons/fa'
const Project = ({project}) => {
    console.log(project);
    const { name, img, link, githubLink, tools:{html,css,js,react,styled}} = project
    useEffect(()=>{
        Aos.init({
            duration:2000
        });
    },[])

    return (
        <Wrapper>
            <div className="project">
                <div className="img-container" data-aos="slide-right">
                    <img src={img} alt={name}/>
                </div>
                <div className="project-info" data-aos="slide-up">
                    <h2>{name}</h2>
                    <div className="tools">
                        <p>tools:</p>
                        <ul>
                            <li>{react}</li>
                            <li>{html}</li>
                            <li>{css}</li>
                            <li>{js}</li>
                            <li>{styled}</li>
                        </ul>
                    </div>
                    <div className="buttons">
                        <button className="btn"><a href={link} target="_blank">visit website</a></button>
                        <button className="btn"><a href={githubLink} target="_blank">code <FaGithub/> </a></button>
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.article `
    margin-top: 3rem;
    .project{
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap:50px;
        margin-top: 4rem;
        

    }
    @media screen and (max-width:900px){
        .project{
            grid-template-columns: 1fr;
        }
    }
    .img-container{
        position: relative;
        z-index:1;
        img{
            width: 100%;
        }
        &.img-container::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border: 5px solid var(--clr-font);
            top: 10px;
            left: 5px;
            z-index:-1;
            box-shadow: 0 0 5px rgba(0,0,0,0.3);
        }
    }
    .buttons{
        .btn{
            display: block;
        }

    }
    .tools{
        display: flex;
        align-items: center;
        color: var(--clr-font);
        font-size: 1.5rem;
        text-transform: capitalize;
        ul{
            display: flex;
            align-items: center;
            justify-content: space-between;
            li{
                margin-right: 10px;
                
            }
        }
    }
`
export default Project
