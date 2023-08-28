import { CloudChallengeResume } from "components/CloudChallengeResume";
import { useTitle } from "hooks";
import React from "react";

/**
 * This Resume is, primarily in HTML and css as part of the cloud resume challenge.
 * @constructor
 */
export function Resume() {
  // ToDo - Add a way to download PDF resume
  useTitle("Resume");
  return <CloudChallengeResume />;
}
