import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Card from '../Components/Card'

const Home = () => {
    

    return (
        <div>
            <h1>Bienvenidos al recetario DH</h1>
            <Outlet/>
        </div>
    )
}

export default Home