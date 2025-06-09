import { useState } from 'react';
import './App.css'

function App() {

  const [ error, setError ] = useState("");
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("")
  const [ confirmPassword, setConfirmPassword ] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if(password !== confirmPassword) {
      setError("Passwords mismatch");
      setIsSubmitting(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
  }

  return (
    <>
      <h1>React Hook Form</h1>
      <p className='error'>{error}</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter password'value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" placeholder='Confirm password'value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        <button type='submit' disabled={isSubmitting}>Submit</button>
      </form>
    </>
  )
}

export default App
