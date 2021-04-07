import Container from './Container';

const Box = ({children}) => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-8 col-span-3 shadow-md">
      { children }
    </div>
  )
}

const Hero = () => {
  return (
    <section className="w-full h-96 pt-16 flex items-center bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 self-start h-[66vh]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-6 gap-4 w-full grid-cols-1">
          <div className="flex p-6 flex-col col-span-3 justify-center">
            <h2 className="text-gray-100 text-2xl font-bold -mb-5">Your Goals</h2>
            <h1 
              className="font-bold text-6xl"
              style={{
                background: '-webkit-linear-gradient(45deg, #a400e6, #d400cf, #f700b6, #ff009c, #ff0082, #ff006b, #ff4154, #ff6740, #ff852c, #ffa018, #ffb80e, #ffce1c)',
                // "-webkit-background-clip": 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1.5'
              }}
            >
              Managed
            </h1>
            <p className="text-gray-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab consectetur amet distinctio numquam recusandae veritatis eum.
            </p>
          </div>
          <Box>
            <h2 className="font-bold text-2xl">Sign Up</h2>
            <span className="text-gray-500 mb-4">No additional information required</span>
            <div className="flex flex-col space-y-2">
              <input 
                type="text" 
                className="border border-1 placeholder-gray-400 border-gray-300 rounded-md h-10 p-2 w-full" 
                placeholder="Your Name"/>
              <input 
                type="email" 
                className="border border-1 placeholder-gray-400 border-gray-300 rounded-md h-10 p-2 w-full" 
                placeholder="Email Address"/>
              <input 
                type="password" 
                className="border border-1 placeholder-gray-400 border-gray-300 rounded-md h-10 p-2 w-full" 
                placeholder="Password"/>

              <a className="block bg-blue-600 w-full p-3 text-white font-bold text-center rounded-md">
                Sign up with email
              </a>
              <span className="text-center text-gray-400 text-xs self-center">By signing up you agree to the Terms of Service</span>
            </div>
          </Box>
        </div>
      </div>
    </section>
  )
}

export default Hero;