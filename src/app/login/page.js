'use client'
import { FaPlaystation } from 'react-icons/fa';

export default function Home() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState(false);

    function handleLogin(e) {
        e.preventDefault();

        try {
            if(!email && !password){
                alert("please enter email and password");
                return;
            }

            const user_email = localStorage.getItem('email');
            const user_pass = localStorage.getItem('password');

            if (user_email == email && user_pass == password) {
                window.location.href ='/dashboard';
            } else {
                alert('invalid email and password');
          }
        } catch (error) {
            console.error(error);
        }finally{
            setLoading(false);
            setEmail('');
            setPassword('');
        }
        
    }
    return (
     <main className="login">
         <div id='background'></div>
        <FaPlaystation color='#ff0000' size={60}/>
      <h1 className='signup-header'>Login Page</h1>

      <form onSubmit={handleLogin}>
        <div>
            <label>Email address</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value.trim())} placeholder="e.g admin@gmail.com"></input>
        </div>

        <div>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target)}required placeholder="******"></input>
        </div>

        <div className='submitbtn'>
            <button type="submit">Submit</button>
            
        </div>
        <div className='pw'>
            <a href='/login'>Forgot Password ?</a>
        </div>
        
      </form>
      <footer>
        <p>Questions? Contact Us</p>
        <a href='#'>FAQ</a>
        <a href='#'>Cookie Preference</a>
        <a href='#'>Help Center</a>
        <a href='#'>Corporate Information</a>
        <a href='#'>Terms of use</a>
      </footer>
     </main>
        
    );
  }