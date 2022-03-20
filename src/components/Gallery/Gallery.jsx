import React from "react";
import { Box, Stack, Typography, Container } from "@mui/material";
import "./Gallery.scss";
const Gallery = ({ langState }) => {
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
        filter: `drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25))`,
      }}
    >
      <Stack direction="column" spacing="42px">
        <div className="idea__annotation">
          <Typography
            sx={{ fontWeight: 900, fontSize: "48px", color: "#3082BD" }}
          >
            {langState
              ? "В ЭТОМ И ЕСТЬ НАША ОСНОВНАЯ ИДЕЯ"
              : "This is our basic idea"}{" "}
          </Typography>
        </div>
        <div className="idea__annotation">
          <Typography
            sx={{ fontWeight: 900, fontSize: "48px", color: "#3082BD" }}
          >
            {langState ? "АНОНИМНОСТЬ И СВОБОДА" : "ANONIMITY and FREEDOM"}
          </Typography>
        </div>
      </Stack>
    </Box>
  );
};

export default Gallery;
