import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "./Header.scss";
//
const Header = (props) => {
  const langSyles = { fontWeight: 900, fontSize: "34px" };
  const [chosen, setChosen] = useState("ru");
  useEffect(() => {
    if (props.langState) setChosen("ru");
    else setChosen("en");
  }, [props.langState]);

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
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <img id="logo" src="logo.png" alt="" width="928px" height="203px" />
        <Box
          sx={{
            width: "100%",
            height: 76,
          }}
        >
          <Stack sx={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <div
              id="ru"
              className={
                chosen==="ru"  ? "lang__switcher chosen" : "lang__switcher"
              }
              onClick={() => props.changeLang(true)}
            >
              <Typography sx={langSyles}>RU</Typography>
            </div>
            <div
              id="en"
              className={
                chosen==="ru" ? "lang__switcher " : "lang__switcher chosen"
              }
              onClick={() => props.changeLang(false)}
            >
              <Typography sx={langSyles}>EN</Typography>
            </div>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
