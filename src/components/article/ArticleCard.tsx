import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { Article } from "features/Articles";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface ArticleCardProps {
  article: Article;
}

/**
 * ArticleCard renders a card with a title and a short description of the article.
 * @param article
 * @constructor
 */
export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <>
      <Card sx={{ height: 400 }}>
        <CardMedia
          component="img"
          alt="default image with triangles"
          height="140"
          image="/static/cool-background.png"
        />
        <CardContent>
          <Link to={`${article.id}`} underline="none" component={RouterLink}>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              We are still working on implementing sub titles for these cards.
              Read more...
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  );
}
