import React from 'react'
import Input from '../components/Input'

const LoginPage = () => {
  return (
    <div>
      <div>
        <Input type='text' label='Email' />
      </div>
      <div>
        <Input type='password' label='Password' />
      </div>
      
    </div>
  )
}

export default LoginPage
