import { useWalletClient } from "wagmi";
import { providers } from 'ethers5'
import { useMemo } from "react";

export function walletClientToSigner(walletClient) {
  const { account, chain, transport } = walletClient
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  const provider = new providers.Web3Provider(transport, network)
  const signer = provider.getSigner(account.address)
  return signer
}

function useEthersSigner({ chainId }) {
  const { data: walletClient } = useWalletClient({ chainId })
  return useMemo(
    () => (walletClient ? walletClientToSigner(walletClient) : undefined),
    [walletClient],
  )
}

export default useEthersSigner