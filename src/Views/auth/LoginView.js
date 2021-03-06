import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginView = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: 'cacevedo3@udi.edu.co',
    password: '123456'
  });

  const {email, password} = formValues;

  const handleLogin = (e) =>{
    e.preventDefault();
    dispatch(login(12345, 'Cesar'))
  }

  return (
    <div className="auth__container">
      <div className="auth__box-container">
        <div className="auth__box-containerLeft">
          <h3 className="auth__tittle">Login</h3>

          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Email" name="email" className="auth__input" autoComplete="off" value={email} onChange={handleInputChange} />
            <input type="password" placeholder="Password" name="password" className="auth__input" autoComplete="off" value={password} onChange={handleInputChange} />
            <button type="submit" className="btn btn-primary btn-block" >Login</button>
            <hr />

            <div className="auth__social-networks">
              <p>Login with social networks</p>
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p className="btn-text">
                  <b>Sign in with google</b>
                </p>
              </div>
            </div>

            <Link to='/register' className="link">Create a new Account</Link>

          </form>

        </div>
        <div className="auth__box-containerRight"></div>
      </div>
    </div>
  )
}
