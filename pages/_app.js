import Layouts from '@/components/Layouts/Layouts'
import Preloader from '@/components/Preloader/Preloader';
import '@/styles/globals.css'
import "@/styles/globals.css";
import "@/styles/heroSwiper.css"
import "@/styles/trustSwiper.css"

import '../styles/Info.css'

export default function App({ Component, pageProps }) {
  return (
<Layouts>
  <Preloader/>
  <Component {...pageProps} />
</Layouts>
  )
}
