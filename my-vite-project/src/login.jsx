import React from 'react';
import './login.css'; // we will create this CSS

function LoginPage() {
  return (
    <div className="container-fluid login-page d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="text-center">
      <img src="/Asset/loglogo.png" alt="Messiah Cafe Logo" className="logo mb-4" />
      </div>
      <div className="login-form w-100" style={{ maxWidth: '400px' }}>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control rounded-pill" placeholder="Username" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control rounded-pill" placeholder="Password" />
          </div>
          <div className="d-grid gap-2 mb-3">
            <button type="submit" className="btn btn-primary rounded-pill">Log In</button>
          </div>
        </form>
        <div className="text-center mt-3">
          <p className="text-white">You do not have an account? Register first</p>
          <button className="btn btn-secondary rounded-pill">Register</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
