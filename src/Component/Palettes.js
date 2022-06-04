import React from 'react'
import ColorPalette from './ColorPalette'
import TopPalette from './TopPalette'

export default function Palettes() {
    function receiveData(data) {
        console.log(data);
    }

 
    return (
        <div className='palette'>
            <div className='title'>
                <h1>Create Palette</h1>
                <p>Let's create your colorful palettes.</p>
            </div>
            <div className='make-palette'>
                <ColorPalette onReceiveData={receiveData}></ColorPalette>
                <div className='form-border'></div>
                <button id='export-btn'>Export</button>
            </div>
            <TopPalette></TopPalette>
        </div>
    )
}
