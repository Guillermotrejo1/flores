import Image from "next/image"

import Snack1 from "../public/img/snack-1.png"
import Snack2 from "../public/img/snack-2.png"
import Snack3 from "../public/img/snack-3.png"
import Snack4 from "../public/img/snack-4.png"
import Snack5 from "../public/img/snack-5.png"
import Snack6 from "../public/img/snack-6.png"

const Snacks = () => {
  return (
    <>
     <li>
          <div
            className="h-56 grid place-items-center bg-primaryColorLight
              rounded-3xl hover:bg-secondaryColor ease-linear duration-200
              lg:h-40 dark:bg-darkColorLight"
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
              lg:h-40 dark:bg-darkColorLight"
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
              lg:h-40 dark:bg-darkColorLight"
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
              lg:h-40 dark:bg-darkColorLight"
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
              lg:h-40 dark:bg-darkColorLight"
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
              lg:h-40 dark:bg-darkColorLight"
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
    </>
  )
}

export default Snacks