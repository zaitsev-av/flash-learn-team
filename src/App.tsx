import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { LoginForm } from '@/components/auth'
import { Layout } from '@/pages/layout'
import { Packs } from '@/pages/packs'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Packs />,
      },
      {
        path: 'login',
        element: <LoginForm onSubmit={() => {}} />,
      },
    ],
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
