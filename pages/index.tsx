import Header from "../components/Header.jsx"
import Hero from "../components/Home.jsx"
import Category from "../components/Category.jsx"
import Promo from "../components/Promo.jsx"
import About from "../components/About.jsx"

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <Category />
      <Promo />
      <About />
    </main>
    </>
  );
}
