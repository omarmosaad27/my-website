import React from 'react'
import {useGlobalContext} from './../../Context'
import styled from 'styled-components'
import Project from './Project'
const ProjectsList = () => {
    const {projects} = useGlobalContext();
    return (
        <Wrapper id="projects">
                <div className="container">
                    <h2 className="title">projects <span className="underline"></span></h2>
                    {
                        projects.map((project)=>{
                            return(
                                <Project key={project.id} project={project}/> 
                            )
                        })
                    }
                </div>
        </Wrapper>
    )
}

const Wrapper = styled.section ` 
    padding-top:100px;
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

` 
export default ProjectsList
