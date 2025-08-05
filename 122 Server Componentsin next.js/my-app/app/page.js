// "use client"

// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [count, setCount] = useState(0)
//   return (

//     <div>I am a client component {count}
//       <button onClick={() => setCount(count + 1)}>click me</button>
//     </div>
//   );
// }


import fs from 'fs/promises'
import Navbar from '@/components/Navbar';

export default function Home() {
  console.log('I am a server component');
  let a = fs.readFile(".gitignore")
  a.then(e =>{console.log(e.toString())})

  return (
    <div>
       <Navbar />
      I am a server component
    </div>
    );
}

