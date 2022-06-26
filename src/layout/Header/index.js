import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles';

const HeaderStyles = styled.header`
  padding: 1rem;
  color: ${colors.yellow};
  background-color: ${colors.blue};
  box-shadow: 0 2px 5px ${colors.yellow};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
`;

export const Header = () => {
  return (
    <HeaderStyles>
      <Title>My portfolio</Title>
    </HeaderStyles>
  );
};
