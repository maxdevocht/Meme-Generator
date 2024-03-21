import React from 'react'

export default function Meme() {
    return (
        <main>
            <form className='form' action="">

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

                <button className='form--btn'>Get a new meme image  🖼</button>
            </form>
        </main>
    )
}