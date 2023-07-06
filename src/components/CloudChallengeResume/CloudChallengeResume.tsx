import {
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";
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
          <div className={styles.position}>Full Stack Developer</div>
          <div className={styles.summary}>
            {/* Summary ToDo: update*/}
            <span>
              Full-stack developer versed in cloud infrastructure and proficient
              at developing cost-effective solutions. Seeking a work environment
              with diverse ideas and opportunities for continued growth.
            </span>
          </div>
          {/* Contact info */}
          <div className={styles.contactSection}>
            <div className={styles.contactInfo}>
              {/* Email */}
              <div className={styles.contactInfoItem}>
                <Email className={styles.contactInfoIcon} />
                <span className={styles.contactInfoField}>
                  dpgraham4401@gmail.com
                </span>
              </div>
              {/* Phone */}
              <div className={styles.contactInfoItem}>
                <Phone className={styles.contactInfoIcon} />
                <span className={styles.contactInfoField}>214-263-4401</span>
              </div>
              {/* Location */}
              <div className={styles.contactInfoItem}>
                <LocationOn className={styles.contactInfoIcon} />
                <span className={styles.contactInfoField}>Washington, DC</span>
              </div>
              {/* LinkedIn */}
              <div className={styles.contactInfoItem}>
                <LinkedIn className={styles.contactInfoIcon} />
                <span className={styles.contactInfoField}>
                  linkedin.com/in/dpgraham4401
                </span>
              </div>
              {/* GitHub */}
              <div className={styles.contactInfoItem}>
                <GitHub className={styles.contactInfoIcon} />
                <span className={styles.contactInfoField}>
                  github.com/dpgraham4401
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Body */}
        <div className={styles.contents}>
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
            <div className={styles.skillsSection}>
              <div className={styles.left}>
                <div className={styles.name}>Hard</div>
              </div>
              <div className={styles.skillsRow}>
                <div className={styles.skill}>Devops</div>
                <div className={styles.skill}>CI/CD</div>
                <div className={styles.skill}>Linux</div>
                <div className={styles.skill}>Containerization</div>
                <div className={styles.skill}>Cloud Infrastructure</div>
              </div>
            </div>
            <div>
              <div className={styles.skillsSection}>
                <div className={styles.left}>
                  <div className={styles.name}>Tools and Languages</div>
                </div>
                <div className={styles.skillsRow}>
                  <div className={styles.skill}>Python</div>
                  <div className={styles.skill}>JavaScript/TypeScript</div>
                  <div className={styles.skill}>SQL</div>
                  <div className={styles.skill}>Go</div>
                  <div className={styles.skill}>Bash/shell scripting</div>
                  <div className={styles.skill}>Git</div>
                  <div className={styles.skill}>Docker</div>
                  <div className={styles.skill}>Kubernetes</div>
                  <div className={styles.skill}>Django</div>
                  <div className={styles.skill}>React.js</div>
                  <div className={styles.skill}>GitHub Actions</div>
                  <div className={styles.skill}>Terraform</div>
                </div>
              </div>
              <div className={styles.skillsSection}>
                <div className={styles.left}>
                  <div className={styles.name}>Soft</div>
                </div>
                <div className={styles.skillsRow}>
                  <div className={styles.skill}>Public Speaking</div>
                  <div className={styles.skill}>Problem Analysis</div>
                  <div className={styles.skill}>Project Management</div>
                  <div className={styles.skill}>Customer Service</div>
                  <div className={styles.skill}>Attention to Detail</div>
                </div>
              </div>
            </div>
          </div>
          {/* Certifications and Courses */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Certification and Courses</div>
            <div className={styles.compactListItem}>
              Google Cloud Associate Cloud Engineer
            </div>
            <div className={styles.compactListItem}>
              Microsoft GitHub Actions Workshop
            </div>
            <div className={styles.compactListItem}>
              McCoy RCRA Hazardous Waste Training
            </div>
          </div>
          {/* Awards */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Awards</div>
            {/* EPA Generator Registration */}
            <div className={styles.compactListItem}>
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
            <div className={styles.compactListItem}>
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
            <div className={styles.compactListItem}>
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
            <div className={styles.compactListItem}>
              <div className={styles.left}>
                <div className={styles.name}>People as our Strength</div>
                <div>Office of Resource Conservation and Recovery (ORCR)</div>
              </div>
              <div className={styles.right}>
                <div className={styles.name}>2020</div>
              </div>
            </div>
            {/* Eagle Scout */}
            <div className={styles.compactListItem}>
              <div className={styles.left}>
                <div className={styles.name}>Eagle Scout</div>
                <div>Boy Scouts of America</div>
              </div>
              <div className={styles.right}>
                <div className={styles.name}>2011</div>
              </div>
            </div>
          </div>
          {/* Publications */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Publications</div>
            <div>
              <div className={styles.compactListItem}>
                <div>
                  <b>Graham, D.,</b> D. Lumley, W. Zhou, J. Shragge, J. Bourget,
                  2019,{" "}
                  <i>
                    Interpretation-based full waveform Inversion of a western
                    Australian data set
                  </i>
                  , 88th Annual International Meeting, SEG, Expanded
                  Abstracts,1863-1867
                </div>
              </div>
              <div className={styles.compactListItem}>
                <div>
                  Sica, C., <b>Graham, D.</b> [and 11 others], 2017,{" "}
                  <i>
                    Geophysical investigation of Tyouni Pueblo in Bandelier
                    National Monument, New Mexico, USA
                  </i>
                  , presented at the 98th annual meeting, AGU.
                </div>
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
