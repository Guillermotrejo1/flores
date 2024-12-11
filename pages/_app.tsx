import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft, faDroplet, faUtensils, faLeaf } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft, faDroplet, faUtensils, faLeaf)

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
