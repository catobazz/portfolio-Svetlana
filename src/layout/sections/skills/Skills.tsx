import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper.tsx'
import { SectionTitle } from '../../../components/SectionTitle.tsx'
import { Skill } from './skill/Skill.tsx'
import { Container } from '../../../components/Container.ts'

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My skills</SectionTitle>
        <FlexWrapper wrap={'wrap'} justifyContent={'space-between'}>
          <Skill
            iconId={'codeSvg'}
            title={'html5'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'cssSvg'}
            title={'css3'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'reactSvg'}
            title={'React'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'tsSvg'}
            title={'typescript'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'styledSvg'}
            title={'styled components'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
          <Skill
            iconId={'figmaSvg'}
            title={'WEB DESIGN  '}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
            }
          />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  \
`
