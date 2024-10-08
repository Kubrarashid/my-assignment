import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <nav>
      <ul>
        <li>
          <Link href="./home" target='_blank'>Home</Link>
        </li>

        <li>
          <Link href="./about">About</Link>
        </li>

        <li>
          <Link href="./contact">Contact</Link>
        </li>

        <li>
          <Link href="./service">Service</Link>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default HomePage
