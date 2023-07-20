import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { PrivateRoute } from '@/components/private-route'
import { Layout } from '@/pages/layout'
import { LoginPage } from '@/pages/login-page/login-page.tsx'
import { PacksPage } from '@/pages/packs-page/packs-page.tsx'
import { SignUpPage } from '@/pages/sign-up/sign-up-page.tsx'
import 'react-toastify/dist/ReactToastify.css'

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
            element: <PacksPage />,
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
