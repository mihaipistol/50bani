import React from 'react';

function Login() {
  return (
    <section className='content'>
      <input type={'text'} className='Username' />
      <input type={'password'} className='Password' />
      <input type={'button'}>Login</input>
    </section>
  );
}

export default Login;
