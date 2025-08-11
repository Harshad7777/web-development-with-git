npx create-next-app@latest
√ What is your project named? ... nextauth-demo
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like your code inside a `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to use Turbopack for `next dev`? ... No / Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes

<!-- 
//https://next-auth.js.org/getting-started/example
//next auth is a famous library  -->

code --r nextauth
npm install next-auth
npm run dev

<!-- create folder : api/auth/[...nextauth]/router.js -->
<!-- provide session provider in layout.js -->
<!-- in page.js  edit main -->
<!-- then create .env.local file -->


<!-- go to git hub login then tap to profile tap setting tap devloper setting then Qauth Apps after register copy id pest in the .env.localafter github id as it is generate secrate and past in github secret-->



<!-- # # env-environment variable are the secrate value that store on the operating system lavel
# if we deploy project your deployment provider ask you this environment variable

# but if you devlopement then use the .env.local

# if you want to access 1rr in app anyware
# then all secrates are in one file -->
