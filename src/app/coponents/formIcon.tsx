import React from 'react'
import { FormEvent } from 'react'

type Props = {
  onsubmit:(e: React.FormEvent<HTMLFormElement>) => void,
  inputRef: React.MutableRefObject<null>
}
export default function FormIcon({onsubmit,inputRef}:Props) {
  return (
    <form className="flex flex-col border-2 border-white rounded-lg justify-center items-center p-2 gap-1 " onSubmit={onsubmit}>
        <label htmlFor="inp1" className="font-bold text-center">Name</label>
        <input type="text" id='inp1' className="focus:outline outline-2 outline-indigo-600 outline-offset-4 rounded-md text-black font-bold p-1 px-3" ref={inputRef}/>
        <label htmlFor="inp2" className="font-bold text-center">Link</label>
        <input type="text" id='inp2' className="focus:outline outline-2 outline-indigo-600 outline-offset-4 rounded-md text-black font-bold p-1"/>
    </form>
  )
}
