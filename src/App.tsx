import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PrivateRoute } from '@/components/private-route'
import { Layout } from '@/pages/layout'
import { LoginPage } from '@/pages/login-page/login-page.tsx'
import { Packs } from '@/pages/packs'
import { SignUpPage } from '@/pages/sign-up/sign-up-page.tsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute />, // без children
    children: [
      {
        path: '/',
        element: <Layout />,
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
  return <RouterProvider router={routes} />
  // return (
  //   <>
  //     <Layout />
  //   </>
  // )
}
