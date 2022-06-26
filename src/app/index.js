import { Layout } from 'layout';
import { MainPage } from 'pages';
import { ProjectDetails } from 'pages/main/widgets/ProjectDetails';
import { Routes, Route } from 'react-router-dom';
import { routeParams, routes } from 'routes';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.root} element={<Layout />}>
        <Route path={routes.root} element={<MainPage />}>
          <Route
            path={`:${routeParams.project}`}
            element={<ProjectDetails />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
