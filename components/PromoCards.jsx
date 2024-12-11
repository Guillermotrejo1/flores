import Image from "next/image";
import PromoImg1 from "../public/img/promo-1.png";
import PromoImg2 from "../public/img/promo-2.png";

const PromoCards = () => {
  return (
    <div className="container flex flex-col gap-5 lg:gap-10 lg:flex-row">
      <div className="bg-primaryColorLight flex flex-col p-5 rounded-lg
      md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
        <Image src={PromoImg1} alt="Promo Image1" className="w-40 mx-auto hover:animate-movingY
        md:mx-5" />
        <div className="space-y-2 pt-5 md:pt-0">
          <p className="text-xs text-secondaryColor">Payday promo</p>

          <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
          <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className="text-xs text-secondaryColor">Buy online</a>
        </div>
      </div>
      <div className="bg-primaryColorLight flex flex-col p-5 rounded-lg
      md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
        <Image src={PromoImg2} alt="Promo Image2" className="w-40 mx-auto hover:animate-movingY
        md:mx-5" />
        <div className="space-y-2 pt-5 md:pt-0">
          <p className="text-xs text-secondaryColor">Payday promo</p>

          <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
          <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className="text-xs text-secondaryColor">Buy online</a>
        </div>
      </div>
    </div>
  );
};

export default PromoCards;
