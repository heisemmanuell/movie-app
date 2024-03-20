//sign up page
'use client'
import { useEffect, useState } from "react";
import { FaPlaystation } from 'react-icons/fa';
//import styles from '.signup.css';

export default function Home() {
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');

    useEffect(
        () => { 
            const retrieveEmail = localStorage.getItem('email');
            setEmail(retrieveEmail);
        },[]
        ); 

    function handleSignup(){
        try {
            setLoading(true); //code to process signup
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
            setEmail('');
            setPassword('');
            setFullname('');
        }
    }
    return (
     <main className = "signup">
      
      <FaPlaystation color='#ff0000' size={60}/>
   
    
      <h1 className='signup-header'>Signup Page</h1>
      
     <form onSubmit={handleSignup}>
        <div>
            <label>Full name:</label>
            <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} required placeholder="e.g John Doe"></input>
        </div>

        <div>
            <label>Email address:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="e.g admin@gmail.com"></input>
        </div>

        <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="******"></input>
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>
     </form>
     </main>
        
    );
  }