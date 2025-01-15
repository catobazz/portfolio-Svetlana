import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle.tsx';
import { Menu } from '../../../components/menu/Menu.tsx';
import { FlexWrapper } from '../../../components/FlexWrapper.tsx';
import { Work } from './work/Work.tsx';
import socialImg from './../../../assets/image/proj-1.webp';
import timerImg from './../../../assets/image/proj-2.webp';

const worksItems = ['All', 'Landing Pages', 'React', 'SPA'];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My works</SectionTitle>
      <Menu menuItems={worksItems} />
      <FlexWrapper justifyContent={'space-around'}>
        <Work
          title={'Social Network'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti dignissimos, fugiat ipsa ' +
            'ipsam itaque iure labore porro quod voluptatum! Blanditiis deserunt doloremque est libero quis rem ' +
            'repellendus reprehenderit, rerum.'
          }
          src={socialImg}
        />
        <Work
          title={'Timer'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti dignissimos, fugiat ipsa ' +
            'ipsam itaque iure labore porro quod voluptatum! Blanditiis deserunt doloremque est libero quis rem ' +
            'repellendus reprehenderit, rerum.'
          }
          src={timerImg}
        />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: rgba(251, 181, 145, 0.7);
`;
