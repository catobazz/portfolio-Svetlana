import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle.tsx';
import { Icon } from '../../../components/icon/Icon.tsx';
import { Slider } from '../../../components/slider/Slider.tsx';
import { FlexWrapper } from '../../../components/FlexWrapper.tsx';

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction={'column'} alignItems={'center'}>
        <Icon iconId={'quoteSvg'} />
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  min-height: 100vh;
  background-color: rgba(152, 251, 145, 0.7);
`;
