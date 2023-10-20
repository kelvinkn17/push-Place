import { PushProtocolProvider } from "./context/PushProtocolContext"
import { WalletProvider } from "./context/WalletContext"
import CanvasPage from "./page/CanvasPage"

function App() {
  return (
    <>
      <WalletProvider>
        <PushProtocolProvider>
          <CanvasPage />
        </PushProtocolProvider>
      </WalletProvider>
    </>
  )
}

export default App
