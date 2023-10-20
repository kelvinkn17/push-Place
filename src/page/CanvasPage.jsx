import { useAccount, useWalletClient } from 'wagmi';
import PixelCanvas from '../components/PixelCanvas';
import WalletButton from '../components/WalletButton';
import { Chat } from '@pushprotocol/uiweb';

export default function CanvasPage() {
  const { isConnected } = useAccount()

  if (!isConnected) {
    return (
      <div className='container mx-auto py-8 w-full flex'>
        <div className='w-full h-full flex flex-col min-h-[90vh] items-center justify-center'>
          <h1 className='font-bold text-2xl'>
            *Welcoming Message Here*
          </h1>
          <p className='text-lg'>
            *Catchy Subtitle Here*
          </p>

          <div className='mt-10'>
            <WalletButton />
          </div>
        </div>
      </div>
    )
  }

  return (
    <CanvasBoard />
  )
}


const CanvasBoard = () => {
  const { address } = useAccount()
  const { data: signer } = useWalletClient({
    chainId: 1
  })
  console.log(signer)

  return (
    <div className='container mx-auto py-8'>
      <div className='grid grid-cols-12 mt-4 gap-4'>
        <div className='col-span-10'>
          <PixelCanvas />
        </div>

        <div className='col-span-2'>
          <div className='flex flex-col gap-4'>
            <div className='w-full flex justify-center'>
              <WalletButton />
            </div>

            <div>
              Canvas Chat Box (read)
            </div>

            <div>
              Canvas Chat Box
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}