import React from 'react'
import '../styling/HomePage.scss'
import Header from './Header';
import Footer from './Footer';
import HomeContent from './HomeContent';

function HomePage(){
    return(
        <div>
            <Header/>
            <HomeContent/>
            <Footer/>
        </div>
    );
}

export default HomePage