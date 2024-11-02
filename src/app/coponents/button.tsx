
import React from 'react'
import Link from 'next/link'

type Props = {
    children:React.ReactNode,
    link:string
}
export default function Button({link,children}:Props) {

  return (
    <button className=" border rounded-xl ring ring-offset-1 ring-offset-purple-600 hover:ring-2 font-[900] h-12 hover:ring-offset-2 p-2" >
        <Link href={link}>{children}</Link>
    </button>
  )
}
