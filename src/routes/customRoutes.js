import ArchivedPage from "../pages/ArchivedPage";
import HomePage from "../pages/HomePage";

const customRoutes = [
  {
    path: '/',
    element: HomePage,
  },
  {
    path: '/archived',
    element: ArchivedPage,
  },
];

export default customRoutes;
