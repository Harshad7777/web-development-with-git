"use client"
import { SessionProvider } from "next-auth/react"

//rafce


const SessionWrapper = ({Children}) => {
  return (
 <SessionProvider>
    {Children}
 </SessionProvider>
  )
}

export default SessionWrapper
