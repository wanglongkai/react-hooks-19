import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import UseStateTest from '../pages/hooks/UseStateTest';
import UseReducerTest from '../pages/hooks/UseReducerTest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'test/hooks/useState',
        element: <UseStateTest />,
      },
      {
        path: 'test/hooks/useReducer',
        element: <UseReducerTest />,
      },
    ],
  },
]);

export default router;
