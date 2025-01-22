import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { FaMap } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function JobListings({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedJobs, setExpandedJobs] = useState({});

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "http://localhost:3001/jobs?_limit=3"
        : "http://localhost:3001/jobs?";
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const toggleDescription = (jobId) => {
    setExpandedJobs((prevState) => ({
      ...prevState,
      [jobId]: !prevState[jobId],
    }));
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (jobs.length === 0) {
    return <div>No jobs available.</div>;
  }

  const displayedJobs = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <>
      {displayedJobs.map((job) => {
        const isExpanded = expandedJobs[job.id] || false;
        const description = job.description
          ? isExpanded
            ? job.description
            : job.description.substring(0, 90) + "..."
          : "No description available.";

        return (
          <div className="job-card" key={job.id}>
            <div className="job-card-content">
              <div className="job-header">
                <div className="job-type">{job.type}</div>
                <h3 className="job-title">{job.title}</h3>{" "}
                {/* Use <h3> for semantic heading */}
              </div>

              <div className="job-descritpion">
                <p className="job-description">
                  {isExpanded
                    ? description
                    : `${description.substring(0, 100)}...`}
                </p>
              </div>

              <button
                onClick={() => toggleDescription(job.id)}
                className={isExpanded ? "expanded-btn" : "collapsed-btn"}
                aria-expanded={isExpanded}
                style={{backgroundColor: isExpanded ? "blue" : "Red", padding: "5px 10px", color: "white", borderRadius: "5px"}} 
              >
                {isExpanded ? "Less" : "More"}
                
              </button>

              <h3 className="job-salary">{job.salary}</h3>

              <div className="divider"></div>

              <div className="job-footer">
                <div className="job-location">
                  <FaMap
                    style={{
                      color: "red",
                      marginLeft: "10px",
                      marginRight: "5px",
                    }}
                  />
                  {job.location}
                </div>

                <Link to={`/jobs/${job.id}`} className="read-more-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
