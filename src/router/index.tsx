import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';

// 路由懒加载
const UseStateTest = lazy(() => import('../pages/hooks/UseStateTest'));
const UseReducerTest = lazy(() => import('../pages/hooks/UseReducerTest'));
const UseActionStateTest = lazy(() => import('../pages/hooks/UseActionStateTest'));
const UseOptimisticTest = lazy(() => import('../pages/hooks/UseOptimisticTest'));
const ReactQueryTest = lazy(() => import('../pages/tanstack/ReactQueryTest'));
const CvaTest = lazy(() => import('../pages/stylecom/cva'));
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
      {
        path: 'test/hooks/useActionState',
        element: <UseActionStateTest />,
      },
      {
        path: 'test/hooks/useOptimistic',
        element: <UseOptimisticTest />,
      },
      {
        path: 'test/tanstack/reactQuery',
        element: <ReactQueryTest />,
      },
      {
        path: '/cva',
        element: <CvaTest />,
      },
    ],
  },
]);

export default router;
