import { Web3Button, useWeb3Modal } from '@web3modal/react'
import React from 'react'
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'

export default function WalletButton() {
  const { chain, chains } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const { isConnected, address } = useAccount()
  const { open, close } = useWeb3Modal()

  if (!isConnected) {
    return (
      <button
        onClick={() => open()}
        className='btn btn-primary font-bold'>
        Connect Wallet
      </button>
    )
  }

  if (isConnected && chain?.unsupported) {
    return (
      <button className={`btn btn-error font-bold`}
        onClick={() => switchNetwork(chains[0].id)}
      >
        Change Network
      </button>
    )
  }

  return (
    <Web3Button />
  )
}
