'use client'

import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum"
import { Web3Modal } from "@web3modal/react"
import { WagmiConfig, configureChains, createConfig, mainnet } from "wagmi"
import { goerli } from "wagmi/chains"

// import { configureChains } from "wagmi"

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

export const WalletProvider = ({ children }) => {
  const desiredChain = [mainnet]

  const { publicClient, chains } = configureChains(
    desiredChain,
    [
      w3mProvider({
        projectId
      })
    ]
  )

  const config = createConfig({
    autoConnect: true,
    publicClient,
    connectors: w3mConnectors({
      projectId,
      chains
    })
  })

  const ethereumClient = new EthereumClient(config, chains)

  return (
    <>
      <WagmiConfig config={config}>{children}</WagmiConfig>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeMode="light"
        themeVariables={{
          '--w3m-font-family': 'Red Hat Display, sans-serif',
          '--w3m-accent-color': '#F480D3',
          '--w3m-background-color': '#F480D3',
        }}
      />
    </>
  )
}