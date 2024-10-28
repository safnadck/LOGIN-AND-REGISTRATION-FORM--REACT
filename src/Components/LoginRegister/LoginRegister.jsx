import { useState } from 'react';
import './LoginRegister.css'
import { FaEnvelope, FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginRegister = () => {

    const [action , setAction] = useState('');

    const regissterLink = () => {
        setAction(' active ');
    };

    const LoginLink = () => {
        setAction('');
    };


  return (
    <div className={`wrapper ${action}`}>
        <div className="form-box login">
            <form action="">
                <h1>login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required /> <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='password' required /> <FaLock  className='icon'/>
                </div>

                <div className="remeber-forgot">
                    <label>
                        <input type="checkbox" />
                        Remeber Me
                    </label>
                    <a href="#">Forget Password</a>
                </div>
                <button type='submit'>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#" onClick={regissterLink}>Register</a></p>
                </div>
            </form>
        </div>

        <div className="form-box register">
            <form action="">
                <h1>Registration</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required /> <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="email" placeholder='E-mail' required /> <FaEnvelope className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='password' required /> <FaLock  className='icon'/>
                </div>

                <div className="remeber-forgot">
                    <label>
                        <input type="checkbox" />
                        I agree to the term & condition
                    </label>
                    
                </div>
                <button type='submit'>Register</button>
                <div className="register-link">
                    <p>Already have an account? <a href="#" onClick={LoginLink}>Login</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginRegister