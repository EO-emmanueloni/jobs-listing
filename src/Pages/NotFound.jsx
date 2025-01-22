import React from 'react'
import { Link } from 'react-router-dom'
import { FaTriangleExclamation } from "react-icons/fa6";

function NotFound() {
  return (
    <div className='not-found'>
        <h2 style={{
            fontSize: '50px',
            margin: '0',
        }}><FaTriangleExclamation /></h2>

        <h1>404: Not Found</h1>
        
        <p>The Page you Requested doesn't exist </p>
        <Link style={{
            background: '#646cff',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
        }} to="/">Back Home</Link>
    </div>
  )
}

export default NotFound