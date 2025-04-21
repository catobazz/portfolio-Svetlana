import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle.tsx'
import { Button } from '../../../components/Button.tsx'
import { Container } from '../../../components/Container.ts'
import { FlexWrapper } from '../../../components/FlexWrapper.tsx'

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction={'column'} alignItems={'center'}>
          <SectionTitle>I Am Aviable For Freelance</SectionTitle>
          <Button type={'button'}>Hire me</Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  )
}

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #edcc45;
`
