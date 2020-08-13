import 'pure-react-carousel/dist/react-carousel.es.css'
import 'react-dropdown/style.css'
import '../styles/main.css'
import App from "next/app"
import Axios from 'axios'

function MyApp({ Component, pageProps, footer }) {
  return <Component {...pageProps} footer={footer} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const info = await Axios.get(`${process.env.BASE_URL}/api/collections/info`)

  return { ...appProps, footer: info.data.data[0] }
}

export default MyApp
