import Layouts from '@/components/Layouts/Layouts'
import '@/styles/globals.css'
import "@/styles/globals.css";
import "@/styles/heroSwiper.css"
import "@/styles/trustSwiper.css"


export default function App({ Component, pageProps }) {
  return (
<Layouts>
  <Component {...pageProps} />
</Layouts>
  )
}
