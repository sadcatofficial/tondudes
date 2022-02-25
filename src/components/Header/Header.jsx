import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import "./Header.scss";

const Header = () => {
  
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
