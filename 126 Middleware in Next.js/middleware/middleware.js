// import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
//after / we write any thing to redirect we want //third line
//if we want to edit request before receive the clint use second line and edit it
//if we want send message to user server not available
//this is for redirect

// export function middleware(request) {
//       return NextResponse.json({message: `Hello from the about page` })
//   return NextResponse.redirect(new URL('/', request.url))
// }


// export const config = {
//   matcher: '/about/:path*',
// }



//in rewrite  in this example we write a http://localhost:3000/about page are rewrite the information present in the http://localhost:3000/ it is also for dashboard also
import { NextResponse } from 'next/server'

 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}