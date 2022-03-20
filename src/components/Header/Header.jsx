import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import "./Header.scss";
// 
const Header = () => {
  const langSyles = { fontWeight: 900, fontSize: "34px"};
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        color: `white`,
        alignItems: "center",
        backgroundColor: "#84BCEF",
        filter: `drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25))`, 
        borderBottom: `10px solid`,
        borderRadius: "0px 0px 33px 33px",
      }}
    >
      <Stack
        direction="column"
        sx={{}}
        width="100%"
        height="100%"
        sx={{ alignItems: "center",justifyContent: 'space-between' }}
      >
        <img id="logo" src="logo.png" alt="" width="928px" height="203px" />
        <Box
          sx={{
            width: "100%",
            height: 76,
          }}
        >
          <Stack sx={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <div id="ru" className="lang__switcher chosen"><Typography sx={langSyles}>RU</Typography></div>
            <div id="en" className="lang__switcher"><Typography sx={langSyles}>EN</Typography></div>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
