import { footerHelp, footerLinks } from "@/constans/footer";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className="container">
      <div className={s.footer}>
        <div className={s.footer_field}>
          <div className={s.footer_logo_contacts}>
            <h3>Logo</h3>
            <a href="#">support@9.com</a>
            <a href="#">+888-888-88</a>
            <div className={s.footer_logo_contacts_background}>
              <Image
                src="/footerCircle.png"
                width={145}
                height={123}
                alt="footerCircle"
              />
            </div>
          </div>
          <div className={s.footer_links}>
            <h3>Links</h3>
            {""}
            {footerLinks.map((item) => (
              <Link key={item.id} href="#">{item.title}</Link>
            ))}
          </div>
          <div className={s.footer_help}>
            <h3>Help & Support</h3>
            {footerHelp.map((item) => (
              <Link key={item.id} href="#">{item.title}</Link>
            ))}
          </div>
          <div className={s.footer_our_address}>
            <h3>Our Address</h3>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            <div className={s.footer_our_address_socials}>
              <a href="#">
                <Image
                  src="/facebook.png"
                  width={9}
                  height={17}
                  alt="facebook"
                />
              </a>
              <a href="#">
                <Image
                  src="/twitter.png"
                  width={19}
                  height={15}
                  alt="twitter"
                />
              </a>
              <a href="#">
                <Image
                  src="/linkedin.png"
                  width={18}
                  height={18}
                  alt="linkedin"
                />
              </a>
              <a href="#">
                <Image src="/google.png" width={26} height={15} alt="google" />
              </a>
            </div>
            <div className={s.footer_our_address_subscribe}>
              <h3>SIGN UP FOR NEWSLETTER</h3>
              <div className={s.our_address_subscribe_bring}>
                <input type="text" placeholder="Email address" />
                <button>Subscirbe</button>
              </div>
            </div>
          </div>
        </div>
        <div className={s.footer_copyright}>
          <h3>© Copyright 2021 Your company name</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
