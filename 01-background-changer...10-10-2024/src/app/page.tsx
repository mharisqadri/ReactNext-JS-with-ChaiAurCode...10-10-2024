//'use client';
//import { useState } from "react"


// export default function Home() {
//   const [color , setColor] = useState("blue")
//   return (
//     <div
//     className="w-full h-screen"
//     style={{backgroundColor:color}}>
//       <div>
//         <button
//         style={{backgroundColor:("purple")}}
//         onClick={()=>setColor("purple")}>
//           Purple
//         </button>
//       </div>
//     </div>
//   );
// }




//Tailwind classes and more buttons took from ai
'use client';
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState<string>();
  
  return (
    <div className={`w-full h-screen flex justify-center items-center bg-${color}`}>
      <div className="space-x-4">
        <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600" onClick={() => setColor("purple-500")}>Purple</button>
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600" 
        onClick={() => setColor("red-500")}>Red</button>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600" onClick={() => setColor("green-500")}>Green</button>
        <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600" onClick={() => setColor("yellow-500")}>Yellow</button>
        <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600" onClick={() => setColor("indigo-500")}>Indigo</button>
        <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600" onClick={() => setColor("pink-500")}>Pink</button>
        <button className="bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-600" onClick={() => setColor("teal-500")}>Teal</button>
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600" onClick={() => setColor("orange-500")}>Orange</button>
        <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600" onClick={() => setColor("gray-500")}>Gray</button>
      </div>
    </div>
  );
}
