import React from 'react'
import { useGlobalContext } from '../../Context'
import styled from  'styled-components'
const Skills = () => {
    const {skills} = useGlobalContext();
    console.log(skills);
    return (
        <Wrapper id="skills">
            <div className="skills-section container">
            <h2 className="title">skills <span className="underline"></span></h2>
            <div className="skills-wrapper">

                {
                    skills.map((skill)=>{
                        const {id,skillLogo,color} = skill;
                        return(
                            
                                <div className="skill" key={id} style={{color:color}}>
                                    {skillLogo}
                                </div>
                            
                        )
                    })
                }
            </div>
            </div>
        </Wrapper>
    )
}

export default Skills

const Wrapper = styled.section ` 
    padding-top: 100px;
    background: var(--clr-bcg);
    width: 100%;
    .skills-section{
        margin-top: 3rem;
    }
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
    .skills-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 2rem;
    }
    .skill{
        padding: 2rem  1rem;
        background: var(--clr-bcg);
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
        font-size: 2.5rem;
        margin-right: 1rem;
        margin-bottom: 1.5rem;
        transition: all 200ms linear;
        border-radius: 0.5rem;
    }
    .skill:hover{
        transform: scale(1.1) translateY(-10px);

    }

`