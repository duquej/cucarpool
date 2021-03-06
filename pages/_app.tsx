import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "styled-components";
import { defaultTheme } from '../themes/whiteTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={defaultTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
