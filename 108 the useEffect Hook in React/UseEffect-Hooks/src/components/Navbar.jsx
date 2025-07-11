import React1, { useEffect } from 'react'

const Navbar = ({ color }) => {

    //case 1: Run on every render
    useEffect(() => {
        alert("Hey i will run on every render")
    })

    //case 2: Run on only on first render
    useEffect(() => {
        alert("Hey welcome to my page.  this is the first render")
    }, [])

    //case 3: Run only when certain values change
    useEffect(() => {
        alert("hey i am running because color was changed")
    }, [color])

    //example of cleanup function 
     useEffect(() => {
    alert("Hey welcome to my page.This is the first render of app.jsx")

    return () => {
      alert("component was unmounted")
    }
  }, [])


    return (
        <div>
            I am navbar of {color} color hehe..
        </div>
    )
}

export default Navbar
