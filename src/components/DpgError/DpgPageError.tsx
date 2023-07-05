import { Card, CardContent, Container } from "@mui/material";
import React from "react";

interface Props {
  statusCode?: number;
  message?: string;
}

// Component for displaying errors in a pretty bootstrap card
export function DpgPageError(props: Props) {
  return (
    <Container>
      <Card>
        <CardContent>
          {props.message ? (
            <p>{props.message}</p>
          ) : (
            <p>Sorry, we experienced an error</p>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
