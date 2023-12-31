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
  LearnDeckPage,
  LoginPage,
  PageNotFound,
  PersonalInfoPage,
  SignUpPage,
} from '@/pages'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
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
            path: '/learn/:id',
            element: <LearnDeckPage />,
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
