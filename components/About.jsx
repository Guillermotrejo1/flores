import Image from "next/image";
import AboutImg from "../public/img/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="container flex flex-col gap-10 md:flex-row">
        <div className="flex-1">
          <Image src={AboutImg} alt="About Image" className="rounded-lg"/>
        </div>
          <div className="flex-1">
            <h2 className="section__title">FIND FOOD AND DRINKS, ALL-IN-ONE PLACE FOR YOUR BEST TASTE</h2>
            <div className="separator"></div>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              nesciunt quis debitis sit modi perferendis dicta corporis! Quasi
              rem minima, expedita enim nobis voluptatem.
            </p>
            <ul className="grid grid-cols-2 py-5 space-y-1">
              <li className="text-xs text-paragraphColor">
                <FontAwesomeIcon icon={faCheck} className="text-secondaryColor" /> Best Price
              </li>
              <li className="text-xs text-paragraphColor">
                {" "}
                <FontAwesomeIcon icon={faCheck} className="text-secondaryColor" /> Fresh Ingredients
              </li>
              <li className="text-xs text-paragraphColor">
                {" "}
                <FontAwesomeIcon icon={faCheck} className="text-secondaryColor" /> Best Service
              </li>
              <li className="text-xs text-paragraphColor">
                {" "}
                <FontAwesomeIcon icon={faCheck} className="text-secondaryColor" /> Health Protocol
              </li>
            </ul>
              <a href="" className="btn btn-primary">About Us</a>
          </div>
      </div>
    </section>
  );
};

export default About;
