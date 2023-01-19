import Navbar from '@components/Navbar/Navbar'
import React from 'react'
import styles from './layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer>This is de footer</footer>
    </div>
  )
}

export default Layout
