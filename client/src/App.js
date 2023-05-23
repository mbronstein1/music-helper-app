import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/UI/RootLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      // errorElement: <Error />,
      // children: [
      //   {
      //     index: true,
      //     element: <LandingPage />,
      //   },
      // ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
