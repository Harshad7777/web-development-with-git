<!-- middleware help to modify the request
before request reach to the destination before those send  json data before that we update the request we stop the request and i want change you -->

<!-- https://nextjs.org/docs/app/api-reference/file-conventions/middleware -->

<!-- The middleware.js|ts file is used to write Middleware and run code on the server before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

Middleware executes before routes are rendered. It's particularly useful for implementing custom server-side logic like 

authentication, logging, or handling redirects. -->

npx create-next-app@latest

code -r middleware

npm run dev
