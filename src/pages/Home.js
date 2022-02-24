import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

function Home() {
    return (
        <div className="home">
            <div className="headerContainer">
                <h1>Home</h1>
            </div>
            <div className="paragraphText">
                <p>Hello there.</p>
            </div>
        </div>
    )
}

export default Home