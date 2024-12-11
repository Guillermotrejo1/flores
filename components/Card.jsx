import Image from "next/image"
import burger1 from "../public/img/burger-1.png"

const Card = () => {
  return (
    <>
      <div className="container flex flex-col gap-5">
        <div className="bg-secondaryColor flex py-3 rounded-lg overflow-hidden">
          <div className="basis-1/3 relative">
            <Image
              src={burger1}
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
      </div>
    </>
  );
};

export default Card;
