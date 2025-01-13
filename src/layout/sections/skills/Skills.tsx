import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper.tsx';
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My skills</SectionTitle>
      <FlexWrapper>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;



