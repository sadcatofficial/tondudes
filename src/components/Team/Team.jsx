import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "./Team.scss";
const Team = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      mt="168px"
      pb="160px"
      id="team"
    >
      <div className="annotation">
        <Typography sx={{ fontWeight: 900, fontSize: "50px" }}>
          Команда проекта
        </Typography>{" "}
      </div>

      <Stack
        direction="row"
        mt="100px"
        sx={{ width: 1024, justifyContent: "space-between" }}
      >
        <Stack
          direction="column"
          sx={{ justifyContent: "space-between" }}
          spacing="16px"
        >
          <img
            src="assets/creator1.png"
            id="creator"
            alt=""
            width="365px"
            height="360px"
          />
            <div className="annotation__creator">
              <Typography sx={{ fontWeight: 900, fontSize: "40px", color:'#3082BD' }}>CRYPTONIEMAND</Typography>
          </div>
        </Stack>
        <Stack
          direction="column"
          sx={{ justifyContent: "space-between" }}
          spacing="16px"
        >
          <img
            src="assets/creator2.png"
            id="creator"
            alt=""
            width="365px"
            height="360px"
          />
          <div className="annotation__creator">
              <Typography sx={{ fontWeight: 900, fontSize: "40px", color:'#3082BD' }}>X/Y</Typography>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Team;
