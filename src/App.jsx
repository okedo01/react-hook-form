import { useState } from 'react';
import './App.css'

function App() {

  const [ error, setError ] = useState("");
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("")
  const [ confirmPassword, setConfirmPassword ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    isSubmitting(true);
    
    if(password !== confirmPassword) {
      console.log("mismatch");
    }

    isSubmitting(false);
  }

  return (
    <>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter email' value={email} onChange={() => setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter password'value={password} onChange={() => setPassword(e.target.value)}/>
        <input type="password" placeholder='Confirm password'value={confirmPassword} onChange={() => setConfirmPassword(e.target.value)}/>
        <button type='submit' disabled={isSubmitting}>Submit</button>
      </form>
    </>
  )
}

export default App
