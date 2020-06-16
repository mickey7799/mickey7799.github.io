import styled from 'styled-components'
import React, { useContext} from 'react';
import Layout from '../components/Layout/Layout';
import { SectionTitle, Paragraph, Pill } from '../styles';
import { InfoContext } from "../contexts/infoContext";

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`
const Me = () => {

    const { info } = useContext(InfoContext);

    return (
        <Layout>
            <div>
                <SectionTitle>About Me</SectionTitle>
                <Paragraph>{info.basics.summary}</Paragraph>
            </div>

            <div>
                <SectionTitle>Skills</SectionTitle>
                <div>
                    {info.skills.map(skill => (
                        <Pill key={skill.name}>{skill.name}</Pill>
                    ))}
                </div>
            </div>
            
            <div>
                <SectionTitle>Profiles</SectionTitle>
                <ul>
                    {info.basics.profiles.map((profile, i) => (
                        <ProfileLink key={profile.network}>
                            {i !== 0 && ' | '}
                            <a href={profile.url} target="_blank" rel="noreferrer noopener">
                                {profile.network}
                            </a>
                        </ProfileLink>
                    ))}
                </ul>
            </div>
        </Layout>

    );
};

export default Me;