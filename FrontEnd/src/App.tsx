import './App.css'
import prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import Editor from 'react-simple-code-editor'
import { useEffect, useState } from 'react'


function App() {
 
 useEffect(()=>{
  prism.highlightAll()
 })

const [code,setCode] = useState("")


  return (
    <>
    <main>
       <div className="left">
        <div className="code">
         <Editor 
           value = {code} 
           onValueChange = {code => setCode(code)}
           highlight ={code => prism.highlight(code, prism.languages.javascript , "javascript") }
           padding = {10}
           style={{
            fontFamily :'"Firea code" , "Fira Mono" , monospace',
            fontSize:18,        
            backgroundColor : "#f5f5f5",
            border : "1px solid #ddd",
            borderRadius:"5px",
            height : "100%",
            width: "100%",
           }}

         />
       

        </div>
        <div className="review">  Review </div>
       </div>
       <div className="right"></div>
    </main>
    </>
  )
}

export default App
