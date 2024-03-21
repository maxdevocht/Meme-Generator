import React from 'react'

export default function Header() {
    return (
        <header>
            <div className="title">
                <img className='header--img' src="./src/assets/Troll-Face.svg" alt="Logo" />
                <h1>Meme Generator</h1>
            </div>
            <h2>A Dynamic React App</h2>
        </header>
    )
}