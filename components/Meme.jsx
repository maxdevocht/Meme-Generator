import React from 'react'
import { useState } from 'react'
import memesData from '/memesData.js'

export default function Meme() {

    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main>
            <div className='form' action="">

                <label htmlFor='top-text' className='form--label'>Top Text
                    <input 
                        id='top-text'
                        className='form--input' 
                        type="text" 
                        placeholder='Shut up'
                    />
                </label>

                <label htmlFor='bottom-text' className='form--label'>Bottom text
                    <input 
                        id='bottom-text'
                        className='form--input' 
                        type="text" 
                        placeholder='and take my money'
                    />
                </label>

                <button 
                    onClick={getMemeImage} 
                    className='form--btn'>
                    Get a new meme image  🖼
                </button>

                <img className='meme--img' src={memeImage} alt="meme image" />
            </div>
        </main>
    )
}