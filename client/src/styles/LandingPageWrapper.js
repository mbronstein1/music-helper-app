import styled from 'styled-components';
import img from '../assets/images/music_set_2.jpg';

const LandingPageWrapper = styled.main`
  background-image: url(${img});
  background-color: ${props => props.theme.secondary};
  height: 89.3svh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-block: 4rem;
`;

export default LandingPageWrapper;
