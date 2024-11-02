'use client'
import React,{useState,useEffect,useRef} from 'react'
import { ArrowLongUpIcon } from '@heroicons/react/16/solid'
import FormIcon from './formIcon'


type Props = {
    children?:React.ReactNode,
    text?:string,
  
}
export default function ButtonIcon({text="",children}:Props) {
  const ref = useRef(null)
  const [isVisible,setisVisible] = useState(false)
  const [components,setComponents] = useState<(number|string)[]>([])
  //const components: (number|string)[] = []
  

  useEffect(()=>{

    console.log("Rendered useEffect")
  },[])

  //console.log(components)

  function handleClick(){
    setisVisible(!isVisible)
    console.log(`button is ${isVisible}`)
  }

  function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    //setComponents(components?.push([1]))

    setComponents([...components,ref.current?.value])
    console.log("ref.current?.value")
   
    
    console.log(components)
   }

  //console.log("Rendered")
  return (

    <div className="flex items-center justify-center w-fit flex-col gap-[4px]" >
  
        {isVisible ? (<button className=" border hover:ring ring-white ring-opacity-35 rounded-lg font-[900] w-fit -offset-2 p-3" onClick={handleClick}>
          <ArrowLongUpIcon className="w-6 h-6" />
        </button>):((<button className=" border hover:ring ring-white ring-opacity-35 rounded-lg font-[900] w-fit -offset-2 p-3" onClick={handleClick}>
            {children}
        </button>))}
        <span className="font-bold text-sm">{text}</span> 
        {isVisible && <FormIcon onsubmit={submit} inputRef={ref}/>}
        
        <ul>{components.map((component,index)=> <li key={index} className='text-white font-bold text-2xl'>{component}</li>)}</ul>
    </div>
  )

}