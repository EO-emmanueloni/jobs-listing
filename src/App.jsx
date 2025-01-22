import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './Pages/JobsPage';
import JobPage, { jobLoader } from './Pages/jobPage';
import NotFound from './Pages/NotFound';
import { AddJobPage } from './Pages/AddJobPage';
import EditJobPage from './Pages/EditJobPage';
import './App.css';

function App() {
  // Add new job
  const addJob = async (newJob) => {
    await fetch('http://localhost:3001/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
  };

  // Delete job
  const deleteJob = async (id) => {
    await fetch(`http://localhost:3001/jobs/${id}`, {
      method: 'DELETE',
    });
  };

  // Update job
  const updateJob = async (newJob) => {
    await fetch(`http://localhost:3001/jobs/${newJob.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
