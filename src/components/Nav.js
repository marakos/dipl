import Link from "next/link";
import CartIcon from "./cart/CartIcon";
import { useState } from "react";

const Nav = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  return (
    <nav className='bg-red-100 p-4'>
      <div className='flex items-center justify-between flex-wrap container mx-auto'>
        <div className='flex items-center flex-shrink-0 text-black mr-20'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 13l4 4L19 7'
            />
          </svg>
          <span className='font-semibold text-xl tracking-tight'>
            <Link href='/'>
              <a className=''>Proset</a>
            </Link>
          </span>
        </div>

        {/*Menu button*/}
        <div className='block lg:hidden'>
          <button
            onClick={() => setMenuVisibility(!isMenuVisible)}
            className='flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black'
          >
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>

        {/*MMenu in mobile*/}
        <div
          className={`${
            isMenuVisible ? "max-h-full h-full" : "h-0"
          } w-full overflow-hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className='text-sm font-medium uppercase lg:flex-grow'>
            <Link href='/categories'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10'>
                Categories
              </a>
            </Link>
            {/* <Link href='/'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10'>
                Women
              </a>
            </Link>
            <Link href='/'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10'>
                Kids
              </a>
            </Link>
            <Link href='/'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10'>
                Home & Living
              </a>
            </Link>
            <Link href='/'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10'>
                Offers
              </a>
            </Link> */}
          </div>

          <div className='text-sm font-medium'>
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
