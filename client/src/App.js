import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/UI/RootLayout';
import LandingPage from './pages/LandingPage';
import Error from './pages/Error';
import Login from './pages/Login';
import Signup from './pages/Signup';

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
        {
          path: 'signup',
          element: <Signup />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
