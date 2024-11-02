
import React from 'react';
import Button from "./coponents/button";
import ButtonIcon from './coponents/buttonIcon';
import { PlusIcon } from '@heroicons/react/16/solid';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full bg-black text-white gap-7">
        <h1 className="font-bold text-3xl" >
          Bienvenue dans <span className="uppercase bg-gradient-to-r from-[#474747] to-[#0f0f0f] px-2 py-0.5" >Labs</span>
        </h1>

        <div className="flex justify-center  items-start gap-5 flex-wrap" >
          <ButtonIcon text="creer"><PlusIcon className="w-[25px] h-[25px]"/></ButtonIcon>
          <Button link="/labs/border-exp" >Labs tailwind css</Button>
          <Button link="/labs/border-exp" >Labs Prisma</Button>
          <Button link="/labs/border-exp" >Labs NextAuth</Button>
          <Button link="/labs/table" >Labs Table</Button>
          <Button link="/labs/flex-box" >Labs flexBox</Button>
          <Button link="/labs/float-clear" >Labs float-clear</Button>
          <Button link="/labs/overflow" >Labs Overflow</Button>       
          <Button link="/labs/position" >Labs Position</Button>       
        </div>
      </div>
    </>
  );
}
