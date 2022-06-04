import Tina from '../.tina/components/TinaDynamicProvider.js'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import RootLayout from '../components/layouts/RootLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Tina>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Tina>
  )
}

export default MyApp
