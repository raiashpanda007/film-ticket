"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function MoviesCard({ img, name, id }: { img: string, name: string, id: number }) {
    const router = useRouter()
    return (
        <div
            className="rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => router.push(`/movies/${id}`)}
        >
            <img src={img} alt={name} className="w-full h-48 " />
            <div className="p-3 bg-white text-center">
                <h1 className="text-lg font-semibold">{name}</h1>
            </div>
        </div>
    )
}

export default MoviesCard
