import React from "react";
import s from "./Description.module.scss";
import Image from "next/image";
import { description } from "../../constans/Description";
import { motion } from "framer-motion";
import { textAnimation, textAnimationtop} from "../../constans/animation"


const Description = () => {

  
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    className={s.description}>
      <div className="container">
        <div className={s.description_des}>
          <motion.h2 variants={textAnimationtop} className={s.description_des_title}>
            Accepting payments should not be hard
          </motion.h2>
          <motion.p variants={textAnimation} custom={1} className={s.description_des_text}>
            Acccept payment using invoice, quick checkout, API’s and payment
            buttons
          </motion.p>
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
            <motion.div variants={textAnimation} custom={2}  key={description.id} className={s.cards_card}>
              <motion.div variants={textAnimation} custom={3} className={s.cards__card_img}>
                <Image
                  src={description.img}
                  width={324}
                  height={320}
                  alt="icon"
                />
              </motion.div>
              <div className={s.cards_card_text}>
                <motion.h2 variants={textAnimation} custom={4} className={s.cards_card_text__title}>{description.title}</motion.h2>
                <motion.p variants={textAnimation} custom={5} className={s.cards_card_text__set}>{description.text}</motion.p>
                <motion.p variants={textAnimation} custom={6} className={s.cards_card_text__des}>{description.destext}</motion.p>
                <motion.p variants={textAnimation} custom={7} className={s.cards_card_strela}>
                  <Image 
                    src={description.imgstrela}
                    width={24}
                    height={10}
                    alt="strela"
                  ></Image>
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div variants={textAnimationtop} custom={1}  className={s.description_bottom__title}>
          <motion.h2 variants={textAnimationtop} custom={2} className={s.description_bottom__title_text}>Having issues with integration and setup</motion.h2>
          <motion.button variants={textAnimationtop} custom={3} className={s.description_bottom__title_btn}>Let us know</motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Description;
