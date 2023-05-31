import styled from 'styled-components';

const Button = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: ${props => props.$primary && '1.3rem'};
  border-radius: 12px;

  &:hover {
    background-color: ${props => props.theme.hover};
  }
`;

export default Button;
