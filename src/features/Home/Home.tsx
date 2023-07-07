import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

/**
 * Landing Page
 * @constructor
 */
export function Home() {
  return (
    <>
      <Box className={"aniGradient"} p={2}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignContent="center"
          spacing={2}
        >
          <Grid item justifyContent="center" display="flex">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ marginTop: "200px", backgroundColor: "#1fafa8" }}
            >
              <img
                src="/rp_bg_trans.png"
                width={"200"}
                height={"175"}
                alt="DPGraham"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h3">David Graham</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
