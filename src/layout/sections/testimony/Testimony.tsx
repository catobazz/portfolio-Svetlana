import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle.tsx';
import { Icon } from '../../../components/icon/Icon.tsx';
import { Slider } from '../../../components/slider/Slider.tsx';
import { FlexWrapper } from '../../../components/FlexWrapper.tsx';
import {IconWrapper} from "../skills/skill/Skill.tsx";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction={'column'} alignItems={'center'}>
          <IconWrapper>
              <Icon iconId={'quoteSvg'} />
          </IconWrapper>
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  min-height: 100vh;
  background-color: rgba(152, 251, 145, 0.7);
    
    ${IconWrapper}{
        margin: 40px 0 80px;
    }
`;
