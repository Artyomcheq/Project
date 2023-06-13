import React from "react";
import s from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
          </div>
        </div>
        <div className={s.header_bottom_row}>
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
        </div>
      </div>
    </div>
  );
};

export default Header;
