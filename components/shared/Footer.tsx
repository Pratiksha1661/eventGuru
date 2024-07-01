import Link from 'next/link'

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="md:py-5 py-6 lg:mx-40 mx-10">
      <div className='flex md:justify-between md:items-center flex-col md:flex-row gap-2'>
        <h1 className="font-variable md:text-lg text-base font-bold text-accent transition-all duration-200">
          <Link href="/">EventGuru</Link>
        </h1>
        <div className='flex md:gap-3 gap-2 flex-col md:flex-row'>
          <p className='text-sm text-gray-500'>
            &copy; 2024 EventGuru. All Rights Reserved.
          </p>
          <span className='flex gap-3'>
            <Link href={"https://github.com/aryad14"} target='_blank'>
              <FaGithub />
            </Link>
            <Link href={"https://www.linkedin.com/in/aryadanech/"} target='_blank'>
              <FaLinkedin />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer