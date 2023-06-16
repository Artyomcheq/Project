import React from "react";
import { useEffect, useState } from "react";
import s from "./Preoader.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Hero from "../Hero/Hero";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [mainPageLoaded, setMainPageLoaded] = useState(false);

  const textAnimation = {
    hiddenTop: {
      y: -1000,
      opacity: 0,
    },
    hiddenBottom: {
      y: 1000,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 1 },
    }),
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      setMainPageLoaded(true);
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="preloader"
          className={s.preloader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={s.preloader_loader}></div>
          <motion.div
            variants={textAnimation}
            initial="hiddenTop"
            animate={mainPageLoaded ? "hiddenTop" : "visible"}
            className={s.preloader_logo}
          >
            <h4>Logo</h4>
          </motion.div>
          <motion.div
            variants={textAnimation}
            initial="hiddenTop"
            animate={mainPageLoaded ? "hiddenTop" : "visible"}
            className={s.preloader_left_circle}
          >
            <Image
              src="/footerCircle.png"
              width={135}
              height={123}
              alt="Circle"
            />
          </motion.div>
          <motion.div
            variants={textAnimation}
            initial="hiddenBottom"
            animate={mainPageLoaded ? "hiddenBottom" : "visible"}
            className={s.preloader_right_circle}
          >
            <Image
              src="/footerCircle.png"
              width={135}
              height={123}
              alt="Circle"
            />
          </motion.div>
        </motion.div>
      ) : null}
      {!loading && <Hero/>}
    </AnimatePresence>
  );
};

export default Preloader;
