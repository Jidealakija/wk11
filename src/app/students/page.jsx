import Image from 'next/image'
import React from 'react'
import pic from '../Image/woman.jpg'

export default function page() {
  return (
    <div>
        <h2>students' page</h2>
        <Image src={pic} alt= "students leaning" width={500} height={500} />

    </div>
  )
}
