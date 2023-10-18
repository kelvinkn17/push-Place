import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

const PixelCanvas = () => {
  const width = 40;
  const height = 30;

  const handlePixelClick = (x, y) => {
    console.log(`Clicked at: x=${x}, y=${y}`);
  };

  const [hoveredPixel, setHoveredPixel] = useState(null)
  const handleMouseOver = (x, y) => {
    console.log(`Hovered at: x=${x}, y=${y}`);
    setHoveredPixel({ x, y })
  };

  return (
    <div className='w-full flex flex-col'>
      <div className='w-fit'>
        <div className='flex flex-col bg-white shadow-xl shadow-black/10 border-4 border-black'>
          {/* Canvas */}
          <div className="grid bg-primary-50 w-fit border-b-2 border-black" style={{ gridTemplateColumns: `repeat(${width}, 30px)` }}
            // if mouse not hover in the grid, then the coordinate will be null
            onMouseLeave={() => setHoveredPixel(null)}
          >
            {Array.from({ length: height * width }, (_, index) => {
              const x = index % width;
              const y = Math.floor(index / width);
              return (
                <div
                  key={`${x}-${y}`}
                  className="w-[30px] h-[30px] bg-white hover:border-2 hover:border-black hover:bg-gray-100 border border-black/5"
                  onClick={() => handlePixelClick(x, y)}
                  onMouseOver={() => handleMouseOver(x, y)}
                />
              );
            })}
          </div>

          {/* Coordinate */}
          <div className='text-lg font-medium p-2 flex flex-row justify-between'>
            <div>
              <span>{hoveredPixel ? `[${hoveredPixel.x}, ${hoveredPixel.y}]` : <span className='opacity-40'>-</span>}</span>
            </div>

            <div>
              Powered by <a href="https://push.org/" target="_blank" className='font-bold' rel="noopener noreferrer">Push Protocol 🔔</a>
            </div>
          </div>
        </div>

        <div className='flex flex-row items-center justify-between w-full mt-4'>
          <ColorPicker />

          <div className='text-right max-w-[32rem]'>
            <h1 className='text-2xl font-semibold'>
              push/Place
            </h1>
            <p className='font-medium leading-tight mt-1'>
              You guys want it out of the box?? We put Push Protocol
              <br />
              to power what inside the box instead 💪💪💪
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelCanvas;
