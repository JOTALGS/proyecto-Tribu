'use client'
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";
import OvImage from "../../public/images/Ov.png";
import NiImage from "../../public/images/Ni.png";
import NaImage from "../../public/images/Na.png";
import JPImage from "../../public/images/JP.png";
import { motion } from "framer-motion";

// const { Container } = require("react-bootstrap");

function Join() {
  return (
    <div className="join">
      <Container className="mt-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="d-flex justify-content-between flex-column flex-md-row flex-wrap gray-100 pt-3"
        >
          <Swiper
            grabCursor={true}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              998: {
                slidesPerView: 3,
              },
              1198: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <div className="w-full flex justify-center">
              <img src={OvImage.src} alt="img" className="w-full h-auto" />
            </div>
              <AnimationTitles
                title="Jose Gil"
                className="text-white mb-4 mt-5 h4"
              />
              <p className="gray-50">
                Full-Stack
              </p>
            </SwiperSlide>
            <SwiperSlide className="py-4 px-3 align-items-start flex-column">
              <div className="w-full flex justify-center">
                <img src={NiImage.src} alt="img" className="w-full h-auto" />
              </div>
              <AnimationTitles
                title="Nicolas Valles"
                className="text-white mb-4 mt-5 h4"
              />
              <p className="gray-50">
                UX/UI
              </p>
            </SwiperSlide>
            <SwiperSlide className="py-4 px-3 align-items-start flex-column">
              <div className="w-full flex justify-center">
                <img src={NaImage.src} alt="img" className="w-full h-auto" />
              </div>
              <AnimationTitles
                title="Nahuel Acosta"
                className="text-white mb-4 mt-5 h4"
              />
              <p className="gray-50">
                Front-End
              </p>
            </SwiperSlide>
            <SwiperSlide className="py-4 px-3 align-items-start flex-column">
              <div className="w-full flex justify-center">
                <img src={JPImage.src} alt="img" className="w-full h-auto" />
              </div>
              <AnimationTitles
                title="Pablo Ferraro"
                className="text-white mb-4 mt-5 h4"
              />
              <p className="gray-50">
                Back-End
              </p>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </Container>
    </div>
  );
}

export default Join;