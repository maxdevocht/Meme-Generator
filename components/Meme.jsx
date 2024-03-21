import React from 'react'

export default function Meme() {
    return (
        <main>
            <form className='form' action="">

                <input 
                    className='form--input' 
                    type="text" 
                    placeholder='Top text'
                />

                <input 
                    className='form--input' 
                    type="text" 
                    placeholder='Bottom text'
                />

                <button className='form--btn'>Get a new meme image  🖼</button>
            </form>
        </main>
    )
}