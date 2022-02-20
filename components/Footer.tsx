import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <>
        <footer>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/article">Article</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </footer>
    </>
  )
}


export default Footer