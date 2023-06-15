import React from "react";
import s from "./Hero.module.scss";
import Image from "next/image";
import { bottomRowInfo, heroStar } from "@/constans/hero";

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
              <button><span>Read the</span> developer docs</button>
            </div>
            <div className={s.elements_left_reviews}>
              <h3>4.7</h3>
              <div className={s.elements_left_reviews_rating}>
                <p>top rated on trustpilot</p>
                <div className={s.left_reviews_rating_stars}>
                  {heroStar.map((item) => (
                    <Image
                      key={item.id}
                      src={item.img}
                      width={15}
                      height={15}
                      alt="star"
                    />
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
            {bottomRowInfo.map((item) => (
              <div key={item.id} className={s.bottom_card_inormation}>
                <Image src={item.img} width={53} height={53} alt="tick" />
                <div className={s.bottom_card_inormation_desc}>
                  <h3>{item.name}</h3>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
