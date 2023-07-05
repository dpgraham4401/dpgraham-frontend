import { Article } from "features/Article";
import React from "react";
import ReactMarkdown from "react-markdown";

interface DpgMarkdownProps {
  article: Article;
}

/**
 * Wrapper around react-markdown library for rendering markdown safely
 * that we apply some default styling to.
 * @param article {Article}
 * @constructor
 */
function DpgMarkdown({ article }: DpgMarkdownProps) {
  return (
    <ReactMarkdown
      children={article.content}
      components={{
        img: ({ node, ...props }) => (
          <img
            style={{ maxWidth: "100%" }}
            alt={"alt description"}
            {...props}
          />
        ),
        pre: ({ node, ...props }) => (
          <pre
            style={{
              background: "var(--dpg-lightgray)",
              borderRadius: "10px",
              padding: "10px",
              ...props.style,
            }}
            {...props}
          />
        ),
        code: ({ node, ...props }) => (
          <code
            style={{
              borderRadius: "5px",
              padding: "1px 5px",
              ...props.style,
            }}
            {...props}
          />
        ),
      }}
    />
  );
}

export default DpgMarkdown;
