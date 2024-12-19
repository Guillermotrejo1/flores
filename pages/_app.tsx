import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { library } from '@fortawesome/fontawesome-svg-core'
//solid icons
import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft, faDroplet, faUtensils, faLeaf, faCheck, faQuoteRight, faPaperPlane, faPhone, faEnvelope, faLocationDot, faArrowUp } from '@fortawesome/free-solid-svg-icons'
//brands icons
import { faFacebook, faTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft, faDroplet, faUtensils, faLeaf, faCheck, faQuoteRight, faPaperPlane, faPhone, faEnvelope, faFacebook, faTwitter, faSquareInstagram, faLocationDot, faArrowUp)

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return <Component {...pageProps} />;
}
