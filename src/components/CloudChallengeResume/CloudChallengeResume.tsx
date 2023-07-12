import {
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import { Container, Link } from "@mui/material";
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
            <div className={styles.contactInfoColumn}>
              {/* Email */}
              <Link
                href="mailto:dpgraham4401@gmail.com"
                underline={"none"}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.contactInfoItem}>
                  <Email className={styles.contactInfoIcon} />
                  <span className={styles.contactInfoField}>
                    dpgraham4401@gmail.com
                  </span>
                </div>
              </Link>
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
            </div>
            <div className={styles.contactInfoColumn}>
              {/* LinkedIn */}
              <Link
                href="https://linkedin.com/in/dpgraham4401"
                underline={"none"}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.contactInfoItem}>
                  <LinkedIn className={styles.contactInfoIcon} />
                  <span className={styles.contactInfoField}>dpgraham4401</span>
                </div>
              </Link>
              {/* GitHub */}
              <Link
                href="https://github.com/dpgraham4401"
                underline={"none"}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.contactInfoItem}>
                  <GitHub className={styles.contactInfoIcon} />
                  <span className={styles.contactInfoField}>
                    github.com/dpgraham4401
                  </span>
                </div>
              </Link>
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
                  <div className={styles.subSectionTitle}>
                    Full-Stack Developer
                  </div>
                  <div className={styles.subSectionDescription}>
                    United States Environmental Protection Agency (EPA)
                  </div>
                </div>
                <div className={styles.right}>
                  <div>May 2020 - Present</div>
                </div>
                <ul className={styles.subSectionBullet}>
                  <li>
                    Implemented new data analysis methods to group related
                    hazardous waste sites and automated outreach to exceed
                    hazardous waste generator registration targets.{" "}
                  </li>
                  <li>
                    Interfaced with stakeholder to collect, triage, and analyze
                    e-Manifest data-quality issues.
                  </li>
                  <li>
                    Designed, developed, and published an open-source web
                    application using modern web technologies, such as Django
                    and React, to track hazardous waste shipments with
                    electronic manifests instead of the current paper intensive
                    process.{" "}
                  </li>
                  <li>
                    Published API client libraries (TypeScript and Python) and
                    expanded documentation and guidance for stakeholders seeking
                    to use e-Manifest.
                  </li>
                </ul>
              </div>
              {/* Teaching Assistant */}
              <div className={styles.sectionListItem}>
                <div className={styles.left}>
                  <div className={styles.subSectionTitle}>
                    Teaching Assistant
                  </div>
                  <div className={styles.subSectionDescription}>
                    University of Texas at Dallas
                  </div>
                </div>
                <div className={styles.right}>
                  <div>Jan 2018 - May 2020</div>
                </div>
                <ul className={styles.subSectionBullet}>
                  <li>
                    Ensured that students completed courses with a working
                    knowledge of the subject through lecturing, office hours,
                    classroom preparation, field trips, grading. Classes
                    include:
                  </li>
                  <ul className={styles.twoColumns}>
                    <li>Exploratory Data Analysis</li>
                    <li>Applied Geophysics</li>
                    <li>3D Reservoir Modeling</li>
                    <li>History or Earth and Life</li>
                  </ul>
                </ul>
              </div>
              {/* Exploration Geophysics Intern */}
              <div className={styles.sectionListItem}>
                <div className={styles.left}>
                  <div className={styles.subSectionTitle}>
                    Exploration Geophysics Intern
                  </div>
                  <div className={styles.subSectionDescription}>
                    Occidental Petroleum
                  </div>
                </div>
                <div className={styles.right}>
                  <div>May 2019 - Aug 2019</div>
                </div>
                <ul className={styles.subSectionBullet}>
                  <li>
                    Equipped Bolivian exploratory team with expected seismic
                    response in Cretaceous fluvial formations for prospect
                    generation and well planning.
                  </li>
                  <li>
                    Utilized quantitative-interpretation and seismic inversion
                    in Naranjillos field to resolve compartmentalization in key
                    reservoirs and propose new well locations.
                  </li>
                </ul>
              </div>
              {/* Environmental Scientist */}
              <div className={styles.sectionListItem}>
                <div className={styles.left}>
                  <div className={styles.subSectionTitle}>
                    Environmental Scientist
                  </div>
                  <div className={styles.subSectionDescription}>
                    Alliance Technical Group (Formerly Alliance Source Testing)
                  </div>
                </div>
                <div className={styles.right}>
                  <div>Feb 2016 - May 2018</div>
                </div>
                <ul className={styles.subSectionBullet}>
                  <li>
                    Planned and executed industrial atmospheric emission testing
                    with federal and state defined wet chemistry methods to
                    determine client pollution rates and self-reported accuracy.
                  </li>
                </ul>
              </div>
            </div>
            {/* Climbing Wall*/}
            <div className={styles.sectionListItem}>
              <div className={styles.left}>
                <div className={styles.subSectionTitle}>
                  Climbing Wall Manager
                </div>
                <div className={styles.subSectionDescription}>
                  Southern Methodist University
                </div>
              </div>
              <div className={styles.right}>
                <div>Dec 2011 - May 2015</div>
              </div>
              <ul className={styles.subSectionBullet}>
                <li>
                  Streamlined daily safety inspections for the SMU climbing wall
                  staff to allow management to understand equipment status at a
                  glance.
                </li>
                <li>
                  Supervised the implementation of an intercollegiate climbing
                  competition with over 300 attendees and dozens of sponsors.
                </li>
                <li>
                  Undertook a year long training program to become an Outdoor
                  Trip Guide. Planned and guiding various commercial outdoor
                  excursions across the U.S. southwest.
                </li>
              </ul>
            </div>
          </div>
          {/* Education */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Education</div>
            <div>
              {/* UTD */}
              <div className={styles.sectionListItem}>
                <div className={styles.left}>
                  <div className={styles.subSectionTitle}>
                    Master of Science in Geophysics
                  </div>
                  <div className={styles.subSectionDescription}>
                    University of Texas at Dallas (UTD)
                  </div>
                  <div>
                    Thesis: Interpretation-Based Full-Waveform Inversion
                  </div>
                  <div>2018 - 2020</div>
                </div>
              </div>
              {/* SMU */}
              <div className={styles.sectionListItem}>
                <div className={styles.left}>
                  <div className={styles.subSectionTitle}>
                    Bachelors of Science
                  </div>
                  <div className={styles.subSectionDescription}>
                    Southern Methodist university (SMU)
                  </div>
                  <div>Minor in Mathematics</div>
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
        </div>
      </div>
    </Container>
  );
}
