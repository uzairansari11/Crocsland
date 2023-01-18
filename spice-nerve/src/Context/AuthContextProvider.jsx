import React from 'react'
import { createContext } from 'react'

const AuthContext=createContext()


export const AuthContextProvider = () => {

  return (
    <AuthContext.Provider>AuthContextProvider</AuthContext.Provider>
  )
}
