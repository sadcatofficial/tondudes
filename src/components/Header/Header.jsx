import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import "./Header.scss";

const Header = () => {
  const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 300,
    framesCount = 20;

  anchors.forEach(function (item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener("click", function (e) {
      // убираем стандартное поведение
      e.preventDefault();

      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
      let coordY =
        document
          .querySelector(item.getAttribute("href"))
          .getBoundingClientRect().top + window.pageYOffset;

      // запускаем интервал, в котором
      let scroller = setInterval(function () {
        // считаем на сколько скроллить за 1 такт
        let scrollBy = coordY / framesCount;

        // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
        // и дно страницы не достигнуто
        if (
          scrollBy > window.pageYOffset - coordY &&
          window.innerHeight + window.pageYOffset < document.body.offsetHeight
        ) {
          // то скроллим на к-во пикселей, которое соответствует одному такту
          window.scrollBy(0, scrollBy);
        } else {
          // иначе добираемся до элемента и выходим из интервала
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
        // время интервала равняется частному от времени анимации и к-ва кадров
      }, animationTime / framesCount);
    });
  });

  return (
    <Box
      component="header"
      mt="30px"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: `white`,
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ fontWeight: 600, fontSize: "40px", lineHeight: "47px" }}
        mr="32px"
      >
        TonDudes
      </Typography>
      <Stack
        direction="row"
        spacing="35px"
        sx={{ fontWeight: 600, fontSize: "30px", lineHeight: "35px" }}
        component="nav"
      >
        <Link href="#about" color="inherit" underline="none">
          About
        </Link>
        <Link href="#variations" color="inherit" underline="none">
          Variations
        </Link>
        <Link href="#team" color="inherit" underline="none">
          Team
        </Link>
      </Stack>
    </Box>
  );
};

export default Header;
