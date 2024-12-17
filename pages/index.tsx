import Header from "../components/Header.jsx"
import Hero from "../components/Home.jsx"
import Category from "../components/Category.jsx"
import Promo from "../components/Promo.jsx"
import About from "../components/About.jsx"
import Menu from "../components/Menu.jsx"
import Review from "../components/Review.jsx"
import Contact from "../components/Contact.jsx"
import Footer  from "../components/Footer.jsx"

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <Category />
      <Promo />
      <About />
      <Menu />
      <Review />
      <Contact />
      <Footer />
    </main>
    </>
  );
}
