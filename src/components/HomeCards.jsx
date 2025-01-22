import React from 'react'
import { Link } from 'react-router-dom'

function HomeCards() {
  return (
    <div className='home-cards'>

        <div className='for-dev'>
            <h2>For Developers</h2>
            <p>Browse our React Jobs and start your career today</p>
            <Link to="/jobs" className='browse-jobs'>Browse Jobs</Link>
        </div>

        <div className='for-emp'>
            <h2>For Employers </h2>
            <p>List your job to find the perfect developer for the role</p>
            <Link TO="/add-job" className='add-jobs'>Add a Job</Link>
        </div>

    </div>
  )
}

export default HomeCards