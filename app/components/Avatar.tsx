'use client'

import Image from 'next/image'
import React from 'react'

const Avatar = () => {
  return (
    <Image
      className='rounded-full'
      alt='avatar'
      width='30'
      height='30'
      src='/images/avatar.png'
    />
  )
}

export default Avatar