import React from 'react';
import { Box, Stack, Typography } from "@mui/material";

const Team = () => {
    return (
        <Box sx={ {display:'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" } } mt="200px"  id="team">
            <Typography sx={{ fontWeight: 600, fontSize: "100px"}}>Team</Typography>
            <Stack direction="row">
                <img src="assets/creator2.png" alt="" width="360px" height="360px"/>
                <img src="assets/creator1.png" alt="" width="360px" height="360px" />
            </Stack>
        </Box>
    );
};

export default Team;