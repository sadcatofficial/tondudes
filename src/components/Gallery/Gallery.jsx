import React from "react";
import { Box, Stack, Typography, Container } from "@mui/material";
import "./Gallery.scss";
const Gallery = () => {
  return (
    <Box
      sx={{
        marginTop: "140px",
        backgroundImage: "url(assets/gallery_box_bg.png)",
        height: 720,
        width: "100%",
        boxShadow: "inset 0px 0px 50px rgba(0, 0, 0, 0.3)",
        borderTop: "25px solid white",
        borderBottom: "25px solid white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Stack direction="column" spacing="42px">
    <div className="idea__annotation"><Typography sx={{ fontWeight: 900, fontSize: "48px", color: "#3082BD" }}> В ЭТОМ И ЕСТЬ НАША ОСНОВНАЯ ИДЕЯ</Typography></div>
    <div className="idea__annotation"><Typography sx={{ fontWeight: 900, fontSize: "48px", color: "#3082BD" }}>АНОНИМНОСТЬ И СВОБОДА</Typography></div>
    </Stack>
    </Box>
  );
};

export default Gallery;
