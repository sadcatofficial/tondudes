import React from "react";
import { Stack, Typography, Box, Link } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./About.scss";
const About = ({ langState }) => {
  return (
    <>
      <Stack
        direction="row"
        pt="90px"
        width="100%"
        sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
      >
        <div className="left__annotation" id="about_1">
          {" "}
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "50px",
              color: "#3082BD",
              lineHeight: "59px",
            }}
          >
            {langState
              ? "TON DUDES - ЭТО 1000 УНИКАЛЬНЫХ NFT, СОЧЕТАЮЩИЕ В СЕБЕ СМЕШЕНИЕ ДВУХ СТИЛЕЙ ИСКУССТВА, ПИКСЕЛЬ АРТ И МИНИМАЛИЗМ"
              : "TON DUDES are 1,000 unique NFTs combining a mix of two styles of art, pixel art and minimalism."}
          </Typography>{" "}
        </div>
        <div className="right__annotation" id="links">
          <Stack direction="column">
            <Link href="https://t.me/tondudes">
              {" "}
              <img src="tg_icon.png" alt="" width="122px" height="122px" />{" "}
            </Link>
            <Link href="https://twitter.com/Ton_Dudes">
              {" "}
              <img
                src="twitter_icon.png"
                alt=""
                width="122px"
                height="122px"
              />{" "}
            </Link>
          </Stack>
        </div>
      </Stack>

      <Stack
        direction="row"
        mt="140px"
        width="100%"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <img
          src="assets/main_dude.png"
          id="main__dude"
          alt=""
          width="540px"
          height="540px"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div className="right__annotation" id="about_2">
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: "34px",
                color: "#3082BD",
                lineHeight: "40px",
              }}
            >
              {langState
                ? "КАЖДЫЙ ИЗ ЭТИХ РЕБЯТ УНИКАЛЕН, НО ПРИ ЭТОМ ИХ КОЕ-ЧТО ОБЪЕДИНЯЕТ, А ИМЕННО БЕЗЛИКОСТЬ."
                : "Each of these guys is unique, but at the same time they have something in common, namely facelessness."}
            </Typography>
          </div>
          <div className="right__annotation" id="about_3">
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: "34px",
                color: "#3082BD",
                lineHeight: "40px",
              }}
            >
              {langState
                ? "ОТСУТСТВИЕ ИЛИ СКРЫТИЕ ЧЕРТ ЛИЦА ПОД МАСКОЙ ДЕЛАЕТ ИХ АНОНИМНЫМИ ИЛИ В КАКОМ ТО СМЫСЛЕ СВОБОДНЫМИ"
                : "The absence or concealment of facial features under a mask makes them anonymous or, in a sense, free."}
            </Typography>
          </div>
        </Box>
      </Stack>
    </>
  );
};

export default About;
