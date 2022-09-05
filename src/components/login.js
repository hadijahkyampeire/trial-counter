import React, { useState } from 'react';
import './login.css';

const dummyData = { name: 'Kyamp'};

const Login = () => {
  const [user, setUser] = useState({ email: '', name: '', password: '' });

  console.log(user, '--user')
  return (
    <div className='login-page'>
    <div>LOGIN</div>

    <div>{dummyData.name}</div>
    <input type='text' value={user.email} placeholder='email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
    <input type='text' value={user.name} placeholder='name' onChange={(e) => setUser({ ...user, name: e.target.value })}/>
    <input type='password' value={user.password} placeholder='password'/>


    <button>Save</button>
    </div>

  )
}

export { Login };