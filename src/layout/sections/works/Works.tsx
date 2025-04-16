import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle.tsx';
import { TabMenu } from './tabMenu/TabMenu.tsx';
import { FlexWrapper } from '../../../components/FlexWrapper.tsx';
import { Work } from './work/Work.tsx';
import socialImg from './../../../assets/image/proj-1.webp';
import timerImg from './../../../assets/image/proj-2.webp';
import {Container} from "../../../components/Container.ts";

const worksItems = ['All', 'Landing Pages', 'React', 'SPA'];

export const Works = () => {
  return (
    <StyledWorks>
        <Container>
            <SectionTitle>My works</SectionTitle>
            <TabMenu menuItems={worksItems} />
            <FlexWrapper justifyContent={'space-between'}>
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
        </Container>

    </StyledWorks>
  );
};

const StyledWorks = styled.section`
    //
`;
