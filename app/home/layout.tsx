import Sidebar from '@/components/Sidebar'
import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='h-screen w-full flex '>
        <Sidebar />
        <div className='w-4/5 h-full p-8'>
            {children}
        </div>
    </div>
  )
}

export default layout