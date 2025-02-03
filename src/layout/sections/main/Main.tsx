import styled from 'styled-components';
import photo from './../../../assets/image/photo-1.webp';
import { FlexWrapper } from '../../../components/FlexWrapper.tsx';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper alignItems={'center'} justifyContent={'space-around'}>
        <div>
          <span>Hi There</span>
          <Name>I am Svetlana Dyablo</Name>
          <MainTitle>A Web Developer. </MainTitle>
        </div>
        <Photo src={photo} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #d1b878;
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const MainTitle = styled.h1`
 //
`;

const Name = styled.h2`
 //
`;