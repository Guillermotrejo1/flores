import Image from "next/image"
import Burger1 from "../public/img/burger-1.png"
import Snack1 from "../public/img/snack-1.png"
import Beverage2 from "../public/img/beverage-2.png"

const Card = () => {
  return (
    <>
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className="container flex flex-col gap-5 md:flex-row">
        <div className="bg-secondaryColor flex py-3 rounded-lg overflow-hidden md:flex-1">
          <div className="basis-1/3 relative">
            <Image
              src={Burger1}
              alt="Category Image"
              width={200}
              height={200}
              className="absolute w-28 -bottom-4 -left-4"
            />
          </div>

          <div>
            <div className="mb-2">
              <h4 className="card__title">Food</h4>
              <p className="text-xs">Lorem ipsum dolor, sit amet</p>
            </div>
            <a href="#" className="text-blackColor cursor-pointer">Buy Online</a>
          </div>
        </div>
        <div className="bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1">
          <div className="basis-1/3 relative">
            <Image
              src={Snack1}
              alt="Category Image"
              width={200}
              height={200}
              className="absolute w-28 -bottom-4 -left-4"
            />
          </div>

          <div>
            <div className="mb-2">
              <h4 className="card__title">Snack</h4>
              <p className="text-xs">Lorem ipsum dolor, sit amet</p>
            </div>
            <a href="#" className="text-secondaryColor cursor-pointer">Buy Online</a>
          </div>
        </div>
        <div className="bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1">
          <div className="basis-1/3 relative">
            <Image
              src={Beverage2}
              alt="Category Image"
              width={200}
              height={200}
              className="absolute w-28 -bottom-4 -left-4"
            />
          </div>

          <div>
            <div className="mb-2">
              <h4 className="card__title">Beverage</h4>
              <p className="text-xs">Lorem ipsum dolor, sit amet</p>
            </div>
            <a href="#" className="text-secondaryColor cursor-pointer">Buy Online</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
