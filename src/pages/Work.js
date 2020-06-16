import styled from 'styled-components';
import { white } from '@carbon/colors';
import React, {useContext} from 'react';
import Layout from '../components/Layout/Layout';
import { SectionTitle, Paragraph } from '../styles';
import { InfoContext } from '../contexts/infoContext';

export const WorkItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`

export const WorkTitle = styled.h4`
  font-weight: 700;
  color: #FF8C00;
`

export const JobTitle = styled.p`
  font-weight: bold;
  display: inline-block;
`
export const JobDescription = styled.p`
  margin-top: 0.6rem;
`

const Work = () => {
    const { info } = useContext(InfoContext);
    return (
      <Layout>
        <div>
          <SectionTitle>Work</SectionTitle>

          <ul>
            {info.work.map((work, i) => (
              <WorkItem key={i}>
                <WorkTitle>{work.position}</WorkTitle>

                <div>
                  <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>

                  <span> &sdot; </span>
                  
                  <span>
                    {work.start.year}/{work.start.month} to {work.end.year}/{work.end.month}
                  </span>
                </div>

                <Paragraph>
                    {work.highlights.map((highlight, i) => (
                        <JobDescription>- {highlight}</JobDescription>
                    ))}
                
                </Paragraph>
              </WorkItem>
            ))}
          </ul>

        </div>
      </Layout>
    );
  };
  
  export default Work;