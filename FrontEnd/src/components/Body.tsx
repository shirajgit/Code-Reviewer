import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
 

function Body() {
   
  const [ code, setCode ] = useState(` function sum() {
  return 1 + 1
}`)

  const [ review, setReview ] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })
    setReview(response.data)
  }

  return (
    <>
     <main className="min-h-screen  bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white p-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

    {/* LEFT SIDE - CODE EDITOR */}
    <div className="flex flex-col bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800">
        <h2 className="text-sm font-semibold tracking-wide text-gray-300">
          Code Editor
        </h2>
        <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400">
          JavaScript
        </span>
      </div>

      {/* Editor */}
      <div className="flex-1 p-4">
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code =>
            prism.highlight(code, prism.languages.javascript, "javascript")
          }
          padding={16}
          style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: 15,
            backgroundColor: "transparent",
            color: "#e5e7eb",
            minHeight: "100%"
          }}
          className="focus:outline-none"
        />
      </div>

      {/* Review Button */}
      <div className="p-4 border-t border-gray-800">
        <button
          onClick={reviewCode}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500
                     text-black font-bold tracking-wide hover:scale-[1.02]
                     hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
        >
          🚀 Review Code
        </button>
      </div>
    </div>

    {/* RIGHT SIDE - AI REVIEW */}
    <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-xl overflow-hidden">

      {/* Header */}
      <div className="px-5 py-3 border-b border-gray-800">
        <h2 className="text-sm font-semibold tracking-wide text-gray-300">
          AI Review
        </h2>
      </div>

      {/* Output */}
      <div className="p-5 overflow-y-auto max-h-[75vh] prose prose-invert prose-green">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review || "✨ Your code review will appear here..."}
        </Markdown>
      </div>
    </div>

  </div>
</main>

    </>
  )
}



export default Body