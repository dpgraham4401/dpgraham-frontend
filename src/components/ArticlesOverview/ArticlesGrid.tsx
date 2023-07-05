import { Grid } from "@mui/material";
import { ArticleCard } from "components/ArticlesOverview/ArticleCard";
import { Article } from "features/Articles";
import React from "react";

interface ArticlesGridProps {
  articles: Article[];
}

/**
 * Renders a grid of articles
 * @param articles
 * @constructor
 */
export function ArticlesGrid({ articles }: ArticlesGridProps) {
  // For future reference, we could do things like client side filtering here
  return (
    <>
      {articles.map((article) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <ArticleCard article={article} />
          </Grid>
        );
      })}
    </>
  );
}
