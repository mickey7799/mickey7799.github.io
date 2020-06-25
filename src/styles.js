import styled from "styled-components";
import {red, white} from "@carbon/colors";

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
  line-height: 1.6;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: ${red[60]};
  color: ${white};
  border: 3px solid ${red[60]};
  border-radius: 2px;
  font-weight: bold;
`;
