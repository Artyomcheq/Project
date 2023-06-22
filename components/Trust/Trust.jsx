import React from "react";
import s from "./Trust.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { trustCard } from "@/constans/trustSwiper";
import { motion } from "framer-motion";
import { hiddenAnimation, visibleAnimation } from "@/constans/animation";

const Trust = () => {
  return (
    <div className={s.trust}>
      <div className={s.trust_title}>
        <motion.div
          initial={hiddenAnimation}
          whileInView={visibleAnimation(1)}
          className={s.trust_title_general}
        >
          <h3>Don’t trust us. Trust the industry leaders</h3>
          <Image
            src="/trustShape.png"
            width={222}
            height={94}
            alt="trustShape"
          />
        </motion.div>
        <motion.div
          initial={hiddenAnimation}
          whileInView={visibleAnimation(2)}
          className={s.trust_title_second}
        >
          <p>See what are users are saying about our services and support</p>
        </motion.div>
      </div>
      <div className={s.trust_swiper}>
        <Swiper
          loop
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            1200: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 1.7,
            },
            800: {
              slidesPerView: 1.4,
            },
            700: {
              slidesPerView: 1.4,
            },
            600: {
              slidesPerView: 1.2,
            },
            320: {
              slidesPerView: 1.0,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          speed={700}
          modules={[Navigation, Autoplay]}
          centeredSlides={true}
          centeredSlidesBounds={true}
          className="trust_swiper"
        >
          {trustCard.map((item) => (
            <SwiperSlide>
              <div className={s.trust_swiper_card}>
                <Image key={item.id} src={item.img} width={65} height={65} />
                <div className={s.trust_swiper_card_title}>
                  <h3>{item.name}</h3>
                  <p>{item.position}</p>
                </div>
                <div className={s.trust_swiper_card_comment}>
                  <p>{item.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom_btns">
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Trust;
