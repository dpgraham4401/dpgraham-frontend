import { DpgPageError } from "components/DpgError";
import { Article } from "features/Article";
import React, { useEffect, useState } from "react";
import { api } from "../../services";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
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
                <Grid item xs={6} key={article.id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/cool-background.png"
                      />
                      {/* ToDo: replace with an ArticleCard component*/}
                      <p>{article.title}</p>
                      <Typography gutterBottom variant="h5" component="div">
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
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
