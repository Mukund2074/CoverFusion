import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
      <h2 className='text-xl font-bold py-4 px-2 bg-slate-300 shadow-md rounded-b-xl shadow-slate-400 sticky top-0 left-0 right-0 z-40 '> COVER FUSION</h2>
      <RouterProvider router={router} />
      {children}

      <section className=''>
      <h2 className='text-xs font-semibold border-2 border-slate-700 py-4 px-2 bg-slate-300 shadow-md shadow-slate-400 sticky top-0 left-0 right-0 z-50 '> COVER FUSION is created by <a href='https://portfolio-mukund-hadiya.netlify.app/' className='font-bold text-blue-500 underline '>Mukund Hadiya</a></h2>
      </section>
    </React.Fragment>

  )
}
