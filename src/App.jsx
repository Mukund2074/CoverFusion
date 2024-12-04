import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Form from './Form';
import PrintPage from './Printer';

export default function App({ children }) {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
    },
    {
      path: "/print",
      element: <PrintPage />,
    },
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={router} />
      {children}
    </React.Fragment>
  )
}
