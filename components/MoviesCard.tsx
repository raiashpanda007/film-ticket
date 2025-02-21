"use client"
import React from 'react'
import { useRouter } from 'next/router'
function MoviesCard({img,name,id}:{img:string,name:string,id:number}) {
    const router = useRouter()
  return (
    <div className='h-28 w-36 rounded-md' onClick={()=>router.push(`/movies/${id}`)}>
        <img src={img} alt="" />
        <div className='text-center'>
            <h1>{name}</h1>
        </div>
    </div>
  )
}

export default MoviesCard