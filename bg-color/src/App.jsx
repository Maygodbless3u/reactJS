import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive");

  return ( 
    <>
      <div className="w-full min-h-screen duration-200 " 
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap gap-3 bg-white justify-center px-3 py-2">test</div>
        </div>
      </div>

      
      </>
  )
}

export default App
