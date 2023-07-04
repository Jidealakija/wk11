import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
      <h2>
        about page
      </h2>

      <Image src= 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
      width={400} height={400}/>

    

    </div>
  )
}
