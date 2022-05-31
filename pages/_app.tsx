import Tina from '../.tina/components/TinaDynamicProvider.js'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Tina>
      <Component {...pageProps} />
    </Tina>
  )
}

export default MyApp
