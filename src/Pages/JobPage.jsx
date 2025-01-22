
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMap } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';

const JobPage = ({deleteJob}) => {
//   const [loading, setLoading] = useState(true);
//   const [job, setJob] = useState(null);
//   const [error, setError] = useState(null); // Define error state

  

//   useEffect(() => {
//     const fetchJobs = async () => {
//       const apiUrl = `http://localhost:3001/jobs/${id}`; 

//       try {
//         const res = await fetch(apiUrl);
//         if (!res.ok) {
//           throw new Error('Failed to fetch jobs');
//         }
//         const data = await res.json();
//         console.log(data);
//         setJob(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, [id]); // Add `id` to dependency array
const { id } = useParams();
const job = useLoaderData();
const navigate = useNavigate();

const onDeleteClick = async (jobId) => {
  const confirm = window.confirm('Are you sure you want to delete this job?');

  if (!confirm) return;

  await deleteJob(jobId); // Wait for the deletion to complete

  toast.success('Job deleted successfully');
  navigate('/jobs'); // Redirect after deletion


};


  

  return (
    <>
        


  <section>
    <div className="container">
      <Link to="/jobs" className="back-link">
        <FaArrowLeft /> Back to Job Listings
      </Link>
    </div>
  </section>

 
  <section>
    <div className="container main-content">
      <main>
        <div className="card">
          <div className="job-type">{job.type}</div>
          <h1 className="job-title">{job.title}</h1>
          <div className="location">
            <FaMap />
            <p>{job.location}</p>
          </div>
        </div>

        <div className="card">
          <h3>Job Description</h3>
          <p>{job.description}</p>
          <h3>Salary</h3>
          <p>{job.salary}</p>
        </div>
      </main>

     
      <aside className="aside">
        <div className="card">
          <h3>Company Info</h3>
          <h2>{job.company.name}</h2>
          <p>{job.company.description}</p>
          
          <h3>:</h3>
          <p>{job.company.contactEmail}</p>
          <h3>Contact Phone:</h3>
          <p>{job.company.contactPhone}</p>
        </div>

        <div className="card">
          <h3>Manage Job</h3>
          <Link to={`/edit-job/${job.id}`} className="btn btn-indigo">Edit Job</Link>
          <button onClick={ () => onDeleteClick(job.id)} className="btn btn-red">Delete Job</button>
        </div>
      </aside>
    </div>
  </section> 
    </>
  );
};

const jobLoader =  async ({params}) => {
    const res = await fetch(`http://localhost:3001/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export {JobPage as default, jobLoader}; ;
