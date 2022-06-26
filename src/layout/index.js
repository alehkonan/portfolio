import styled from 'styled-components';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { colors } from 'styles';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding: 1rem;
  background-color: ${colors.lightBlue};
`;

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};
