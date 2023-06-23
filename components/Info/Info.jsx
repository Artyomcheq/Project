import React from "react";
import s from "./Info.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { textAnimation, textAnimationtop} from "../../constans/animation"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";



const Info = () => {
  return (
    <div className={s.info_background}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" className={s.info}>
          <motion.div
            variants={textAnimation}
            custom={2}
            className={s.info_block}
          >
            <Image src="/info-oval.png" alt="oval" width={317} height={86} />
            <div className={s.block_des}>
              <div>
                <h3 className={s.block_des__title}>
                  Enter your custom title here
                </h3>
                <p className={s.block_des__text}>
                  For more information, please visit the <a href="#">Help Center.</a>  also find
                  all faqs on our faqs page
                </p>
                <button className={s.block_des__btn}>Go to Faqs</button>
              </div>
            </div>
            <div className={s.block_set}>
              <div className={s.set_box}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Maecenas incident laces at velit.</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Phasellus id sapien in sapien iaculis congue.</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Maecenas tincidunt lacus at velit.</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Maecenas tincidunt lacus at velit.</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Donec semper sapien a libero.</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Phasellus id sapien in sapien iaculis congue.</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={textAnimation}
            custom={3}
            className={s.info_login}
          >
            <Image src="/info-green.png" alt="green" width={135} height={125} />
            <div className={s.info_login__register}>
              <div className={s.register_block}>
                <h2 className={s.register_block__title}>Request call back</h2>
                <p className={s.register_block__text}>
                  Morbi non quam nec dui luctus rutrum.
                </p>
                <Box
                  className={s.inputs_box}
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "86%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    className={s.register_block__inp}
                    id="outlined-basic"
                    label="Product"
                    variant="outlined"
                  />
                  <TextField
                    className={s.register_block__inp}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                </Box>

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
              <a href="#" className={s.text_number}>
                Call: <span> 1.888.888.888</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Info;
