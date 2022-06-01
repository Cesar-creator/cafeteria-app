import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterView = () => {
  return (
    <div className="auth__container">
      <div className="auth__box-container">
        <div className="auth__box-containerLeft">
          <h3 className="auth__tittle">Register</h3>
          <form>
            <input type="text" placeholder="Full Name" name="name" className="auth__input" autoComplete="off" />
            <input type="text" placeholder="Email" name="email" className="auth__input" autoComplete="off" />
            <input type="password" placeholder="Password" name="password" className="auth__input" autoComplete="off" />
            <input type="password" placeholder="Confirm Password" name="password2" className="auth__input" autoComplete="off" />
            <button type="submit" className="btn btn-primary btn-block" >Register</button>
            <hr />
            <Link to='/login' className="link">Already Register?</Link>
          </form>
        </div>
        <div className="auth__box-containerRight"></div>
      </div>
    </div>
  )
}
