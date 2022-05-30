import React from 'react'
import PaletteItem from './PaletteItem'

export default function ColorPalette() {
    return (
        <div className='color-palette'>
            <PaletteItem id={1}></PaletteItem>
            <PaletteItem id={2}></PaletteItem>
            <PaletteItem id={3}></PaletteItem>
            <PaletteItem id={4}></PaletteItem>
            <PaletteItem id={5}></PaletteItem>
        </div>
    )
}
