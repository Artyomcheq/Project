import React from "react";
import s from "./Trust.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { trustCard } from "@/constans/trustSwiper";

const Trust = () => {
  return (
    <div className={s.trust}>
      <div className={s.trust_title}>
        <div className={s.trust_general_title}>
          <h3>Don’t trust us. Trust the industry leaders</h3>
          <Image
            src="/trustShape.png"
            width={222}
            height={94}
            alt="trustShape"
          />
        </div>
        <div className={s.trust_second_title}>
          <p>See what are users are saying about our services and support</p>
        </div>
      </div>
      <div className={s.trust_swiper}>
        <Swiper
        loop
        navigation={true}
        slidesPerView={1}
        spaceBetween={20}
        modules={[Navigation]}
        className="trust_swiper"
        >
          {trustCard.map((item) => (
            <SwiperSlide>
              <div className={s.trust_swiper_card}>
                <Image src={item.img} width={65} height={65} />
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
        </Swiper>
      </div>
    </div>
  );
};

export default Trust;
