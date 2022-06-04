import React, { useContext } from 'react'
import TopPaletteItem from './TopPaletteItem'

export default function TopPalette() {
    return (
        <div>
            <h3 className='top-palettes-header'>Top palettes</h3>
            <div className='top-palettes'>
                <TopPaletteItem idPalette={0}></TopPaletteItem>
                <TopPaletteItem idPalette={1}></TopPaletteItem>
                <TopPaletteItem idPalette={2}></TopPaletteItem>
                <TopPaletteItem idPalette={3}></TopPaletteItem>
                <TopPaletteItem idPalette={4}></TopPaletteItem>
                <TopPaletteItem idPalette={5}></TopPaletteItem>
            </div>
        </div>
    )
}
