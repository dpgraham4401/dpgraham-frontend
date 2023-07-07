import { CircularProgress, Container, Grid } from "@mui/material";
import { ArticlesGrid } from "components/ArticlesOverview/ArticlesGrid";
import { DpgPageError } from "components/DpgError";
import { Article } from "features/Articles";
import React from "react";
import { useQuery } from "services";

export function ArticlesOverview() {
  const [articles, loading, error] = useQuery<Article[]>("blog");

  if (error) {
    return <DpgPageError statusCode={404} message={error.message} />;
  }

  return (
    <>
      <Container>
        <Grid container spacing={6} justifyContent="center">
          {loading ? (
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "100px",
              }}
            >
              <CircularProgress size={100} />
            </Container>
          ) : articles ? (
            <ArticlesGrid articles={articles} />
          ) : (
            <p>error</p>
          )}
        </Grid>
      </Container>
    </>
  );
}
