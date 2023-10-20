import { PushAPI } from "@pushprotocol/restapi"
import { createSocketConnection, EVENTS } from "@pushprotocol/socket"
import { useWalletClient } from "wagmi"
import useEthersSigner from "../hooks/useEthersSigner"

export const PushProtocolProvider = ({ children }) => {
  const { data: walletClient } = useWalletClient({
    chainId: 1
  })

  const signer = useEthersSigner({
    chainId: 1
  })

  return (
    <>
      {children}
    </>
  )
}