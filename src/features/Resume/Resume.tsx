import { Download } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import { CloudChallengeResume } from "components/CloudChallengeResume";
import { useTitle } from "hooks";
import React from "react";

const fabStyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

/**
 * This Resume is, primarily in HTML and css as part of the cloud resume challenge.
 * @constructor
 */
export function Resume() {
  // ToDo - Add a way to download PDF resume
  useTitle("Resume");
  return (
    <Box p={2}>
      <CloudChallengeResume />
      <Fab
        sx={fabStyle}
        color="success"
        variant="extended"
        href={`${
          import.meta.env.VITE_SITE_URL
        }static/resume/DavidGrahamResume.pdf`}
      >
        <Download />
        Download pdf
      </Fab>
    </Box>
  );
}
