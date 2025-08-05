import React from 'react'
import Script from 'next/script'

const page= () => {
  return (
    <div>
      <Script>
        {`alert("hello")`}
      </Script>
      about page
    </div>
  )
}

export default page

export const metadata = {
  title: " About Facebook-Connect with the world",
  description: "This is about a Facebook clone built with Next.js",
};

