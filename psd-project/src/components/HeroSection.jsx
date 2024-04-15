

const HeroSection = () => {
    return (
      <>
       <div>
          <h1 className='text-5xl text-center p-32 bg-gray-200 '>We're <em>the best choice for all your <br /> rhythms!</em></h1>
          </div>
          <div className='flex justify-center gap-5 bg-gray-200 pb-8 '>
              <button className=' text-white bg-black rounded-lg px-12 font-semi-bold hover:bg-white hover:text-black transition duration-300 ease-in-out '>Live Shows</button>
              <button className='text-white bg-black rounded-lg px-12 font-semi-bold hover:bg-white hover:text-black transition duration-300 ease-in-out'>Music from Across <br /> World</button>
              <button className='text-white bg-black rounded-lg px-12 font-semi-bold hover:bg-white hover:text-black transition duration-300 ease-in-out'>See Music from <br /> Location</button>
          </div>
      </>
    )
  } 
  
  export default HeroSection