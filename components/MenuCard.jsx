import Image from "next/image";
import Burger1 from "../public/img/burger-1.png";
import Burger2 from "../public/img/burger-2.png";
import Burger3 from "../public/img/burger-3.png";
import Burger4 from "../public/img/burger-4.png";
import Burger5 from "../public/img/burger-5.png";

import Snack1 from "../public/img/snack-1.png"
import Snack2 from "../public/img/snack-2.png"
import Snack3 from "../public/img/snack-3.png"
import Snack4 from "../public/img/snack-4.png"
import Snack5 from "../public/img/snack-5.png"
import Snack6 from "../public/img/snack-6.png"

import Beverage1 from "../public/img/beverage-1.png"
import Beverage2 from "../public/img/beverage-2.png"
import Beverage3 from "../public/img/beverage-3.png"
import Beverage4 from "../public/img/beverage-4.png"
import Beverage5 from "../public/img/beverage-5.png"

const MenuCard = () => {
  return (
    <div>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <li>
          <div
            className="h-56 grid place-items-center bg-primaryColorLight
              rounded-3xl hover:bg-secondaryColor ease-linear duration-200
              lg:h-40"
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
              lg:h-40"
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
              lg:h-40"
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
              lg:h-40"
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
              lg:h-40"
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

        {/* Snacks */}
        <li>
          <div
            className="h-56 grid place-items-center bg-primaryColorLight
              rounded-3xl hover:bg-secondaryColor ease-linear duration-200
              lg:h-40"
          >
            <Image
              src={Snack1}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">French Fries</h4>
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
              lg:h-40"
          >
            <Image
              src={Snack2}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">French Fries</h4>
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
              lg:h-40"
          >
            <Image
              src={Snack3}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">French Fries</h4>
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
              lg:h-40"
          >
            <Image
              src={Snack4}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">French Fries</h4>
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
              lg:h-40"
          >
            <Image
              src={Snack5}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">French Fries</h4>
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
              lg:h-40"
          >
            <Image
              src={Snack6}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">French Fries</h4>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>

        {/* Beverage */}

        <li>
          <div
            className="h-56 grid place-items-center bg-primaryColorLight
              rounded-3xl hover:bg-secondaryColor ease-linear duration-200
              lg:h-40"
          >
            <Image
              src={Beverage1}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Sweet Smoothie</h4>
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
              lg:h-40"
          >
            <Image
              src={Beverage2}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Sweet Smoothie</h4>
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
              lg:h-40"
          >
            <Image
              src={Beverage3}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Sweet Smoothie</h4>
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
              lg:h-40"
          >
            <Image
              src={Beverage4}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Sweet Smoothie</h4>
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
              lg:h-40"
          >
            <Image
              src={Beverage5}
              alt="Food Image"
              width={160}
              height={160}
              className="hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Sweet Smoothie</h4>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default MenuCard;
