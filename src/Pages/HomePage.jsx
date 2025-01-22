import Hero from '../Components/Hero'
import HomeCards from '../Components/HomeCards'
import JobListings from '../Components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings isHome={false} />
        <ViewAllJobs  />
    </>
  )
}

export default HomePage