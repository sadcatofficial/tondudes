import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        color: `white`,
        alignItems: "center",
        backgroundColor: "#84BCEF",
        height: 175,
        borderRadius: "33px 33px 0px 0px",
        filter: `drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25))`, 
        borderTop: `10px solid`,
      }}
    >
      <Stack
        id="footer_nav"
        direction="row"
        sx={{}}
        width="1000px"
        height="110px"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            width: 215,
            height: 110,
            background: "#FFFFFF",
            borderRadius: "100px",
          }}
        >
          <img src="ton_icon.png" alt="" width="164px" height="61px" />
        </Box>

        <Box
          sx={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            flexDirection: `row`,
            width: 250,
            height: 110,
            background: "#FFFFFF",
            borderRadius: "100px",
          }}
        >
            <Link href="https://twitter.com/Ton_Dudes"><img src="twitter_icon.png" alt="" width="110px" height="110px" /> </Link>
            <Link href="https://t.me/tondudes"><img src="tg_icon.png" alt=""  width="110px" height="110px" /> </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
