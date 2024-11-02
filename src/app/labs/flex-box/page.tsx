import React from 'react'
import Button from '@/app/coponents/button'
export default function FlexBox() {
  return (
  <div className="h-screen">
    <div className="flex bg-black text-white font-bold gap-5 p-2 h-1/2">
          <Button link="/labs/border-exp" >Labs tailwind css</Button>
          <Button link="/labs/border-exp" >Labs Prisma</Button>
          <Button link="/labs/border-exp" >Labs NextAuth</Button>
          <div className="self-end grow text-xl text-black bg-white" >New</div>
          <div className="self-end grow-0 text-xl text-black bg-white" >New</div>
          <Button link="/labs/table" >Labs Table</Button>
          <Button link="/labs/flex-box" >Labs flexBox</Button>
          
    </div>
  </div>
  )
}
