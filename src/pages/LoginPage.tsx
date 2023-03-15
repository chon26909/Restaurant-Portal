import Input from '../components/Input'

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>

      <form className='shadow-2xl p-16 rounded-md'>
        <div className='text-center text-2xl mb-3'>เข้าสู่ระบบ</div>
        <div>
          <Input type='text' label='Email' />
        </div>
        <div>
          <Input type='password' label='Password' />
        </div>
      </form>


    </div>
  )
}

export default LoginPage
