import { DpgPageError } from "components/DpgError";
import { Article } from "features/Article";
import React, { useEffect, useState } from "react";
import { api } from "../../services";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";

function ArticleList() {
  const [articles, setArticles] = useState<Article[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  useEffect(() => {
    setLoading(true);
    api
      .get("blog", null)
      .then((response) => {
        if (response.status === 200) {
          setArticles(response.data as Article[]);
        } else {
          setError(response.data);
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  if (error) {
    return <DpgPageError statusCode={404} message={error.message} />;
  }

  return (
    <>
      <Container>
        <Grid container spacing={6}>
          {loading ? (
            <p>loading</p>
          ) : articles ? (
            articles.map((article) => {
              return (
                <Grid item xs={4} key={article.id}>
                  <Card sx={{ maxWidth: 345, minHeight: 400 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="/static/cool-background.png"
                    />
                    <CardContent>
                      {/* ToDo: replace with an ArticleCard component*/}
                      <Link
                        to={`${article.id}`}
                        underline="none"
                        component={RouterLink}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          {article.title}
                        </Typography>
                      </Link>
                      <Typography variant="subtitle1" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })
          ) : (
            <p>error</p>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default ArticleList;
