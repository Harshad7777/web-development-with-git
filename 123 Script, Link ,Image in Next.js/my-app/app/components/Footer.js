import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex justify-around bg-slate-800 text-white py-4 text-xs'>
        <div className='text-center'>Copyright © Facebook | All rights reserved</div>
        <ul>
            <Link href="/"><li className='text-xl'>Home</li></Link>
            <Link href="/about"><li className='text-xl'>About</li></Link>
            <Link href="/contact"><li className='text-xl'>Contact</li></Link>
        </ul>

    </footer>
  )
}

export default Footer
