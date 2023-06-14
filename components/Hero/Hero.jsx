import React from "react";
import s from "./Hero.module.scss";
import Image from "next/image";
import { heroStar } from "@/constans/hero";

const Hero = () => {
  return (
    <div className="container">
      <div className={s.hero}>
        <div className={s.hero_background}>
          <Image
            src="/heroBackground.png"
            alt="background"
            width={2000}
            height={1100}
          />
        </div>
        <div className={s.hero_elements}>
          <div className={s.hero_elements_left}>
            <div className={s.elements_left_title}>
              <h1>Start accepting payments in 3 minutes</h1>
              <Image
                src="/heroShape.png"
                width={416}
                height={168}
                alt="heroShape"
              />
            </div>
            <p>
              Integrate xyz payment gateway without any technical knowledge.{" "}
            </p>
            <div className={s.elements_left_btns}>
              <button>Start now</button>
              <button>Read the developer docs</button>
            </div>
            <div className={s.elements_left_reviews}>
              <h3>4.7</h3>
              <div className={s.elements_left_reviews_rating}>
                <p>top rated on trustpilot</p>
                <div className={s.left_reviews_rating_stars}>
                  {heroStar.map((item) => (
                    <Image key={item.id} src={item.img} width={15} height={15} alt="star" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={s.hero_element_right}>
            <Image src="/heroImg.png" height={500} width={550} alt="heroImg" />
          </div>
        </div>
        <div className={s.hero_bottom_card_position}>
          <div className={s.hero_bottom_card}>
            <div className={s.bottom_card_inormation}>
              <Image src="/pinkTick.png" width={53} height={53} alt="tick" />
              <div className={s.bottom_card_inormation_desc}>
                <h3>code free setup</h3>
                <p>One click integration</p>
              </div>
            </div>
            <div className={s.bottom_card_inormation}>
              <Image src="/blueTick.png" width={53} height={53} alt="tick" />
              <div className={s.bottom_card_inormation_desc}>
                <h3>Lowest Price</h3>
                <p>transaction fee, lowest in Industry</p>
              </div>
            </div>
            <div className={s.bottom_card_inormation}>
              <Image src="/yellowTick.png" width={53} height={53} alt="tick" />
              <div className={s.bottom_card_inormation_desc}>
                <h3>Global withdrawals</h3>
                <p>Instant transfer to your bank account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
