import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles)
  }, [])

  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
