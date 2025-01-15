import styled from 'styled-components'
import { Icon } from '../../../components/icon/Icon.tsx'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'} alignItems={'center'}>
        <Name>Svetlana</Name>
        <SocialList>
          <SocialItem>
            <SociaLink>
              <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'istaSvg'} />
            </SociaLink>
          </SocialItem>
          <SocialItem>
            <SociaLink>
              <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegramSvg'} />
            </SociaLink>
          </SocialItem>
          <SocialItem>
            <SociaLink>
              <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'vkSvg'} />
            </SociaLink>
          </SocialItem>
          <SocialItem>
            <SociaLink>
              <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedSvg'} />
            </SociaLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2022 Svetlana Dyablo</Copyright>
      </FlexWrapper>

    </StyledFooter>
  )
}

const StyledFooter = styled.section`
  min-height: 20vh;
  background-color: #834a36;
`

const Name = styled.span``

const SocialList = styled.ul`
display: flex;
gap: 30px;
`

const SocialItem = styled.li``

const SociaLink = styled.a``

const Copyright = styled.small``
