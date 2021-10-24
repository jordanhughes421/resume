import React from 'react'
import Typed from 'react-typed'
import './header.css'

function Header() {
    return (
        <div className='main-info'>
            <h1>
                What am I?
            </h1>
            <Typed
                strings={[
                '',  
                 'Problem Solver',
                 'Engineer',
                 'Visionary Leader',
                 'Photographer',
                 '']}
                typeSpeed={40}
                backSpeed={50}
                loop
            />
        </div>
    )
}

export default Header
