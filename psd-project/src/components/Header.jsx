

const Navbar = () => {
    return (
      <nav className="flex items-center justify-between p-4">
        <div className="logo">
          <span className="font-bold text-xl ml-9">DEETIFY</span>
        </div>
        <ul className="flex space-x-8 font-semi-bold text-lg mr-10 gap-4">
          <li className="hover:underline">
            <a href="#">HOME</a>
          </li>
          <li className="hover:underline">
            <a href="#">LIBRARY</a>
          </li>
          <li className="hover:underline">
            <a href="#">UPGRADE</a>
          </li>
          <li className="hover:underline">
            <button className='text-white bg-black rounded-md pb-2 px-8  hover:bg-white hover:text-black transition duration-300 ease-in-out text-center'>
              Login
            </button>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;