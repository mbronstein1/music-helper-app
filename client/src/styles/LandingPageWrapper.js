import styled from 'styled-components';
import img from '../assets/images/music_set_2.jpg';

const LandingPageWrapper = styled.main`
  background-image: url(${img});
  background-color: ${props => props.theme.secondary};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 88.5svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-block: 4rem;
`;

export default LandingPageWrapper;
