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

const softSkills = [
  "Public Speaking",
  "Problem Analysis",
  "Project Management",
  "Customer Service",
  "Conflict Resolution",
];

const hardSkills = [
  "Python",
  "JavaScript/TypeScript",
  "Git",
  "SQL",
  "Docker",
  "Linux",
  "GitHub Actions",
  "Go",
  "Bash/shell scripting",
  "Kubernetes",
  "Django",
  "React.js",
  "HTML/CSS",
  "Terraform",
  "Devops",
  "CI/CD",
  "Containerization",
  "Cloud Computing",
  "Technical/Policy Writing",
];

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
              Web developer with 4 years of experience using back end and
              front-end technology, familiar with managing cost-effective cloud
              solutions, and a background in Geophysics and environmental
              science.
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
                    Full-Stack Developer and Environmental Policy Writer
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
                    Designed and an open-source web application called “Haztrak”
                    to illustrate how hazardous waste handlers can use modern
                    web development practices to electronically track waste.
                  </li>
                  <li>
                    Open-sourced client libraries (TypeScript and Python) and
                    expanded web service documentation to assist stakeholders
                    struggling to parse multipart/mixed API responses.
                  </li>
                  <li>
                    Acted as a liaison between EPA and trade associations to
                    communicate changes in policy, technical requirement, and
                    listen to concerns and issues.
                  </li>
                  <li>
                    Promulgated national policies that established the legal
                    framework for users to submit signatures through e-Manifest
                    web services; co-authored the e-Manifest Third Rule which
                    established requirements for reports to be submitted
                    digitally.
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
                  Streamlined daily safety inspections to allow staff to
                  understand equipment status at a glance.
                </li>
                <li>
                  Supervised the implementation of an intercollegiate climbing
                  competition with over 300 competitors and dozens of cooperate
                  sponsors.
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
                    Bachelors of Science in Geophysics
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
              <div className={styles.skillsSection}>
                <div className={styles.skillsRow}>
                  {hardSkills.map((skill) => (
                    <div key={`${skill}-skill`} className={styles.skill}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.skillsSection}>
                <div className={styles.left}>
                  <div className={styles.name}>Soft</div>
                </div>
                <div className={styles.skillsRow}>
                  {softSkills.map((skill) => (
                    <div key={`${skill}-skill`} className={styles.skill}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Certifications and Courses */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Certification and Courses</div>
            <div className={styles.compactListItem}>
              CPR/AED and First Aid – American Trauma Event Management
            </div>
            <div className={styles.compactListItem}>
              GitHub Actions Workshop – Microsoft
            </div>
            <div className={styles.compactListItem}>
              RCRA Hazardous Waste Training – McCoy and Associates
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
              </div>
              <div className={styles.right}>
                <div className={styles.name}>2023</div>
              </div>
              <div>
                <span>EPA National Awards - </span>
                <span>
                  For automating outreach to exceed user registration targets by
                  350%.
                </span>
              </div>
            </div>
            {/* ORCR 2022 */}
            <div className={styles.compactListItem}>
              <div className={styles.left}>
                <div className={styles.name}>
                  Serving the Public with Integrity and a Strong Work Ethic
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.name}>2022</div>
              </div>
              <div>
                <span>
                  Office of Resource Conservation and Recovery (ORCR) -{" "}
                </span>
                <span>
                  For going above and beyond to host public meetings to gather
                  stakeholder input.
                </span>
              </div>
            </div>
            {/* ORCR 2021 */}
            <div className={styles.compactListItem}>
              <div className={styles.left}>
                <div className={styles.name}>
                  Serving the Public with Integrity and a Strong Work Ethic
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.name}>2021</div>
              </div>
              <div>
                <span>
                  Office of Resource Conservation and Recovery (ORCR) -{" "}
                </span>
                <span>
                  For going above and beyond to host public meetings to gather
                  stakeholder input.
                </span>
              </div>
            </div>
            {/* ORCR 2020 */}
            <div className={styles.compactListItem}>
              <div className={styles.left}>
                <div className={styles.name}>People as our Strength</div>
              </div>
              <div className={styles.right}>
                <div className={styles.name}>2020</div>
              </div>
              <div>
                <span>
                  Office of Resource Conservation and Recovery (ORCR) -{" "}
                </span>
                <span>
                  For quickly picking up new skills in the face of adverse
                  conditions.
                </span>
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
