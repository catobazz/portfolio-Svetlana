import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo.tsx';
import {Container} from '../../components/Container.ts';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';
import {HeaderMenu} from './headerMenu/HeaderMenu.tsx';

const items = ['home', 'skills', 'works', 'contact'];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justifyContent={'space-between'} alignItems={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(31, 31, 32, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    padding: 20px 0;

`;
