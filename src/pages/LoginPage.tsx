import { FormEvent, FormEventHandler, useRef } from 'react'
import Input from '../components/Input'
import { useAppDispatch } from '../redux'
import { login } from '../redux/slices/authSlice'

const LoginPage = () => {

  const dispatch = useAppDispatch()

  const emailRef = useRef()
  const passwordRef = useRef()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    console.log("onSubmit")

    dispatch(login({
      email: '',
      password: ''
    }))
  }

  return (
    <div className='flex justify-center items-center h-screen'>

      <form className='shadow-2xl p-16 rounded-md' onSubmit={onSubmit}>
        <div className='text-center text-2xl mb-3'>เข้าสู่ระบบ</div>
        <div>
          <Input type='text' label='Email' />
        </div>
        <div>
          <Input type='password' label='Password' />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>

    </div>
  )
}

export default LoginPage
