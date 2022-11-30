import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainContainer from '../components/MainContainer'
import { Main } from 'next/document'
import { ContextProvider } from '../context/Context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </ContextProvider>
  
  )
}
