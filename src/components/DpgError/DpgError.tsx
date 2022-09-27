import React from "react";
import DpgCard from "components/DpgCard";
import { Container } from "react-bootstrap";

interface Props {
  statusCode?: number;
  message?: string;
}

// Component for displaying errors in a pretty bootstrap card
function DpgError(props: Props) {
  return (
    <Container>
      <DpgCard>
        <DpgCard.Header
          title={
            props.statusCode
              ? `Error: ${props.statusCode}`
              : "Sorry, we experienced and error"
          }
        />
        <DpgCard.Body>
          {props.message ? (
            <p>{props.message}</p>
          ) : (
            <p>Sorry, we experienced an error</p>
          )}
        </DpgCard.Body>
      </DpgCard>
    </Container>
  );
}

export default DpgError;
