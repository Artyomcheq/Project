import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./header.module.scss";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
              <div></div>
            </button>
          </div>
        </div>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.4 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          className={`${s.header_bottom_row} ${menuOpen ? s.show : ""}`}
        >
          <div className={s.header_bottom_row_links}>
            <Link href="#">Home</Link>
            <Link href="#">Products</Link>
            <Link href="#">Pages</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact us</Link>
          </div>
          <div className={s.header_bottom_row_btn}>
            <Image src="/globus.png" alt="globus" width={20} height={20} />
            <h3>English</h3>
            <button>Sign up</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
