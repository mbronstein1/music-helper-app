import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.primary};
  padding: 0.5rem 2rem;
  color: ${props => props.theme.tertiary};
`;

export default Navbar;
