import styled from 'styled-components'
import { Icon } from '../../../components/icon/Icon.tsx'
import { FlexWrapper } from '../../../components/FlexWrapper.tsx'
import { theme } from '../../../styles/Theme.ts'

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'} alignItems={'center'}>
        <Name>Svetlana</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'istaSvg'} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={'21px'}
                width={'21px'}
                viewBox={'0 0 21px 21px'}
                iconId={'telegramSvg'}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'vkSvg'} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedSvg'} />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2022 Svetlana Dyablo</Copyright>
      </FlexWrapper>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  background-color: ${theme.colors.primary};
  padding: 40px 0;
`

const Name = styled.span`
  font-family: josefin-sans, sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 3px;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialItem = styled.li``

const SocialLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.accent};
  
  &:hover {
    color: ${theme.colors.primary};
    transform: translateY(-4px);
  }
`

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`
