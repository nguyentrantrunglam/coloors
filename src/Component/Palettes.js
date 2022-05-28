import React, { useContext, useState } from 'react'
import Color from './Color'
import CreatePalette from './CreatePalette'
import { Colors } from '../Context'

export default function Palettes() {
    const colors = useContext(Colors)
    const [color, setColor] = useState(colors)
    console.log(colors[0].hex)
    return (
        <div className='palette'>
            <div className='title'>
                <h1>Create Palette</h1>
                <p>Let's create your colorful palettes.</p>
            </div>
            <CreatePalette name='create-palette' color={colors} />
            <div className='controller'>
                <div className='color-picker'>
                    <Color id={color[0].id} color={color[0].hex} />
                    <Color id={color[1].id} color={color[1].hex} />
                    <Color id={color[2].id} color={color[2].hex} />
                    <Color id={color[3].id} color={color[3].hex} />
                    <Color id={color[4].id} color={color[4].hex} />
                </div>
                <div>
                    <button className='export'>Export</button>
                </div>
            </div>
        </div>
    )
}
