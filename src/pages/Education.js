import styled from "styled-components";
import {white} from "@carbon/colors";
import React, {useContext} from "react";
import Layout from "../components/Layout/Layout";
import {SectionTitle, Paragraph} from "../styles";
import {InfoContext} from "../contexts/infoContext";

export const EducationItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const Institution = styled.h4`
  font-weight: 700;
  color: #ff8c00;
`;

export const Degree = styled.p`
  font-weight: bold;
  display: inline-block;
`;

const Education = () => {
  const {info} = useContext(InfoContext);

  return (
    <Layout>
      <div>
        <SectionTitle>Education</SectionTitle>

        <ul>
          {info.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>{education.institution}</Institution>

              <div>
                <Degree>
                  {education.studyType}, {education.area}
                </Degree>{" "}
                <span> &sdot; </span>
                <span>
                  {education.start.year} to {education.end.year}
                </span>
              </div>

              <Paragraph>{education.description.replace("\n\n", "\n")}</Paragraph>
            </EducationItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;
