import React from 'react'
import { NavElement, Wrapper } from './Styles';

const Navigation = () => {
    return (
        <NavElement>
            <Wrapper>
                <div>
                    img
                </div>
                <div>
                    <a href="#">Projects</a>
                    <a href="#">Resumé</a>
                    <a href="#">Contact Me</a>
                </div>
            </Wrapper>
        </NavElement>
    )
}

export default Navigation
