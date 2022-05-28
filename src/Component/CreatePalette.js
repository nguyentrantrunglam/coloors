import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Colors } from '../Context'

export default function CreatePalette(props) {
    const colors = useContext(Colors)
    const [color, setColor] = useState(colors)
    return (
        <div className={props.name}>
            <div id={`color${color[0].id}`} style={{backgroundColor: `${color[0].hex}`}} className='item'><p>{color[0].hex}</p></div>
            <div id={`color${color[1].id}`} style={{backgroundColor: `${color[1].hex}`}} className='item'><p>{color[1].hex}</p></div>
            <div id={`color${color[2].id}`} style={{backgroundColor: `${color[2].hex}`}} className='item'><p>{color[2].hex}</p></div>
            <div id={`color${color[3].id}`} style={{backgroundColor: `${color[3].hex}`}} className='item'><p>{color[3].hex}</p></div>
            <div id={`color${color[4].id}`} style={{backgroundColor: `${color[4].hex}`}} className='item'><p>{color[4].hex}</p></div>
        </div>
    )
}
