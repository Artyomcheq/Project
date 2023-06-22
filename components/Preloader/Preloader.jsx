import React from "react";
import { useEffect, useState } from "react";
import s from "./Preoader.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../Hero/Hero";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    handleLoad();

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      window.scrollTo(0, 0);
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
        </motion.div>
      ) : (
        <Hero />
      )}
    </AnimatePresence>
  );
};

export default Preloader;
