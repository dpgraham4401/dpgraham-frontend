import { Box } from "@mui/material";
import { useTitle } from "components/hooks";
import React from "react";

export function AboutMe() {
  useTitle("About Me");
  return (
    <Box padding={4}>
      <p>coming soon</p>
    </Box>
  );
}
