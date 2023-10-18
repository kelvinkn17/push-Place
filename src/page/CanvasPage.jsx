import PixelCanvas from '../components/PixelCanvas';

export default function CanvasPage() {
  return (
    <div className='container mx-auto py-8'>
      <div className='grid grid-cols-12 mt-4 gap-4'>
        <div className='col-span-10'>
          <PixelCanvas />
        </div>

        <div className='col-span-2'>
          <div>
            Canvas Chat Box
          </div>

          <div>
            Chat Box
          </div>
        </div>
      </div>
    </div>
  )
}
