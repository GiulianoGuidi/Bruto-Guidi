import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to={"/"}>
    <img src='../assets/img/logopng.png' alt='Logo' className='w-28 h-28 absolute top-4 left-0' />
    </Link>
  )
}
