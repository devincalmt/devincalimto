import React from 'react'
import '../styling/Header.scss'

function Header(){
    return(
        <div>
            <div className="header-container split">
                <div>Dev</div>
                <div className="nav-bar horizontal">
                    <div className="nav-item">Home</div>
                    <div className="nav-item">About Me</div>
                    <div className="nav-item">Education</div>
                    <div className="nav-item">Skills</div>
                    <div className="nav-item">Works</div>
                    <div className="nav-item">Achievements</div>
                    <div className="nav-item">Contact</div>
                </div>
            </div>
        </div>
    );
}

export default Header