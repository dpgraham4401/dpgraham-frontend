import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Article } from "features/Articles";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface ArticlesGridProps {
  articles: Article[];
}

export function ArticlesGrid({ articles }: ArticlesGridProps) {
  return (
    <>
      {articles.map((article) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card sx={{ height: 400 }}>
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
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}
