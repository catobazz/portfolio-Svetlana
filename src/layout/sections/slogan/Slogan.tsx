import styled from 'styled-components'
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";

export const Slogan = () => {
  return (
  <StyledSlogan>
    <SectionTitle>I Am Aviable For Freelance</SectionTitle>
    <Button type={'button'}>Hire me</Button>
  </StyledSlogan>
  )
}

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #edcc45;
`
