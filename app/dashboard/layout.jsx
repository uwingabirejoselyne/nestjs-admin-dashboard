import React from 'react'
import Sidebar from '../UI/dashboard/sidebar/sidebar'
import Navbar from '../UI/dashboard/navbar/navbar'

const layout = ({children}) => {
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div>
        <Navbar/>
        {children}
      </div>
    </div>
  )
}

export default layout
