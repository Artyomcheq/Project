import React from "react";
import s from "./About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className="container">
      <div className={s.about}>
        <div className={s.about_titels}>
          <h2 className={s.about_titels__title}>
            {" "}
            <span>20000+ </span> trusted by thousands of sellers
          </h2>
          <Image
            className={s.about_titels__title_img}
            src="/about-shape.png"
            alt="spape"
            width={257}
            height={92}
          />
          <p className={s.about_titels_text}>
            Your money and customer data is in safe hand. Best in class security
            and encryption.
          </p>
        </div>
        <div className={s.about_cards}>
          <div className={s.about_cards__card}>
            <h3 className={s.about_cards__card_title}>
              Fastest growing gateway
            </h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className={s.about_cards__card}>
            <h3 className={s.about_cards__card_title}>
              Your personal success manager
            </h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className={s.about_cards__card}>
            <h3 className={s.about_cards__card_title}>
              Hassel free integration
            </h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className={s.about_info}>
          <div className={s.about_info__number}>
            <div className={s.about_info__number_set}>
              <h2 className={s.set_title}>2300+</h2>
              <p className={s.set_text}>Sellers</p>
            </div>
            <div className={s.about_info__number_tes}>
              <h2 className={s.set_title}>32K</h2>
              <p className={s.set_text}>Sellers</p>
            </div>
            <div className={s.about_info__number_des}>
              <h2 className={s.set_title}>12b+</h2>
              <p className={s.set_text}>Sellers</p>
            </div>
          </div>
          <div className={s.about_info__text}>
            <Image src="/about-oval.png" alt="oval" width={219} height={101} />
            <h2 className={s.title}>Another money heading goes here</h2>
            <p className={s.text}>
              Ask CDCR San Quintin State Prison 2008. We installed Purex
              dispensers throughout the prison to combat diseases…and it was a
              Roaring Success (as in Roaring Drunk) I mean we had Long lines of
              prisoners fist fighting to use them.
            </p>
            <button className={s.btn}>Sign up now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
