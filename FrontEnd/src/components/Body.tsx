import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'

function Body() {

  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`)

  const [review, setReview] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    try {
      setLoading(true)
      setReview("")

      const response = await axios.post(
        "https://bakend-1-7svz.onrender.com/ai/get-review",
        { code }
      )

      setReview(response.data)
    } catch (error) {
      setReview("❌ Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT SIDE */}
        <div className="flex flex-col bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800">
            <h2 className="text-sm font-semibold text-gray-300">Code Editor</h2>
            <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400">
              JavaScript
            </span>
          </div>

          <div className="flex-1 p-4">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={(code) =>
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
            />
          </div>

          <div className="p-4 border-t border-gray-800">
            <button
              onClick={reviewCode}
              disabled={loading}
              className={`w-full py-3 rounded-xl font-bold transition-all duration-300
              ${loading
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-gradient-to-r from-green-400 to-emerald-500 text-black hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/30"
              }`}
            >
              {loading ? "🔍 Analyzing..." : "🚀 Review Code"}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-800">
            <h2 className="text-sm font-semibold text-gray-300">AI Review</h2>
          </div>

          <div className="p-5 overflow-y-auto max-h-[75vh] prose prose-invert prose-green">

            {loading ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400 animate-pulse">
                <div className="w-10 h-10 border-4 border-green-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p>Analyzing your code...</p>
              </div>
            ) : (
              <Markdown rehypePlugins={[rehypeHighlight]}>
                {review || "✨ Your code review will appear here..."}
              </Markdown>
            )}

          </div>
        </div>

      </div>
    </main>
  )
}

export default Body
