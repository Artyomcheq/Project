import React from "react";
import s from "./Hero.module.scss";
import Image from "next/image";
import { bottomRowInfo, heroStar } from "@/constans/hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";
import {
  hiddenAnimation,
  hiddenBottomAnimation,
  visibleAnimation,
  visibleBottomAnimation,
} from "@/constans/animation";

const Hero = () => {
  return (
    <div className="container">
      <div className={s.hero}>
        <div className={s.hero_background}>
          <Image src="/heroBackground.png" alt="background" width={2000} height={1100} />
        </div>
        <div className={s.hero_elements}>
          <div className={s.hero_elements_left}>
            <motion.div
              initial={hiddenAnimation}
              whileInView={visibleAnimation(1)}
              className={s.elements_left_title}
            >
              <h1>Start accepting payments in 3 minutes</h1>
              <Image src="/heroShape.png" width={416} height={168} alt="heroShape" />
            </motion.div>
            <motion.p initial={hiddenAnimation} whileInView={visibleAnimation(2)}>
              Integrate xyz payment gateway without any technical knowledge.{" "}
            </motion.p>
            <motion.div
              initial={hiddenAnimation}
              whileInView={visibleAnimation(3)}
              className={s.elements_left_btns}
            >
              <button>Start now</button>
              <button>
                <span>Read the</span> developer docs
              </button>
            </motion.div>
            <motion.div
              initial={hiddenAnimation}
              whileInView={visibleAnimation(3)}
              className={s.elements_left_reviews}
            >
              <h3>4.7</h3>
              <div className={s.elements_left_reviews_rating}>
                <p>top rated on trustpilot</p>
                <div className={s.left_reviews_rating_stars}>
                  {heroStar.map((item) => (
                    <Image key={item.id} src={item.img} width={15} height={15} alt="star" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            layout
            transition={{
              opacity: 0.5,
              layout: { duration: 0.8 },
              duration: 0.8,
            }}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.hero_element_right}
          >
            <Image src="/heroImg.png" height={500} width={550} alt="heroImg" />
          </motion.div>
        </div>
        <div className={s.hero_bottom_card_position}>
          <motion.div
            initial={hiddenBottomAnimation}
            whileInView={visibleBottomAnimation(1)}
            className={s.hero_bottom_card}
          >
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop
              speed={1100}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1009: {
                  slidesPerView: 3,
                },
                595: {
                  slidesPerView: 2,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
              modules={[Autoplay]}
            >
              {" "}
              {bottomRowInfo.map((item) => (
                <SwiperSlide>
                  <div key={item.id} className={s.bottom_card_inormation}>
                    <Image src={item.img} width={53} height={53} alt="tick" />
                    <div className={s.bottom_card_inormation_desc}>
                      <h3>{item.name}</h3>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
