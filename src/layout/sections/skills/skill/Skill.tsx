import { Icon } from '../../../../components/icon/Icon.tsx'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper.tsx'

type Props = {
  iconId: string
  title: string
  description: string
}

export const Skill = ({ iconId, title, description }: Props) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={'column'} alignItems={'center'}>
        <IconWrapper>
          <Icon iconId={iconId} />
        </IconWrapper>
        <SkillTitle>{title}</SkillTitle>
        <SkillText>{description}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  width: 380px;
  padding: 62px 20px 40px;
`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`

const SkillText = styled.p`
    text-align: center;
    line-height: 1.4;
`
const IconWrapper = styled.div`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`