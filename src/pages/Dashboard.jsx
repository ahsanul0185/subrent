import React from 'react'
import LogOutButton from '../components/LogoutButton'
import DashSidebar from '../components/DashSidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex'>
        <DashSidebar />
        <Outlet />
    </div>
  )
}

export default Dashboard