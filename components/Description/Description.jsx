import React from "react";
import s from "./Description.module.scss";
import Image from "next/image";
import { description } from "../constans/Description";
const Description = () => {
  return (
    <div className={s.description}>
      <div className="container">
        <div className={s.description_des}>
          <h2 className={s.description_des_title}>
            Accepting payments should not be hard
          </h2>
          <p className={s.description_des_text}>
            Acccept payment using invoice, quick checkout, API’s and payment
            buttons
          </p>
          <Image
            src="/description-shape.png"
            alt="shape"
            width={325}
            height={92}
          />
        </div>{" "}

        <div className={s.cards}>
          <Image className={s.cards_blue} src="/description-blue.png" alt="blue" width={50} height={45} />
          <Image className={s.cards_green} src="/description-green .png" alt="green" width={134} height={123} />
          {description.map((description) => (
            <div key={description.id} className={s.cards_card}>
              <div className={s.cards__card_img}>
                <Image
                  src={description.img}
                  width={324}
                  height={320}
                  alt="icon"
                />
              </div>
              <div className={s.cards_card_text}>
                <h2 className={s.cards_card_text__title}>{description.title}</h2>
                <p className={s.cards_card_text__set}>{description.text}</p>
                <p className={s.cards_card_text__des}>{description.destext}</p>
                <p className={s.cards_card_strela}>
                  <Image
                    src={description.imgstrela}
                    width={24}
                    height={10}
                    alt="strela"
                  ></Image>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={s.description_bottom__title}>
          <h2 className={s.description_bottom__title_text}>Having issues with integration and setup</h2>
          <button className={s.description_bottom__title_btn}>Let us know</button>
        </div>
      </div>
    </div>
  );
};

export default Description;
