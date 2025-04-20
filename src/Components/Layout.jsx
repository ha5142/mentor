import React from 'react'
import { NavbarDemo } from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>

        <NavbarDemo/>
        <div>
        <Outlet/>

        </div>

        
        </div>
        
    )
}

export default Layout

