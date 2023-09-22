import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useTitle } from "hooks";
import React from "react";

export function AboutMe() {
  useTitle("About Me");
  return (
    <Box padding={4}>
      {/*Title section*/}
      <Grid container>
        <Grid xs={12}>
          <Typography variant="h3" textAlign="center">
            Not all who wonder all lost...
          </Typography>
          <Typography variant="h4" textAlign="center" fontStyle="italic">
            But you&apos;re clearly in the wrong place
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            But while you&apos;re here, let me tell you a little about myself.
          </Typography>
          <Divider />
        </Grid>
      </Grid>
      <Grid container spacing={2} textAlign="center">
        <Grid xs={12} sm>
          <Box
            component={"img"}
            sx={{ borderRadius: 1 }}
            alt="Selfie of me climbing in Protero Chico, Mexico"
            src="https://dev.dpgraham.com/static/images/dg_protero_chico.JPG"
            style={{ width: "100%", maxWidth: 400 }}
          />
          <div>
            <Typography fontStyle="italic" variant="caption">
              A selfie of myself a half-way through{" "}
              <a href="https://www.mountainproject.com/photo/119875709/starting-to-lead-p7-on-yankee-clipper-potrero-chico-oct-2020">
                Yankee Clipper
              </a>{" "}
              in Portrero Chico, Mexico.
            </Typography>
          </div>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid xs={12} sm spacing={2} my={5}>
          <Typography textAlign="justify" my={2} fontSize="larger">
            Hi, I&apos;m David. I am a Washington, DC based web developer with
            experience in cloud infrastructure, environmental policy and an
            educational background in geophysics.
          </Typography>
          <Typography textAlign="justify" my={2} fontSize="larger">
            I started working for the Environmental Protection Agency (EPA) in
            2020 for the{" "}
            <a href="https://epa.gov/e-manifest">e-Manifest Program</a> as part
            of the policy team. However, I quickly started to apply my technical
            skills to the program, and now do both policy and development work.
          </Typography>
          <Typography textAlign="justify" my={2} fontSize="larger">
            When I&apos;m not working, you can find me climbing, sailing,
            golfing, backpacking, woodworking, or fixing something I broke.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
