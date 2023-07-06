import { Container } from "@mui/material";
import React from "react";
import styles from "./resume.module.css";

/**
 * This Resume is, primarily in HTML and css as part of the cloud resume challenge.
 * @constructor
 */
export function CloudChallengeResume() {
  return (
    <Container sx={{ justifyContent: "center" }}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.fullName}>
            <span className={styles.firstName}>David</span>
            <span className={styles.lastName}>Graham</span>
          </div>
          <div className={styles.contactInfo}>
            <span className={styles.email}>Email: </span>
            <span>dpgraham4401@gmail.com</span>
            <span className={styles.separator}></span>
            <span className={styles.phone}>Phone: </span>
            <span>214-263-4401</span>
          </div>
          <div>
            {/* Summary ToDo: update*/}
            <span className={styles.position}>Full-Stack Developer</span>
            <span>
              I am a full-stack developer, well versed in analyzing a wide array
              of problems and developing cost-effective solutions. Thrives under
              pressure and is proficient in communicating complex concepts to
              diverse audiences. Seeking a work environment with diverse ideas
              and opportunities for continued growth.
            </span>
          </div>
        </div>
        {/* Body */}
        <div className={styles.details}>
          {/* Experience */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Experience</div>
            <div>
              {/* EPA */}
              <div className={styles.sectionListItem}>
                <div className={styles.left}>
                  <div className={styles.name}>
                    United States Environmental Protection Agency (EPA)
                  </div>
                  <div>Washington, DC</div>
                  <div>May 2020 - Present</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.name}>
                    Full-Stack developer and environmental policy writer
                  </div>
                  <div>did This and that</div>
                </div>
              </div>
              {/* Teaching Assistant */}
              <div className={styles.sectionListItem}>
                <div className={styles.left}>
                  <div className={styles.name}>
                    University of Texas at Dallas
                  </div>
                  <div>Dallas, TX</div>
                  <div>Jan 2018 - May 2020</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.name}>Teaching Assistant</div>
                  <div>did This and that</div>
                </div>
              </div>
              {/* Exploration Geophysics Intern */}
              <div className={styles.sectionListItem}>
                <div className={styles.left}>
                  <div className={styles.name}>Occidental Petroleum</div>
                  <div>Houston, TX</div>
                  <div>May 2019 - Aug 2019</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.name}>
                    Exploration Geophysics Intern
                  </div>
                  <div>did This and that</div>
                </div>
              </div>
              {/* Environmental Scientist */}
              <div className={styles.sectionListItem}>
                <div className={styles.left}>
                  <div className={styles.name}>
                    Alliance Technical Group (Formerly Alliance Source Testing
                    LLC.)
                  </div>
                  <div>Dallas, TX</div>
                  <div>Feb 2016 - May 2018</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.name}>Environmental Scientist</div>
                  <div>did This and that</div>
                </div>
              </div>
              {/* Climbing Wall*/}
              <div className={styles.sectionListItem}>
                <div className={styles.left}>
                  <div className={styles.name}>
                    Southern Methodist University
                  </div>
                  <div>Dallas, TX</div>
                  <div>Dec 2011 - May 2015</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.name}>Climbing Wall Manager</div>
                  <div>did This and that</div>
                  <div className={styles.name}>Trip Leader</div>
                  <div>did This and that</div>
                </div>
              </div>
            </div>
          </div>
          {/* Education */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Education</div>
            <div>
              {/* UTD */}
              <div className={styles.sectionListItem}>
                <div className={styles.left}>
                  <div className={styles.name}>
                    Master of Science in Geophysics
                  </div>
                  <div>University of Texas at Dallas (UTD)</div>
                  <div>2018 - 2020</div>
                </div>
                <div className={styles.right}>
                  <div>
                    Thesis: Interpretation-Based Full-Waveform Inversion
                  </div>
                </div>
              </div>
              {/* SMU */}
              <div className={styles.sectionListItem}>
                <div className={styles.left}>
                  <div className={styles.name}>Bachelors of Science</div>
                  <div>Minor in Mathematics</div>
                  <div>Southern Methodist university (SMU)</div>
                  <div>2011 - 2015</div>
                </div>
              </div>
            </div>
          </div>
          {/* Skills */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Skills</div>
            <div className={styles.skills}>
              <div className={styles.skillsItem}>
                <div className={styles.left}>
                  <div className={styles.name}>Javascript</div>
                </div>
              </div>
            </div>
            <div className={styles.skillsItem}>
              <div className={styles.left}>
                <div className={styles.name}>CSS</div>
              </div>
            </div>
          </div>
          {/* Awards */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Awards</div>
            {/* EPA Generator Registration */}
            <div className={styles.awardListItem}>
              <div className={styles.left}>
                <div className={styles.name}>
                  EPA Outstanding Performance Management
                </div>
                <div>EPA National Awards</div>
              </div>
              <div className={styles.right}>
                <div className={styles.name}>2023</div>
              </div>
            </div>
            {/* ORCR 2022 */}
            <div className={styles.awardListItem}>
              <div className={styles.left}>
                <div className={styles.name}>
                  Serving the Public with Integrity and a Strong Work Ethic
                </div>
                <div>Office of Resource Conservation and Recovery (ORCR)</div>
              </div>
              <div className={styles.right}>
                <div className={styles.name}>2022</div>
              </div>
            </div>
            {/* ORCR 2021 */}
            <div className={styles.awardListItem}>
              <div className={styles.left}>
                <div className={styles.name}>
                  Serving the Public with Integrity and a Strong Work Ethic
                </div>
                <div>Office of Resource Conservation and Recovery (ORCR)</div>
              </div>
              <div className={styles.right}>
                <div className={styles.name}>2021</div>
              </div>
            </div>
            {/* ORCR 2020 */}
            <div className={styles.awardListItem}>
              <div className={styles.left}>
                <div className={styles.name}>People as our Strength</div>
                <div>Office of Resource Conservation and Recovery (ORCR)</div>
              </div>
              <div className={styles.right}>
                <div className={styles.name}>2020</div>
              </div>
            </div>
            {/* Eagle Scout */}
            <div className={styles.awardListItem}>
              <div className={styles.left}>
                <div className={styles.name}>Eagle Scout</div>
                <div>Boy Scouts of America</div>
              </div>
              <div className={styles.right}>
                <div className={styles.name}>2011</div>
              </div>
            </div>
          </div>
          {/* Interests */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Interests</div>
            <div>
              <div className={styles.sectionListItem}>
                Programming, rock climbing, sailing, backpacking.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
