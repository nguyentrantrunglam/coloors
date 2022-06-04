import React from 'react'
import { useContext } from 'react'
import { Colors } from '../Context'
export default function TopPaletteItem(props) {
    const colors = useContext(Colors)
    return (
        <div className='top-palettes-item'>
            <div className='top-palettes-item-color' style={{ backgroundColor: `${colors[props.idPalette].palette[0].hex}` }}></div>
            <div className='top-palettes-item-color' style={{ backgroundColor: `${colors[props.idPalette].palette[1].hex}` }}></div>
            <div className='top-palettes-item-color' style={{ backgroundColor: `${colors[props.idPalette].palette[2].hex}` }}></div>
            <div className='top-palettes-item-color' style={{ backgroundColor: `${colors[props.idPalette].palette[3].hex}` }}></div>
            <div className='top-palettes-item-color' style={{ backgroundColor: `${colors[props.idPalette].palette[4].hex}` }}></div>
        </div>
    )
}
