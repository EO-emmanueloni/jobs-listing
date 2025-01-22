import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

export const AddJobPage = ({addJobSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [type, setType] = useState('Full-Time');
    const [salary, setSalary] = useState('under $50K');

    const navigate = useNavigate();

    const submitForm = (e) => {
      e.preventDefault()
      
      const newJob = {
        title,
        type,
        location,
        description,
        salary,
        company : {

          name: companyName,
          description: companyDescription,
          contactEmail,
          contactPhone
     
        
        }
      }
       addJobSubmit(newJob)

       toast.success('Job added successfully')

      return navigate('/jobs')
    }


  return (
    <>
    

<section>
  <div className="form-container">
    <form onSubmit={submitForm}>
      <h2>Add Job</h2>

      <div className="form-group">
        <label htmlFor="type">Job Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)} 
        id="type" name="type" 
        
        required>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Remote">Remote</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="title">Job Listing Name</label>
        <input type="text" id="title" name="title" placeholder="e.g., Senior React Developer" required
        value={title} onChange={(e) => setTitle(e.target.value)}  />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="4" placeholder="Add any job duties, expectations, requirements, etc"
        value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="salary">Salary</label>
        <select id="salary" name="salary" required
        value={salary} onChange={(e) => setSalary(e.target.value)} >
          <option value="Under $50K">Under $50K</option>
          <option value="$50K - 60K">$50K - $60K</option>
          <option value="$60K - 70K">$60K - $70K</option>
          <option value="$70K - 80K">$70K - $80K</option>
          <option value="$80K - 90K">$80K - $90K</option>
          <option value="$90K - 100K">$90K - $100K</option>
          <option value="$100K - 125K">$100K - $125K</option>
          <option value="$125K - 150K">$125K - $150K</option>
          <option value="$150K - 175K">$150K - $175K</option>
          <option value="$175K - 200K">$175K - $200K</option>
          <option value="Over $200K">Over $200K</option>
        </select>
      </div>

      <div class="form-group">
        <label htmlFor="location">Location</label>
        <input type="text" id="location" name="location" placeholder="Company Location" required 
        value={location} onChange={(e) => setLocation(e.target.value)}  />
      </div>

      <h3>Company Info</h3>

      <div className="form-group">
        <label htmlFor="company">Company Name</label>
        <input type="text" id="company" name="company" placeholder="Company Name" 
        value={companyName} onChange={(e) => setCompanyName(e.target.value)}  />
      </div>

      <div className="form-group">
        <label htmlFor="company_description">Company Description</label>
        <textarea id="company_description" name="company_description" rows="4" placeholder="What does your company do?"
        value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)} ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="contact_email">Contact Email</label>
        <input type="email" id="contact_email" name="contact_email" placeholder="Email address for applicants" required value={contactEmail} onChange={(e) => setContactEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact_phone">Contact Phone</label>
        <input type="tel" id="contact_phone" name="contact_phone"  placeholder="Optional phone for applicants" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)}/>
      </div>

      <div className="form-group">
        <button type="submit">Add Job</button>
      </div>
    </form>
  </div>
</section>
    </>
  )
}
