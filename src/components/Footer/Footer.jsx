import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";

const Footer = () => {
  const langSyles = { fontWeight: 900, fontSize: "34px" };
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
      }}
    >
      <Stack
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
            width: 253,
            height: 110,
            background: "#FFFFFF",
            borderRadius: "100px",
          }}
        >
            <img src="twitter_icon.png" alt="" width="110px" height="110px" />
            <img src="tg_icon.png" alt=""  width="110px" height="110px" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
