import React from 'react'

export default function Labs() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen w-full bg-black " >

        <button className="outline outline-2 outline-offset-8 px-2 py-1 text-white font-bold" >Labs</button>
        <button className="border  p-4 text-white rounded font-bold hover:ring-4 ring-purple-600 ring-opacity-50" >Labs</button>

        <input className="focus:outline outline-4 rounded outline-purple-600 outline-offset-8 px-2 py-1" />
        <input className="outline-none  ring-4 rounded ring-offset-4 focus:ring-offset-purple-600 p-1" />
    </div>
  )
}
