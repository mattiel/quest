import React, {useState} from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../lib/useAuth'

const login = () => {
  const [userInput, setUserInput] = useState({
    email: '',
    password: ''
  })

  const auth = useAuth();

  const router = useRouter()

  const onSubmit = async e => {
    e.preventDefault();
    const userData = {
      email,
      password
    }
    // try {
    //   await firebase
    //     .auth()
    //     .signInWithEmailAndPassword(userInput.email, userInput.password)
    //     console.log('Sign In Successful')
    //     router.push('/quests')
    // } catch(e) {
    //   console.error(e, 'Failed to log into an account')
    // }
    try {
      await auth.signin(userInput.email, userInput.password, '/quests')
    } catch(error) {
      console.error('Authentication unsuccessful, error:', error)
    }
  }


  const { email, password } = userInput

  const onChange = (text) => event => {
    setUserInput({...userInput, [text]: event.target.value})
    // console.log(userInput);
  }

  return (
    <div className="bg-gray-50 h-full">
      <section className="p-8">
        <Link href="/">
          <a className="">Back</a>
        </Link>
      </section>
      <section className="max-w-sm mx-auto flex flex-col items-center">
        <h2 className="font-medium text-2xl py-8">Sign in to Quest</h2>
        <div className="bg-white border borer-gray-50 rounded-xl min-w-[24rem] p-4">
          <form 
            className="flex flex-col space-y-2"
            onSubmit={onSubmit}
          >
            <input 
              type="email" 
              className="border border-1 placeholder-gray-400 border-gray-300 rounded-md h-10 p-2 w-full" 
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange("email")}
            />

            <input 
              type="password" 
              className="border border-1 placeholder-gray-400 border-gray-300 rounded-md h-10 p-2 w-full" 
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange("password")}
            />

            <button 
              className="block bg-blue-600 w-full p-3 text-white font-bold text-center rounded-md"
            >
              Sign In
            </button>
            <a className="text-sm text-center text-gray-500 hover:text-blue-500 hover:font-medium">Forgot Password?</a>
          </form>
        </div>
      </section>
    </div>
  )
}

export default login;