import Nav from '../components/layout/Nav'
import Head from '../components/layout/Head'
import '../styles/globals.css'
import Container from '../components/layout/Container'
import { AuthProvider } from '../context/AuthContext'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Head />
        <Nav />
        <Container>
          <Component {...pageProps} />
        </Container>
      </AuthProvider>
    </>
  )
}

export default MyApp
