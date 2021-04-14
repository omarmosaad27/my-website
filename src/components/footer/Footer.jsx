import React from 'react'
import styled from 'styled-components'
const Footer = () => {
    return (
        <Wrapper>
            <footer className="container">
                <p>
                    copy rights &copy; to omar mosaad, built with react
                </p>
            </footer>
        </Wrapper>
    )
}
const Wrapper = styled.section ` 
    
    background: var(--clr-bcg);
    
    footer{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 1rem;
        border-top:  1px solid #ccc;
        p{
            text-transform: capitalize;
            font-size: 1.2rem;
            color: var(--clr-font);
            text-align:center;
        }
    }
`
export default Footer
