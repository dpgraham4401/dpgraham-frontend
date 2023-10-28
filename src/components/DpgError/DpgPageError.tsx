import { Card, CardContent, Container } from "@mui/material";
import React from "react";

interface DpgPageErrorProps {
  statusCode?: number;
  message?: string;
}

// Component for displaying errors in a pretty bootstrap card
export function DpgPageError({ message, statusCode }: DpgPageErrorProps) {
  return (
    <Container sx={{ p: 3 }}>
      <Card>
        <CardContent sx={{ textAlign: "center" }}>
          <h1>{statusCode}</h1>
          {message ? (
            <h2>{message}</h2>
          ) : (
            <h3>Sorry, we experienced an error</h3>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
