import React from 'react'
import ColorPalette from './ColorPalette'
import TopPalette from './TopPalette'

export default function Palettes() {
    return (
        <div className='palette'>
            <div className='title'>
                <h1>Create Palette</h1>
                <p>Let's create your colorful palettes.</p>
            </div>
            <div className='make-palette'>
                <ColorPalette></ColorPalette>
                <div className='form-border'>
                    <button id='export-btn'>Export</button>
                </div>
            </div>
            <TopPalette></TopPalette>
        </div>
    )
}
