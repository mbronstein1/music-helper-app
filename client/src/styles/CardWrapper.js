import styled from 'styled-components';

const CardWrapper = styled.section`
  padding: 1rem;
  max-width: 90%;
  text-align: center;
  color: ${props => props.theme.secondary};
  font-size: ${props => props.fontSize};
  background-color: ${props => props.theme.primary};
  border-radius: 12px;
  width: ${props => props.width};
  line-height: ${props => props.lineHeight};
  margin-top: ${props => props.margin};
  z-index: 0;
`;

export default CardWrapper;
