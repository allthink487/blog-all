import React from 'react'

export default function Table() {
  return (
        <div className="flex w-full h-screen justify-center items-center">
                <div className="table">
        <div className="table-header-group ">
            <div className="table-row border">
                <div className="table-cell border-t-2 border-x-2 border-black p-2 font-bold text-xl">NextJs</div>
                <div className="table-cell border-t-2 border-r-2 border-black p-2 font-bold text-xl">Tailwind css</div>
                <div className="table-cell border-t-2 border-r-2 border-black p-2 font-bold text-xl">NodeJs</div>
            </div>
        </div>

        <div className="table-row-group" >

            <div className="table-row border">
                <div className="table-cell border-t-2 border-x-2 border-black p-2">Apprendre NextJs</div>
                <div className="table-cell border-t-2 border-r-2 border-black p-2">Apprendre Tailwind css</div>
                <div className="table-cell border-t-2 border-r-2 border-black p-2">Apprende NodeJs</div>
            </div>

            <div className="table-row border">
                <div className="table-cell border-t-2 border-x-2 border-black p-2">Apprendre NextJs</div>
                <div className="table-cell border-t-2 border-r-2 border-black p-2">Apprendre Tailwind css</div>
                <div className="table-cell border-t-2 border-r-2 border-black p-2">Apprende NodeJs</div>
            </div>

            <div className="table-row border">
                <div className="table-cell border-t-2 border-x-2 border-black p-2">Apprendre NextJs</div>
                <div className="table-cell border-t-2 border-r-2 border-black p-2">Apprendre Tailwind css</div>
                <div className="table-cell border-t-2 border-r-2 border-black p-2">Apprende NodeJs</div>
            </div>
            
            <div className="table-row border">
                <div className="table-cell border-t-2 border-x-2 border-black p-2">Apprendre NextJs</div>
                <div className="table-cell border-t-2 border-r-2 border-black p-2">Apprendre Tailwind css</div>
                <div className="table-cell border-t-2 border-r-2 border-black p-2">Apprende NodeJs</div>
            </div>

            <div className="table-row">
                <div className="table-cell border-y-2 border-x-2 border-black p-2">Apprendre React</div>
                <div className="table-cell border-y-2 border-r-2 border-black p-2">Apprendre le css</div>
                <div className="table-cell border-y-2 border-r-2 border-black p-2">Apprende a creer des API</div>
            </div>

        </div>
    </div>
        </div>
  )
}
