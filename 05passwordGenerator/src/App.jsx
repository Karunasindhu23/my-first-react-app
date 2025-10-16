import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str += "0123456789"
    if(symbolAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, symbolAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 31)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, symbolAllowed, passwordGenerator])
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Password Generator</h1>

        {/* Display Box */}
        <div className="flex items-center justify-between bg-gray-700 px-4 py-3 rounded-lg mb-4">
          <input 
          type="text" 
          placeholder="Password"
          className="outline-none w—full py-1 px-3"
          value={password}
          ref={passwordRef}
          readOnly
          />
          <button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
          onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        {/* Range Slider */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Password Length: {length}</label>
          <input
            type="range"
            min= {6}
            max= {30}
            className="w-full accent-blue-500 cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}
          />
        </div>

        {/* Checkbox Options */}
        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
          <label className="flex items-center gap-2">
            <input 
            type="checkbox" 
            className="accent-blue-500"
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
             />
            Numbers
          </label>
          <label className="flex items-center gap-2">
            <input 
            type="checkbox" 
            className="accent-blue-500"
            onChange={() => {
              setSymbolAllowed((prev) => !prev)
            }}
             />
            Symbols
          </label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
