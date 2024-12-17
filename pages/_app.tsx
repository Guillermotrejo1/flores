import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { library } from '@fortawesome/fontawesome-svg-core'
//solid icons
import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft, faDroplet, faUtensils, faLeaf, faCheck, faQuoteRight, faPaperPlane, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
//brands icons
import { faFacebook, faTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft, faDroplet, faUtensils, faLeaf, faCheck, faQuoteRight, faPaperPlane, faPhone, faEnvelope, faFacebook, faTwitter, faSquareInstagram, faLocationDot)

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
