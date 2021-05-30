import React from 'react'
import Link from 'next/link'

import * as sc from './Styles';

const Navigation = () => {
    return (
        <sc.NavElement>
            <sc.Wrapper>
                <div>
                    img
                </div>
                <div>
                    <Link href="#projects">Projects</Link>
                    <Link href="#resume">Resumé</Link>
                    <Link href="#contact">Contact Me</Link>
                </div>
            </sc.Wrapper>
        </sc.NavElement>
    )
}

export default Navigation
