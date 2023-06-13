import React from "react";
import s from "./Trust.module.scss";
import Image from "next/image";

const Trust = () => {
  return (
    <div className={s.trust}>
      <div className={s.trust_title}>
        <div className={s.trus_general_title}>
            <h3>Don’t  trust us. Trust the industry leaders</h3>
            <Image src="/trustShape.png" width={222} height={94} alt="trustShape" />
        </div>
      </div>
    </div>
  );
};

export default Trust;
