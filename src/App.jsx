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
          { errors.email && (
            <p className='error'>{ `${errors.email.message}` }</p>
          )}
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
          { errors.password && (
            <p className='error'>{`${errors.password.message}`}</p>
          )}
          <input {
            ...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) => 
                value === getValues("password") || "Passwords do not match"
              
            })
          }
          type="password" placeholder='Confirm password' />
          { errors.confirmPassword && (
            <p className='error'>{`${errors.confirmPassword.message}`}</p>
          )}
          <button type='submit' disabled={isSubmitting}>Submit</button>
        </form>
    </div>
  )
}

export default App