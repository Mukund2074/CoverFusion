import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Form() {

  const [formData, setFormData] = useState({
    product_name: '',
    product_unit: '',
    transporter: '',
    date: '',
    address1: '',
    address2: '',
    address3: '',
    address4: '',
    cutomer_name: '',
    cutomer_mobile: '',
  })

  const inputFields = [
    { name: 'product_name', type: 'text', placeholder: 'Product Name' },
    { name: 'product_unit', type: 'text', placeholder: 'Product Unit' },
    { name: 'transporter', type: 'text', placeholder: 'Transporter' },
    { name: 'date', type: 'date', placeholder: 'Date' },
    { name: 'address1', type: 'text', placeholder: 'Address1' },
    { name: 'address2', type: 'text', placeholder: 'Address2' },
    { name: 'address3', type: 'text', placeholder: 'Address3' },
    { name: 'customer_name', type: 'text', placeholder: 'Customer Name' },
    { name: 'customer_mobile', type: 'tel', placeholder: 'Customer Mobile Number' },

  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("formData", formData)
  }




  return (
    <main className='bg-slate-100 min-h-screen min-w-screen   p-2 pb-16'>

      <form onSubmit={handleSubmit} className='flex flex-col gap-2 md:w-1/2 mx-auto p-2 bg-slate-300 shadow-xl rounded-xl shadow-slate-400 '>
      
        {inputFields.map((field, index) => {
          return (
            <span key={index} className='flex flex-col gap-2 items-start p-2'>
              <label htmlFor={field.name} className='text-sm font-bold text-start'> {field.placeholder}</label>
              <input 
              type={field.type} 
              name={field.name} 
              id={field.name} 
              onChange={handleChange}
              value={formData[field.name]}
              placeholder={field.placeholder} 
              className='w-full rounded-md p-2 bg-slate-200 shadow-sm shadow-slate-400' />
            </span>
          )
        })}

        {/* <button type='submit' className='p-2 mt-4 bg-blue-500 shadow-sm shadow-slate-400 rounded-md w-1/2 flex items-center justify-center mx-auto'>Next <BiChevronRight />  </button> */}
        <Link to={'/print'} state={formData} className='p-2 mt-4 bg-blue-500 shadow-sm shadow-slate-400 rounded-md w-1/2 flex items-center justify-center mx-auto'>Next <BiChevronRight />  </Link>
      </form>
    </main>
  )
}
