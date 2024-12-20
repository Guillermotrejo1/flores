import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section id="contact" className="bg-secondaryColor py-16">
      <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className="container flex flex-col gap-5 mg:items-center md:flex-row">
        <div className="space-y-4 md:flex-1">
          <h2 className="section__title text-blackColor">GET EXCLUSIVE UPDATE</h2>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:flex-1">
          <input type="email" placeholder="Email Address" className="p-2 text-blackColor
          rounded-lg outline-none md:w-full" />
          <a href="" className="flex items-center justify-center gap-2 btn
          bg-blackColor hover:opacity-75" >
            <FontAwesomeIcon icon={faPaperPlane} />
            Subscribe</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
