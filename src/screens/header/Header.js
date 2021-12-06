import React from 'react'
import Typed from 'react-typed'
import './header.css'



function Header() {
    return (
        <div className='main-info'>
            <h1>
                Welcome to my website.
            </h1>
            <h1>
                (Still under construction! Projects tab currently not working on mobile.)
            </h1>
            <Typed

                strings={[
                ' ', 
                 'Created by Jordan Hughes using ReactJS'
                ]}
                typeSpeed={40}
                backSpeed={50}
                loopCount={1}
            />
        </div>
    )
}

export default Header
