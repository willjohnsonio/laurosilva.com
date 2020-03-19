import React from 'react';
import styled from 'styled-components';
import Wave from './wave';

const SecondaryWrapper = styled.div`
  background: ${props => props.theme.color.primary.purple};
  height: 620px;
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  svg path {
    fill: #f3f2f8;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    height: 520px;
  }
`;

const SecondaryGroup = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.screen.sm};
  padding: 140px 20px;
  h1 {
    margin: 0;
    color: white;
    font-weight: 800;
    font-size: 72px;
    letter-spacing: -2px;
    line-height: 1;
    opacity: 0;
    animation: HeroAnimation 3s 0.1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 30px;
    line-height: 1.5;
    opacity: 0;
    animation: HeroAnimation 3s 0.8s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  button {
    font-size: 15px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    background: ${props => props.theme.color.dark.accent200};
    padding: 9px 20px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    opacity: 0;
    animation: HeroAnimation 1s 2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    z-index: 100;
    position: relative;
  }
  button:hover {
    color: white;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    background: ${props => props.theme.color.dark.accent100};
    border-color: rgba(255, 255, 255, 255);
  }

  @keyframes HeroAnimation {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 120px 20px;
    h1 {
      font-size: 40px;
      letter-spacing: -2px;
    }
    p {
      font-size: 22px;
    }
  }
`;

const Secondary = ({ children }) => (
  <SecondaryWrapper>
    <SecondaryGroup>{children}</SecondaryGroup>
    <Wave />
  </SecondaryWrapper>
);

export default Secondary;
