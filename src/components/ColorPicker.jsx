import React from 'react'
import { PIXEL_COLORS } from '../constants'

export default function ColorPicker() {
  const width = 12;
  const height = 2;

  const onSelect = (index, color) => {
    console.log(`Selected color: ${color} at index: ${index}`)
  }

  return (
    <div className='bg-white w-fit p-2 shadow-xl shadow-black/10 border-4 border-black'>
      <div className="grid bg-primary-50 w-fit gap-2" style={{ gridTemplateColumns: `repeat(${width}, 30px)` }}>
        {PIXEL_COLORS.slice(0, width * height).map((color, index) => (
          <div
            key={index}
            className="w-8 h-8 cursor-pointer hover:border-4 hover:border-black/60 hover:-translate-y-1 hover:bg-dark-100 border border-black/10"
            style={{ backgroundColor: color }}
            onClick={() => onSelect(index, color)}
          ></div>
        ))}
      </div>
    </div>
  )
}
