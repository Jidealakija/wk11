import React from 'react'
import Courses from './Courses'

export default function layout({children}) {
  return (
    <div>
        {children}
        <Courses/>
    </div>

  )
}
