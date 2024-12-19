import { faFacebook, faSquareInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <section className="footer">
      <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" className="container">
        <ul className="grid grid-cols-1 items-start gap-5 pb-5 mb:grid-cols-2 lg:grid-cols-4">
          <li>
            <div className="space-y-3">
              <a href="" className="text-4xl font-oswald uppercase">
                Bur<span className="text-secondaryColor">ger</span>
              </a>

              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, amet unde accusantium explicabo dignissimos eos
                delectus eaque consectetur magnam?
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-3">
                <h3 className="text-lg uppercase font-oswald">Support</h3>
                <a href="" className="text-xs hover:text-secondaryColor">FAQ&apos;s</a>
                <a href="" className="text-xs hover:text-secondaryColor">Privacy</a>
                <a href="" className="text-xs hover:text-secondaryColor">Term & condition</a>
                <a href="" className="text-xs hover:text-secondaryColor">Contact</a>
            </div>
          </li>
          <li className="space-y-8">
            <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">phone</h3>

                <p className="flex-items-center gap-2 text-xs">
                    <FontAwesomeIcon icon={faPhone} className="text-lg text-secondaryColor mr-2" />
                     +1 000 000 0000
                </p>
            </div>
            <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">Email</h3>

                <p className="flex-items-center gap-2 text-xs">
                    <FontAwesomeIcon icon={faEnvelope} className="text-lg text-secondaryColor mr-2" />
                    burger.info@email.com
                </p>
            </div>
          </li>
          <li className="space-y-8">
            <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">Address</h3>

                <p className="flex-items-center gap-2 text-xs">
                    <FontAwesomeIcon icon={faLocationDot} className="text-lg text-secondaryColor mr-2" />
                    Address goes here
                </p>
            </div>
            <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">follow us</h3>

                <div className="space-x-3">
                    <FontAwesomeIcon icon={faFacebook} className="text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200" />
                    <FontAwesomeIcon icon={faTwitter} className="text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200" />
                    <FontAwesomeIcon icon={faSquareInstagram} className="text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200" />
                </div>
            </div>
          </li>
        </ul>

        <div className="flex flex-col items-center border-t border-primaryColorLight py-5 md:flex-row md:justify-between dark:border-darkColorLight">
            <p className="paragraph">Burger Template kit by Light Code</p>
            <p className="paragraph">Copyright © 2024. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
