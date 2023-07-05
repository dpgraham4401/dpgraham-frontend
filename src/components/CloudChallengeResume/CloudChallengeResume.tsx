import { Card } from "@mui/material";
import React from "react";
import styles from "./resume.module.css";

/**
 * This Resume is, primarily in HTML and css as part of the cloud resume challenge.
 * @constructor
 */
export function CloudChallengeResume() {
  return (
    <Card sx={{ backgroundColor: "white", color: "black", padding: 2 }}>
      <div className={styles.container}>
        <div>
          <div>
            <span>John</span>
            <span>Doe</span>
          </div>
          <div>
            <span>Email: </span>
            <span>john.doe@gmail.com</span>
            <span></span>
            <span>Phone: </span>
            <span>111-222-3333</span>
          </div>

          <div>
            <span>Front-End Developer </span>
            <span>
              I am a front-end developer with more than 3 years of experience
              writing html, css, and js. I&apos;m motivated, result-focused and
              seeking a successful team-oriented company with opportunity to
              grow.
            </span>
          </div>
        </div>
        <div>
          <div>
            <div>Experience</div>
            <div>
              <div>
                <div>
                  <div>KlowdBox</div>
                  <div>San Fr, CA</div>
                  <div>Jan 2011 - Feb 2015</div>
                </div>
                <div>
                  <div>Fr developer</div>
                  <div>did This and that</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Akount</div>
                  <div>San Monica, CA</div>
                  <div>Jan 2011 - Feb 2015</div>
                </div>
                <div>
                  <div>Fr developer</div>
                  <div>did This and that</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>Education</div>
            <div>
              <div>
                <div>
                  <div>Sample Institute of technology</div>
                  <div>San Fr, CA</div>
                  <div>Jan 2011 - Feb 2015</div>
                </div>
                <div>
                  <div>Fr developer</div>
                  <div>did This and that</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Akount</div>
                  <div>San Monica, CA</div>
                  <div>Jan 2011 - Feb 2015</div>
                </div>
                <div>
                  <div>Fr developer</div>
                  <div>did This and that</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>Projects</div>
            <div>
              <div>
                <div>DSP</div>
                <div>
                  I am a front-end developer with more than 3 years of
                  experience writing html, css, and js. I&apos;m motivated,
                  result-focused and seeking a successful team-oriented company
                  with opportunity to grow.
                </div>
              </div>

              <div>
                <div>DSP</div>
                <div>
                  I am a front-end developer with more than 3 years of
                  experience writing html, css, and js. I&apos;m motivated,
                  result-focused and seeking a successful team-oriented company
                  with opportunity to grow. <a href="/login">link</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>Skills</div>
            <div>
              <div>
                <div>
                  <div>Javascript</div>
                </div>
                <div>
                  <input id="ck1" type="checkbox" checked />

                  <label htmlFor="ck1">asdf</label>
                  <input id="ck2" type="checkbox" checked />

                  <label htmlFor="ck2">asdf</label>
                  <input id="ck3" type="checkbox" />

                  <label htmlFor="ck3">asdf</label>
                  <input id="ck4" type="checkbox" />
                  <label htmlFor="ck4">asdf</label>
                  <input id="ck5" type="checkbox" />
                  <label htmlFor="ck5">ha</label>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>CSS</div>
              </div>
              <div>
                <input id="ck1" type="checkbox" checked />

                <label htmlFor="ck1">foo</label>
                <input id="ck2" type="checkbox" checked />

                <label htmlFor="ck2">hello</label>
                <input id="ck3" type="checkbox" />

                <label htmlFor="ck3">hello</label>
                <input id="ck4" type="checkbox" />
                <label htmlFor="ck4">foo</label>
                <input id="ck5" type="checkbox" />
                <label htmlFor="ck5">alsdk</label>
              </div>
            </div>
          </div>
          <div>
            <div>Interests</div>
            <div>
              <div>Football, programming.</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
