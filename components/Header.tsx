import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <>
        <nav>
            <ul>
                <li><Link href="">Home</Link></li>
                <li><Link href="">Blog</Link></li>
                <li><Link href="">Article</Link></li>
                <li><Link href="">Contact</Link></li>
            </ul>
        </nav>
      </>
  )
}


export default Header