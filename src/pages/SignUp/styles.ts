import styled from 'styled-components';
import { shade } from 'polished';

import bgSignUp from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${bgSignUp}) no-repeat center;
  background-size: cover;
`;

export const LoginArea = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    color: #f4ede8;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s, color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
      transform: translateX(-5px);
    }

    svg {
      margin-right: 10px;
    }
  }
`;
