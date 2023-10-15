"use client"

import { ThemeContext } from '@/context/Themecontext'
import React, { useContext } from 'react'

const Themeprovider = ({children}) => {
 const{theme} = useContext(ThemeContext)
    return (
    <div className={theme}>
      {children}
      </div>
  )
}

export default Themeprovider