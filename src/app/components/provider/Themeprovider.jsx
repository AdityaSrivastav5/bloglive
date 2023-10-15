"use client"

import React, { useContext } from 'react'
import { ThemeContext } from '../context/Themecontext'

const Themeprovider = ({children}) => {
 const{theme} = useContext(ThemeContext)
    return (
    <div className={theme}>
      {children}
      </div>
  )
}

export default Themeprovider