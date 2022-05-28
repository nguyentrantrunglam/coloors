import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div className='header'>
            <div className='header_logo'><img src='https://coolors.co/assets/img/logo.svg' /></div>
            <div className='header_advertise'></div>
            <div className='header_nav'>
                <div >
                    <p>Tools</p>
                    <FontAwesomeIcon className='faChevronDown' icon={faChevronDown} />
                </div>
                <div><p className='goPro'>Go Pro</p></div>
                <span className='divider'></span>
                <button className='signInBtn '>Sign in</button>
                <button className='signUpBtn'>Sign up</button>
            </div>
        </div>
    )
}
