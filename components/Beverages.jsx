import Image from "next/image"

import Beverage1 from "../public/img/beverage-1.png"
import Beverage2 from "../public/img/beverage-2.png"
import Beverage3 from "../public/img/beverage-3.png"
import Beverage4 from "../public/img/beverage-4.png"
import Beverage5 from "../public/img/beverage-5.png"

const Beverages = () => {
  return (
    <>
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
    </>
  )
}

export default Beverages