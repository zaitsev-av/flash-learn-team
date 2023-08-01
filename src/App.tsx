import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { PrivateRoute } from '@/components/private-route'
import 'react-toastify/dist/ReactToastify.css'
import {
  CardsPage,
  CheckEmailPage,
  DecksPage,
  ForgotPasswordPage,
  Layout,
  LoginPage,
  PersonalInfoPage,
  SignUpPage,
} from '@/pages'

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
            element: <DecksPage />,
          },
          {
            path: '/cards/:id',
            element: <CardsPage />,
          },
          {
            path: '/profile',
            element: <PersonalInfoPage />,
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
      {
        path: '/forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: '/check-email',
        element: <CheckEmailPage />,
      },
    ],
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
