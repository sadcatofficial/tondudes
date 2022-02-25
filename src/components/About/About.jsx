import React from "react";
import { Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import './About.scss'
const About = () => {
  return (
    <Stack spacing="30px" mt="190px" id="about">
      <Typography sx={{ fontWeight: 600, fontSize: "100px" }}>
        What are TonDudes?
      </Typography>
      <Typography sx={{ fontWeight: 600, fontSize: "45px", color: 'white' }}>
        1,000 unique Dudes created just for The Open Network. Every dude from
        the collection is unique
      </Typography>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="assets/dude1.png"/> </SwiperSlide>
        <SwiperSlide> <img src="assets/dude2.png"/> </SwiperSlide>
        <SwiperSlide> <img src="assets/dude1.png"/> </SwiperSlide>
        <SwiperSlide> <img src="assets/dude3.png"/> </SwiperSlide>
        <SwiperSlide> <img src="assets/dude1.png"/> </SwiperSlide>
        <SwiperSlide> <img src="assets/dude2.png"/> </SwiperSlide>
        <SwiperSlide> <img src="assets/dude1.png"/> </SwiperSlide>
        <SwiperSlide> <img src="assets/dude3.png"/> </SwiperSlide>
      </Swiper>
    </Stack>

  );
};

export default About;
