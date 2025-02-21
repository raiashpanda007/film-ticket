import Sidebar from '@/components/Sidebar'
import React from 'react'
import { FiUser } from 'react-icons/fi'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='h-screen w-full flex  overflow-hidden'>
        <Sidebar />
        <div className='w-4/6 h-full p-8'>
            {children}
        </div>
        <div className='w-1/6 h-full flex relative top-20'>
        <FiUser  className="rounded-full border bg-[#D8D8D9] h-12 w-12"/>
            <div className="font-bold text-lg ml-2">
                <h1 className="text-lg">Naval </h1>
                <p className="text-lg">Ravikant</p>
            </div>
        </div>
    </div>
  )
}

export default layout