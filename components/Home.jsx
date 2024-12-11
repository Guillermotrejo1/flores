import Image from "next/image";
import homeImage from "../public/img/home-image.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faDroplet, faLeaf } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <section id="home">
      <div className="container flex flex-col items-center gap-10 md:flex-row">
        <div className="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">
          <Image src={homeImage}
           alt="HOMEIMAGE"
            width={240}
            height={240}
            className="md:w-[300px] lg:w-[400px] h-full object-cover" />
        </div>

        <div className="text-center md:basis-1/2 md:text-start lg:basis-3/5">
          <h1 className="home__title">HAPPY TUMMY WITH TASTY BURGERS</h1>
          <div className="separator mx-auto md:mx-0"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            nesciunt, nulla consectetur modi fugit reiciendis libero minima sed.
            Doloribus molestiae reprehenderit officiis nisi perspiciatis culpa
            nesciunt aspernatur, delectus deserunt repellendus!
          </p>
          <div className="text-base flex items-center justify-center gap-4 py-10
          md:justify-start md:gap-20">
            <div className="text-center">
                <FontAwesomeIcon icon={faUtensils} className="text-4xl text-secondaryColor"/>
                <br />
                Delicious
            </div>
            <div className="text-center">
            <FontAwesomeIcon icon={faDroplet} className="text-4xl text-secondaryColor"/>
                <br />
                Fresh
            </div>
            <div className="text-center">
            <FontAwesomeIcon icon={faLeaf} className="text-4xl text-secondaryColor"/>
                <br />
                Organic
            </div>
          </div>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
