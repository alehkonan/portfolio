import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  padding: 1rem;
  background-color: #b18fbd;
  box-shadow: 0 1px 4px grey;
  font-size: 2rem;
`;

export const Header = () => {
  return (
    <HeaderStyles>
      <p>This is my portfolio</p>
    </HeaderStyles>
  );
};
