import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";

const Main = () => {
  return (
    <Stack direction="row" spacing="60px" mt="160px">
      <img src="assets/mainImage.png" alt="" width="550px" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: "100px", color: "white" }}>
          TonDudes
        </Typography>
        <Typography
          sx={{ fontWeight: 600, fontSize: "30px", color: "#6D6D6D" }}
        >
          be special. be yourself. be dude.
        </Typography>
        <Stack 
            alignItems="center"
          direction="row"
          sx={{
            background: "#42ACEF",
            borderRadius: "18px",
            padding: "4px 20px",
          }}
        >
          <TelegramIcon sx={{color: `white`}}/>
          <Typography
            sx={{ fontWeight: 600, fontSize: "20px", color: "white" }}
          >
            @tondudes
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Main;
