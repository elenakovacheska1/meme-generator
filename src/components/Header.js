import React from 'react';

let Header = () => {
    return(<div className='header'>
                <img className='header--logo' src='./images/logo.png' alt='header logo'></img>
                <h1 className='header--title'>Meme Generator</h1>
                <h3 className='header--description'>React Course - Project 3</h3>
            </div>);
}

export default Header;