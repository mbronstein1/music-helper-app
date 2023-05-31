import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/UI/RootLayout';
import LandingPage from './pages/LandingPage';
import Error from './pages/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
