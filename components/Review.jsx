import ReviewCard from "./ReviewCard";
import { useEffect } from "react";

const Review = () => {
    useEffect(() => {
        const swiper = new window.Swiper(".swiper", {
        speed: 400,
        spaceBetween: 50,
        autoplay: {
        },
        direction: "horizontal",
        loop: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        breakpoints: {
            1024: {slidesPerView: 2,
            }
        }
        });
        swiper.init();
        }, []);

  return (
    <section id="review" className="bg-primaryColorLight py-20 dark:bg-darkColorLight">
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className="container">
        <div className="max-w-md mx-auto text-center">
          <h2 className="section__title">CUSTOMER REVIEW</h2>
          <div className="separator mx-auto"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa hic a
            natus vitae voluptatem.
          </p>
          <div className="swiper py-10">
            <div className="swiper-wrapper">
              <ReviewCard
                imageSrc="/img/review-1.jpg"
                name="John Doe"
                occupation="Designer"
                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic a natus vitae voluptatem."
              />
              <ReviewCard
                imageSrc="/img/review-2.jpg"
                name="Jane Doe"
                occupation="Developer"
                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic a natus vitae voluptatem."
              />
              <ReviewCard
                imageSrc="/img/review-3.jpg"
                name="Bob Smith"
                occupation="Manager"
                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic a natus vitae voluptatem."
              />
              <ReviewCard
                imageSrc="/img/review-4.jpg"
                name="Alice Johnson"
                occupation="Engineer"
                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic a natus vitae voluptatem."
              />
              <ReviewCard
                imageSrc="/img/review-5.jpg"
                name="Mike Brown"
                occupation="Architect"
                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic a natus vitae voluptatem."
              />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
