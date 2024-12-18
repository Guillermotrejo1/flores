import Image from "next/image";

import Burger1 from "../public/img/burger-1.png";
import Burger2 from "../public/img/burger-2.png";
import Burger3 from "../public/img/burger-3.png";
import Burger4 from "../public/img/burger-4.png";
import Burger5 from "../public/img/burger-5.png";

const Burgers = () => {
  return (
    <>
    <li>
          <div
            className="h-56 grid place-items-center bg-primaryColorLight
              rounded-3xl hover:bg-secondaryColor ease-linear duration-200
              lg:h-40 dark:bg-darkColorLight"
          >
            <Image
              src={Burger1}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">REGULAR BEEF BURGER</h4>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>
        <li>
          <div
            className="h-56 grid place-items-center bg-primaryColorLight
              rounded-3xl hover:bg-secondaryColor ease-linear duration-200
              lg:h-40 dark:bg-darkColorLight"
          >
            <Image
              src={Burger2}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">REGULAR BEEF BURGER</h4>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>
        <li>
          <div
            className="h-56 grid place-items-center bg-primaryColorLight
              rounded-3xl hover:bg-secondaryColor ease-linear duration-200
              lg:h-40 dark:bg-darkColorLight"
          >
            <Image
              src={Burger3}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">REGULAR BEEF BURGER</h4>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>
        <li>
          <div
            className="h-56 grid place-items-center bg-primaryColorLight
              rounded-3xl hover:bg-secondaryColor ease-linear duration-200
              lg:h-40 dark:bg-darkColorLight"
          >
            <Image
              src={Burger4}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">REGULAR BEEF BURGER</h4>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>
        <li>
          <div
            className="h-56 grid place-items-center bg-primaryColorLight
              rounded-3xl hover:bg-secondaryColor ease-linear duration-200
              lg:h-40 dark:bg-darkColorLight"
          >
            <Image
              src={Burger5}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">REGULAR BEEF BURGER</h4>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>
    </>
  )
}

export default Burgers