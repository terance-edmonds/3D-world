import Layout from '../layout/Layout'
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <title>3D World</title>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
