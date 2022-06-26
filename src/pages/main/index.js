import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Navigation } from './widgets/Navigation';

const PageContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Content = styled.div`
  flex: 1;
`;

export const MainPage = () => {
  return (
    <PageContainer>
      <Navigation />
      <Content>
        <Outlet />
      </Content>
    </PageContainer>
  );
};
