import React from "react";
import s from "./Info.module.scss";
import Image from "next/image";
import { info } from "../constans/Info";

const Info = () => {
  return (
    <div className={s.info_background}>
      <div className="container">
        <div className={s.info}>
          <div className={s.info_block}>
            <Image src="/info-oval.png" alt="oval" width={317} height={86}/>
            <div className={s.block_des}>
              <div>
                <h3 className={s.block_des__title}>
                  Enter your custom title here
                </h3>
                <p className={s.block_des__text}>
                  For more information, please visit the Help Center. also find
                  all faqs on our faqs page
                </p>
                <button className={s.block_des__btn}>Go to Faqs</button>
              </div>
            </div>
            <div className={s.block_set}>
              <div className={s.set_box}>
                {" "}
                {info.map((info) => (
                  <div key={info.id} className={s.set_box__des}>
                    <p className={s.set_box__des_text}>{info.title}</p>
                    <p className={s.set_box__des_tas}>{info.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={s.info_login}>
            <Image src="/info-green.png" alt="green" width={135} height={125} />
            <div className={s.info_login__register}>
              <div className={s.register_block}>
                <h2 className={s.register_block__title}>Request call back</h2>
                <p className={s.register_block__text}>
                  Morbi non quam nec dui luctus rutrum.
                </p>
                <input
                  className={s.register_block__inp}
                  type="text"
                  placeholder="Invoices"
                />
                <input
                  className={s.register_block__inp}
                  type="text"
                  placeholder="random@example.com"
                />
                <button className={s.register_block__btn}>CALL ME</button>
                <p className={s.register_block__texts}>
                  Add anything here to make it look good.
                </p>
              </div>
            </div>
            <div className={s.info_login__text}>
              <h2 className={s.text_title}>Have questions in your mind?</h2>
              <p className={s.text_sets}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat.
              </p>
              <p className={s.text_number__text}>
                Feel free to contact us here 
              </p>
                  <p className={s.text_number}>Call: <span> 1.888.888.888</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
