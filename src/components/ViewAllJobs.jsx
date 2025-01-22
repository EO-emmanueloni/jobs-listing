import React from 'react'
import { Link } from 'react-router-dom'

function ViewAllJobs() {
  return (
    <div className='view-jobs'>
        <Link to="/jobs">View All Jobs</Link>
    </div>
  )
}

export default ViewAllJobs