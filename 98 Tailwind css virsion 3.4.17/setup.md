## How to setup Tailwind css

step 1 :run the following command

```
npm install -D tailwindcss@3
npx tailwindcss init
```

step 2:update tailwind.conf.js file to include this line

```
content: ["*.html"],
```

step 3: create src/inpute.css to inciude:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
step 4 : Include the src/output.css file to your html

step 5: Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

