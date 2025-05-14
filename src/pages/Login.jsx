// src/pages/Login.jsx
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Use login function from context

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard'); // Redirect on success
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-wrapper">
      <div className="container-fluid">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block">
          <div className="row justify-content-center align-items-center overflow-auto flex-wrap">
            <div className="col-md-5 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column justify-content-between p-4">
                  <div className="mx-auto auth-img text-center">
                    <img src="/assets/img/logo.svg" className="img-fluid" alt="Logo" />
                  </div>
                  <div className="card rounded p-3 mb-0">
                    <div className="card-body">
                      <div className="text-center mb-4">
                        <h3 className="mb-2 fw-bold">Sign In</h3>
                        <p className="mb-0">Please enter your details to sign in</p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <div className="input-group">
                           <input type="text"  name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control border-end-0" />
                          {/* <input type="text" name='email' className="form-control border-end-0" /> */}
                          <span className="input-group-text text-gray border-start-0">
                            <i className="ti ti-mail"></i>
                          </span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="pass-group">
                          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' className="pass-input form-control" />
                          {/* <input type="password" name='password' className="pass-input form-control" /> */}
                          <span className="ti toggle-password text-gray ti-eye-off"></span>
                        </div>
                      </div>
                       {error && <p style={{ color: 'red' }}>{error}</p>}
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <div className="form-check form-check-md mb-0">
                            <input className="form-check-input" id="remember_me" type="checkbox" />
                            <label htmlFor="remember_me" className="form-check-label text-gray-9 mt-0">Remember Me</label>
                          </div>
                        </div>
                        <div className="text-end">
                          <Link to="/forgot-password" className="fw-medium text-gray-5">Forgot Password?</Link>
                        </div>
                      </div>
                      <div className="mb-4">
                        <button type="submit" disabled={loading} className="btn btn-primary w-100">{loading ? 'Signing in...' : 'Sign In'}</button>

                        {/* <button type="submit" className="btn btn-primary w-100">Sign In</button> */}
                      </div>
                      <div className="login-or">
                        <span className="span-or text-gray fs-13 fw-medium">Or Sign in With</span>
                      </div>
                      <div className="mt-2 d-flex align-items-center justify-content-center flex-wrap">
                        <div className="text-center me-2 flex-fill">
                          <a href="#" className="br-10 p-2 btn btn-outline-light border d-flex align-items-center justify-content-center">
                            <img className="img-fluid m-1" src="/assets/img/icons/facebook-logo.svg" alt="Facebook" />
                          </a>
                        </div>
                        <div className="text-center me-2 flex-fill">
                          <a href="#" className="br-10 p-2 btn btn-outline-light border d-flex align-items-center justify-content-center">
                            <img className="img-fluid m-1" src="/assets/img/icons/google-logo.svg" alt="Google" />
                          </a>
                        </div>
                        <div className="text-center flex-fill">
                          <a href="#" className="br-10 p-2 btn btn-outline-light border d-flex align-items-center justify-content-center">
                            <img className="img-fluid m-1" src="/assets/img/icons/apple-logo.svg" alt="Apple" />
                          </a>
                        </div>
                      </div>
                      <div className="text-center mt-4">
                        <p className="fw-normal mb-0">
                          Don’t have an account?
                          <Link to="/register" className="text-gray-9 text-decoration-underline"> Create Account</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
