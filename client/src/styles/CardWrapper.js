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

  & h2 {
    border-bottom: 1px solid ${props => props.theme.secondary};
    padding-bottom: 1rem;
    margin-inline: 5rem;
  }

  & h3 {
    font-size: 1.2rem;
    padding: 1.5rem 1rem;
  }
`;

export default CardWrapper;
