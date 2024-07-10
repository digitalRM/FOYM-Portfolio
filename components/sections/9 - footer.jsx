import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 h-fit pb-10">
      <div className="mx-auto md:flex md:items-center md:justify-between ">
        <div className='flex flex-col sm:flex-row justify-between w-full'>
          <p className="sm:text-center text-xs font-medium leading-5 text-neutral-900">
            &copy; 2024 - John Doe - MIT License
          </p>
        </div>
      </div>
    </footer>
  )
}
