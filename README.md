# portfolio
1. created a react project
   ```js
   npm create vite@latest
   >portfolio
   >react
   >javascript
   ```
2. install tailwind using vite
    ```js
    npm install tailwindcss @tailwindcss/vite
    ```
3. install email-js 
   ```js
   npm i @emailjs/browser
   ```



## learnings from this project
   <details>
   <summary>1. RevealOnScroll component</summary>
   <br/>
   ```js
      
      import { useEffect, useRef } from "react";

      export const RevealOnScroll=({children}) =>{
         const ref= useRef(null);

         useEffect(()=>{
            const observer = new IntersectionObserver(([entry])=>{
               if(entry.isIntersecting){
                  ref.current.classList.add("visible");
               }
            },
            {threshold:0.2, rootMargin:"0px 0px -50px 0px"}
         );
         if(ref.current)
            observer.observe(ref.current);

         return ()=> observer.disconnect();

         })
         return (
            <div ref={ref} className="reveal">
                  {children}
            </div>
         )
      }```

   
   </details>
