import styled from 'styled-components';

const NavbarWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.primary};
  padding: 1.5rem 2rem;
  color: ${props => props.theme.secondary};
`;

export default NavbarWrapper;
