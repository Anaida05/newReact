import React, { useRef } from 'react';

const LoginForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={{ width: '300px', margin: '50px auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label><br />
          <input type="email" ref={emailRef} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Password:</label><br />
          <input type="password" ref={passwordRef} />
        </div>
        <button type="submit" style={{ marginTop: '15px' }}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
