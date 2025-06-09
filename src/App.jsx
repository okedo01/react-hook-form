import React from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    reset();
  }

  return (
    <div>
      <h1>React Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {
            ...register("email", {
              required: "Email is required",
            })
          } 
          type="email" placeholder='Enter email' />
          <input {
            ...register("password", {
              required: "Password is required",
              minLength: {
                value: 7,
                message: "Password must be 7 characters"
              }
            })
          }
          type="password" placeholder='Enter password' />
          <input {
            ...register("password", {
              required: "Confirm password is required"
            })
          }
          type="password" placeholder='Confirm password' />
          <button type='submit' disabled={isSubmitting}>Submit</button>
        </form>
    </div>
  )
}

export default App