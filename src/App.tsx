import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { PrivateRoute } from '@/components/private-route'
import 'react-toastify/dist/ReactToastify.css'
import { Layout, LoginPage, Packs, SignUpPage } from '@/pages'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <Packs />,
          },
        ],
      },
    ],
  },
  {
    path: '/sign-in',
    element: <LoginPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
])

export const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <RouterProvider router={routes} />
    </>
  )
}
