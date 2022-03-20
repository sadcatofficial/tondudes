import React from "react";
import { Box, Stack, Typography, Container } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import About from "../About/About";
import Team from "../Team/Team";
import Gallery from "../Gallery/Gallery";
const InnerContainer = (props) => {
  return (
    <Container 
    component="main"
      sx={{
        backgroundImage: "url(inner_container_bg.PNG)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        borderRadius: 33,
        marginTop: "75px",
        marginBottom: "75px",
        padding: `0 !important`,
        filter: `drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.5))`,
        boxShadow: `inset 0px 0px 20px rgba(0, 0, 0, 0.25)`,
        border: `10px solid #ffffff`,
      }}
      maxWidth="xl"
    >
      
      <About langState={props.langState}/>
      <Gallery langState={props.langState} />
      <Team langState={props.langState}/>
    </Container>
    // <Stack direction="row" spacing="60px" mt="160px">
    //   <img src="assets/mainImage.png" alt="" width="550px" />
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "flex-start",
    //       justifyContent: "center",
    //       width: "100%",
    //     }}
    //   >
    //     <Typography sx={{ fontWeight: 600, fontSize: "100px", color: "white" }}>
    //       TonDudes
    //     </Typography>
    //     <Typography
    //       sx={{ fontWeight: 600, fontSize: "30px", color: "#6D6D6D" }}
    //     >
    //       be special. be yourself. be dude.
    //     </Typography>
    //     <Stack
    //         alignItems="center"
    //       direction="row"
    //       sx={{
    //         background: "#42ACEF",
    //         borderRadius: "18px",
    //         padding: "4px 20px",
    //       }}
    //     >
    //       <TelegramIcon sx={{color: `white`}}/>
    //       <Typography
    //         sx={{ fontWeight: 600, fontSize: "20px", color: "white" }}
    //       >
    //         @tondudes
    //       </Typography>
    //     </Stack>
    //   </Box>
    // </Stack>
  );
};

export default InnerContainer;
