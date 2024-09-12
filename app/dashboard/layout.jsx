import React from 'react'
import Sidebar from '../UI/dashboard/sidebar/sidebar'
import Navbar from '../UI/dashboard/navbar/navbar'
import styles from '../ui/dashboard/dashboard.module.css'

const layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className ={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
      </div>
    </div>
  )
}

export default layout
