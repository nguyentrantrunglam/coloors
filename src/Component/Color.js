import React, { useContext, useState } from 'react'
import { Colors } from '../Context';

export default function Color(props) {
    const colors = useContext(Colors)
    console.log(colors[0].hex)
    const [color, setColor] = useState(props.color);
    
    
    return (
        <div className='color-picker_item'>
            <p>{`Color ${props.id}`}</p>
            <div>
                <input type="text" value={color} onChange={e => setColor(e.target.value)} />
                <div className='input-color'>
                    <input type="color" value={color} onChange={e => {
                        setColor(e.target.value)
                        colors[props.id-1].hex= e.target.value
                    }}></input>
                </div>
            </div>
        </div>
    )
}

