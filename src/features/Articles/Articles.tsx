import { Box } from "@mui/material";
import { ArticlesOverview, MarkdownArticle } from "components/article";
import { useTitle } from "components/hooks";
import React from "react";
import { Route, Routes } from "react-router-dom";

export interface Article {
  id: number;
  title: string;
  updateDate: Date;
  createDate: string;
  content: string;
}

export function Articles() {
  useTitle("Articles");
  return (
    <Box padding={4}>
      <Routes>
        <Route path="" element={<ArticlesOverview />} />
        <Route path=":id" element={<MarkdownArticle />} />
      </Routes>
    </Box>
  );
}
