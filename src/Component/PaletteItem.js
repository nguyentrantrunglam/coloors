import React, { useContext, useState } from 'react'
import { Colors } from '../Context';

export default function PaletteItem(props) {
    

    const colors = useContext(Colors)
    const [color, setColor] = useState(colors[props.paletteNumber].palette[props.id-1].hex)
    function hexToRGB(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            var r = parseInt(result[1], 16);
            var g = parseInt(result[2], 16);
            var b = parseInt(result[3], 16);
            return r + g + b;//return 23,14,45 -> reformat if needed 
        }
    }
    var textColorValue = '';
    function firstTextColor(value) {
        const hex = value;
        if (hexToRGB(hex) < 380) {
            textColorValue = "white"
        } else {
            textColorValue = "black"
        }
    }
    firstTextColor(color);
    const [textColor, setTextColor] = useState(textColorValue);
    function newTextColor(value) {
        const hex = value;
        if (hexToRGB(hex) < 380) {
            setTextColor("white")
        } else {
            setTextColor("black")
        }
    }
    props.onReceiveId(props.id)
    props.onReceiveData(color)
    
    return (
        <div className='item'>
            <div className='color'
                id={`color${props.id}`}
                style={{ backgroundColor: `${color}` }}
                onClick={() => {
                    navigator.clipboard.writeText(color.toUpperCase())
                    alert(`Copied ${color.toUpperCase()}`)
                }}>
                <p className='color-hex' style={{ color: `${textColor}` }} >{color.toUpperCase()}</p>
            </div>
            <p>Color {props.id}</p>
            <div className='input'>
                <div className='text-input'>
                    <input
                        type='text'
                        value={color.toUpperCase()}
                        onChange={e => {
                            newTextColor(e.target.value)
                            setColor(e.target.value)
                            props.onReceiveId(props.id)
                        }} >
                    </input>
                </div>
                <div className='color-input'>
                    <input
                        type='color'
                        value={color.toUpperCase()}
                        onChange={e => {
                            newTextColor(e.target.value)
                            setColor(e.target.value)
                            props.onReceiveId(props.id)
                        }} >
                    </input>
                </div>
            </div>
        </div >
    )
}
