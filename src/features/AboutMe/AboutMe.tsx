import { Link } from "react-router-dom";
import blogUrl from "/assets/images/blog.png";
import constructionUrl from "/assets/images/construction.png";
import docUrl from "/assets/images/file.png";
import recycleUrl from "/assets/images/recycle-symbol.png";
import {
  Box,
  Card,
  CardContent,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useTitle } from "hooks";
import React from "react";

export function AboutMe() {
  useTitle("About Me");
  return (
    <Box padding={4}>
      {/*Title section*/}
      <Grid container id="title-section" m={1}>
        <Grid xs={12}>
          <Typography variant="h3" textAlign="center">
            Not all who wonder all lost...
          </Typography>
          <Typography variant="h4" textAlign="center" fontStyle="italic">
            But you&apos;re clearly in the wrong place
          </Typography>
          <Divider />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        textAlign="center"
        id="me-description-section"
        m={1}
      >
        <Grid xs={12} sm spacing={2} my={5}>
          <Typography variant="h5" fontWeight="bold" textAlign="justify">
            My name is David Graham.
          </Typography>
          <Typography textAlign="justify" my={2} fontSize="x-large">
            Hi, I&apos;m David. I am a web developer based in Washington, D.C.
            with experience in cloud infrastructure, environmental policy and an
            educational background in geophysics. If you would like to know
            more, take a look at my <Link to="/resume">resume</Link>.
          </Typography>
          <Typography textAlign="justify" my={2} fontSize="x-large">
            Most of my work is open-source and publicly available on{" "}
            <a href="https://github.com/dpgraham4401">GitHub</a>. You can follow
            me on{" "}
            <a href="https://www.linkedin.com/in/dpgraham4401/">LinkedIn</a> or{" "}
            <a href="https://twitter.com/Dpgraham4401">Twitter</a> (although I
            am not particular active).
          </Typography>
          <Typography textAlign="justify" my={2} fontSize="x-large">
            Outside of work and programming, you can find me climbing, sailing,
            golfing, backpacking, woodworking, or fixing something I broke.
          </Typography>
        </Grid>
        <Grid xs={4}></Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        textAlign="center"
        m={1}
        id="portfolio-section"
      >
        <Grid xs={12}>
          <Typography variant="h4" textAlign="center">
            Portfolio
          </Typography>
        </Grid>
        <Grid xs={12} id="contact-section">
          <Card>
            <CardContent>
              <Grid container>
                <Grid xs={6}>
                  <ListItem>
                    <ListItemButton
                      href="https://github.com/usepa/haztrak.git"
                      target="_blank"
                      sx={{ borderRadius: 5 }}
                    >
                      <ListItemIcon>
                        <img
                          src={recycleUrl}
                          alt="recycle icon"
                          height={35}
                          width={35}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={"Haztrak"}
                        secondary={
                          "An open-source web application for tracking hazardous waste"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </Grid>
                <Grid xs={6}>
                  <ListItem>
                    <ListItemButton
                      href="https://grahamconstructionco.com"
                      target="_blank"
                      sx={{ borderRadius: 5 }}
                    >
                      <ListItemIcon>
                        <img
                          src={constructionUrl}
                          alt="construction icon"
                          height={35}
                          width={35}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={"Graham Construction Co."}
                        secondary={
                          "A static website for a Dallas local residential construction company (managed by me)"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </Grid>
                <Grid xs={6}>
                  <ListItem>
                    <ListItemButton
                      href="https://github.com/dpgraham-com"
                      target="_blank"
                      sx={{ borderRadius: 5 }}
                    >
                      <ListItemIcon>
                        <img
                          src={blogUrl}
                          alt="Blog icon"
                          height={35}
                          width={35}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={"DPGraham.com"}
                        secondary={"An overkill personal website"}
                      />
                    </ListItemButton>
                  </ListItem>
                </Grid>
                <Grid xs={6}>
                  <ListItem>
                    <ListItemButton
                      href="https://github.com/usepa/e-manifest"
                      target="_blank"
                      sx={{ borderRadius: 5 }}
                    >
                      <ListItemIcon>
                        <img
                          src={docUrl}
                          alt="Blog icon"
                          height={35}
                          width={35}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={"e-Manifest Services Documentation"}
                        secondary={
                          "Deep dive on using the e-Manifest API to track hazardous waste electronically"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </Grid>
              </Grid>
              <a
                href="https://www.flaticon.com/free-icons/document"
                title="document icons"
              >
                <Typography variant="caption">
                  Document icons created by Freepik - Flaticon
                </Typography>
              </a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
