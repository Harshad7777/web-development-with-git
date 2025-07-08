npm init -y
npm install tailwindcss @tailwindcss/cli

 create folder name is src
 contain inpute.css
 write inside 
 @import "tailwindcss";

 run in terminal
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch

 write html and css in index.html
 <link rel="stylesheet" href="src/output.css">