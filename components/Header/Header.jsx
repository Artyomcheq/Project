import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./header.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { hiddenTopAnimation, visibleTopAnimation } from "@/constans/animation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 741) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div className={s.header}>
        <div className={s.header_top_row}>
          <div className={s.header_top_row_logo}>
            <h3>Logo</h3>
          </div>
          <div className={s.header_top_row_contacts}>
            <div className={s.top_row_contacts_inp}>
              <Image src="/loop.png" alt="loop" width={15} height={15} />
              <input type="text" placeholder="Search here..." />
            </div>
            <div className={s.top_row_contacts_mail}>
              <h3>@</h3>
              <a href="#">email@mail.com</a>
            </div>
            <div className={s.top_row_contacts_number}>
              <Image src="/loop.png" alt="loop" width={15} height={15} />
              <a href="#">(000) 888-88</a>
            </div>
            <button onClick={toggleMenu}>
              <div
                className={`${s.header_burger_line} ${menuOpen ? s.burger_line_rotate : ""}`}
              ></div>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className={`${s.header_bottom_row} ${menuOpen ? s.show : ""}`}
            >
              <motion.div
                initial={hiddenTopAnimation}
                whileInView={visibleTopAnimation(2)}
                className={s.header_bottom_row_links}
              >
                <Link href="#">Home</Link>
                <Link href="#">Products</Link>
                <Link href="#">Pages</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Contact us</Link>
              </motion.div>
              <motion.div
                initial={hiddenTopAnimation}
                whileInView={visibleTopAnimation(1)}
                className={s.header_bottom_row_btn}
              >
                <Image src="/globus.png" alt="globus" width={20} height={20} />
                <h3>English</h3>
                <button>
                  Sign up
                  <Image src="/btnArrow.png" width={5} height={8} alt="btnArrow" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
