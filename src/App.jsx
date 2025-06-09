import { useState } from 'react';
import './App.css'

function App() {

  const [ error, setError ] = useState("");
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("")
  const [ confirmPassword, setConfirmPassword ] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if(password !== confirmPassword) {
      console.log("mismatch");
      
    }
  }

  return (
    <>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter email'/>
        <input type="password" placeholder='Enter password'/>
        <input type="password" placeholder='Confirm password'/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
