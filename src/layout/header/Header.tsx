import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo.tsx';
import { Menu } from '../../components/menu/Menu.tsx';

const items = ['home', 'skills', 'works', 'contact'];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={items}/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #88f67d;
    display: flex;
    justify-content: space-between;
`;
