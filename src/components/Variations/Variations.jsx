import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import './Variations.scss'
const Variations = () => {
  const variationStyles = { fontWeight: 600, fontSize: "45px", marginLeft: "50px", marginTop: "60px"};
  return (
    <Box className="variations" mt="100px"  id="variations">
      <Typography sx={{ fontWeight: 600, fontSize: "100px" }}>
        Variations
      </Typography>
      <Typography sx={{ fontWeight: 600, fontSize: "45px" }}>
        Every TonDude can be composed of up to 7 properties:
      </Typography>

      <Stack>
        <Typography sx={variationStyles}>beard</Typography>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className=""
      >
        <SwiperSlide><img src="assets/beard.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/beard.png"/></SwiperSlide> 
        <SwiperSlide><img src="assets/beard.png"/></SwiperSlide> 
        <SwiperSlide><img src="assets/beard.png"/></SwiperSlide> 
        <SwiperSlide><img src="assets/beard.png"/></SwiperSlide> 
      </Swiper>
      </Stack>

      <Stack>
        <Typography sx={variationStyles}>mask</Typography>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className=""
      >
        <SwiperSlide><img src="assets/mask.png"/></SwiperSlide>
        <SwiperSlide><img src="assets/mask.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/mask.png"/></SwiperSlide>
        <SwiperSlide><img src="assets/mask.png"/></SwiperSlide>
        <SwiperSlide><img src="assets/mask.png"/></SwiperSlide>
      </Swiper>
      </Stack>

      <Stack>
        <Typography sx={variationStyles}>glasses</Typography>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className=""
      >
        <SwiperSlide><img src="assets/glasses.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/glasses.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/glasses.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/glasses.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/glasses.png"/></SwiperSlide>   
      </Swiper>
      </Stack>
      <Stack>

        <Typography sx={variationStyles}>hairstyle</Typography>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className=""
      >
        <SwiperSlide><img src="assets/hairstyle.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/hairstyle.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/hairstyle.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/hairstyle.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/hairstyle.png"/></SwiperSlide>   
      </Swiper>
      </Stack>

      <Stack>
        <Typography sx={variationStyles}>jeweler</Typography>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className=""
      >
        <SwiperSlide><img src="assets/jeweler.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/jeweler.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/jeweler.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/jeweler.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/jeweler.png"/></SwiperSlide>   
      </Swiper>
      </Stack>

      <Stack>
        <Typography sx={variationStyles}>clothes</Typography>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className=""
      >
        <SwiperSlide><img src="assets/clothes.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/clothes.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/clothes.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/clothes.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/clothes.png"/></SwiperSlide>   
      </Swiper>
      </Stack>

      <Stack>
        <Typography sx={variationStyles}>outerwear</Typography>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className=""
      >
        <SwiperSlide><img src="assets/outwear.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/outwear.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/outwear.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/outwear.png"/></SwiperSlide>   
        <SwiperSlide><img src="assets/outwear.png"/></SwiperSlide>   
      </Swiper>
      </Stack>

    </Box>
  );
};

export default Variations;
