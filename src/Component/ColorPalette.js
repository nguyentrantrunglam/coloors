import React from 'react'
import PaletteItem from './PaletteItem'

export default function ColorPalette(props) {
    const random = Math.floor(Math.random() * 8);
    const palette = []
    const id = []
    const receiveId = (data) => {
        if (id.some(test => test === data) === false) {
            id.splice(0, 1)
            id.push(data - 1)
        }
    }
    const receiveData = (data) => {
        if (palette.some(test => test === data) === false) {
            palette.splice(id[0],1,data)
        }
        props.onReceiveData(palette)
    }

    return (
        <div className='color-palette'>
            <PaletteItem id={1} paletteNumber={random} onReceiveId={receiveId} onReceiveData={receiveData}></PaletteItem>
            <PaletteItem id={2} paletteNumber={random} onReceiveId={receiveId} onReceiveData={receiveData}></PaletteItem>
            <PaletteItem id={3} paletteNumber={random} onReceiveId={receiveId} onReceiveData={receiveData}></PaletteItem>
            <PaletteItem id={4} paletteNumber={random} onReceiveId={receiveId} onReceiveData={receiveData}></PaletteItem>
            <PaletteItem id={5} paletteNumber={random} onReceiveId={receiveId} onReceiveData={receiveData}></PaletteItem>
        </div>
    )
}
