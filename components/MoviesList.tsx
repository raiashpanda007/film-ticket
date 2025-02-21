"use client"
import { RootState } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'
import MoviesCard from './MoviesCard'

function MoviesList() {
    const movies = useSelector((state: RootState) => state.movies.movies)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
            {movies.map((movie) => (
                <MoviesCard key={movie.id} id={movie.id} name={movie.name} img={movie.img} />
            ))}
        </div>
    )
}

export default MoviesList
