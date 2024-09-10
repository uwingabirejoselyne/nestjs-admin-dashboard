import React from 'react'
import sidebar from './sidebar/sidebar'
import navbar from './navbar/navbar'

const layout = ({children}) => {
  return (
    <div>
      <div>
        <sidebar/>
      </div>
      <div>
        <navbar/>
        {children}
      </div>
    </div>
  )
}

export default layout
