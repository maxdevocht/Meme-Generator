import React from 'react'
import { useState } from 'react'
import memesData from '/memesData.js'

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
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
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
        </main>
    )
}