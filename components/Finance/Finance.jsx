import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./Finance.module.scss";
import { financeCard } from "@/constans/financeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

const Finance = () => {
  return (
    <div className="container">
      <div className={s.finance}>
        <div className={s.finance_background}>
          <Image
            src="/financeBackground.png"
            width={2000}
            height={1200}
            alt="financeBackground.png"
          />
        </div>
        <div className={s.finanse_elements_all}>
          <div className={s.finance_elements}>
            <div className={s.finance_elements_title}>
              <p>News & Updates</p>
              <div className={s.finance_elements_title_general}>
                <h3>We talk about finance</h3>
                <Image
                  src="/trustShape.png"
                  width={140}
                  height={90}
                  alt="trustShape"
                />
              </div>
            </div>
            <div className={s.finance_elements_cards}>
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
              1000: {
                slidesPerView: 3,
              },
              600: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1
              }
              
            }}
            modules={[Autoplay]}
            >
              {" "}
              {financeCard.map((item) => (
                <SwiperSlide>
                  <div key={item.id} className={s.finance_elements_card}>
                  <div className={s.finance_elements_card_background}></div>
                  <div className={s.finance_elements_card_desc}>
                    <p>{item.date}</p>
                    <h3>{item.title}</h3>
                    <div className={s.elements_card_link}>
                      <Link href="#">
                        {item.link}
                        <Image
                          src={item.arrow}
                          width={5}
                          height={8}
                          alt="arrow"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          </div>
          <div className={s.finance_bottom_row}>
            <div className={s.finance_bottom_row_title}>
              <div className={s.bottom_row_title_general}>
                <h3>Your payment is just a click away</h3>
                <Image
                  src="/heroShape.png"
                  width={226}
                  height={90}
                  alt="heroShape"
                />
              </div>
              <p>Ut vel sapien molestie, accumsan dui eu, imperdiet nulla.</p>
            </div>
            <button>Create <span>an account</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
