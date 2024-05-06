// import { useState } from "react";
import "../styles/InputPage.css"

export default function InputPage({ formData, handleChange, changePage }) {

  function handleSubmit(e) {
    e.preventDefault();
    changePage(prevState => !prevState)
  }

  return (
    <form onSubmit={handleSubmit} className="input">
      <h2>Personal Information</h2>
      <section className="personal">
        <label>
          First name: {' '}
          <input type="text" value={formData.firstName} name="firstName" onChange={handleChange} />
        </label>
        <label>
          Last name: {' '}
          <input type="text" value={formData.lastName} name="lastName" onChange={handleChange} />
        </label>
        <label>
          Email: {' '}
          <input type="email" value={formData.email} name="email" onChange={handleChange} />
        </label>
        <label>
          Phone number: {' '}
          <input type="text" value={formData.phone} name="phone" onChange={handleChange} />
        </label>
      </section>

      <h2>Educational Experience</h2>
      <section className="educational">
        <label>
          School name: {' '}
          <input type="text" value={formData.school} name="school" onChange={handleChange} />
        </label>
        <label>
          Title of study: {' '}
          <input type="text" value={formData.study} name="study" onChange={handleChange} />
        </label>
        <label>
          Study start date: {' '}
          <input type="date" value={formData.studyStartDate} name="studyStartDate" onChange={handleChange} />
        </label>
        <label>
          Study end date: {' '}
          <input type="date" value={formData.studyEndDate} name="studyEndDate" onChange={handleChange} />
        </label>
      </section>

      <h2>Practical Experience</h2>
      <section className="practical">
        <label>
          Company name: {' '}
          <input type="text" value={formData.companyName} name="companyName" onChange={handleChange} />
        </label>
        <label>
          Position title: {' '}
          <input type="text" value={formData.position} name="position" onChange={handleChange} />
        </label>
        <label>
          Main responsibilities: {' '}
          <input type="text" value={formData.mainResponsibilities} name="mainResponsibilities" onChange={handleChange} />
        </label>
        <label>
          Work start date: {' '}
          <input type="date" value={formData.workStartDate} name="workStartDate" onChange={handleChange} />
        </label>
        <label>
          Work end date: {' '}
          <input type="date" value={formData.workEndDate} name="workEndDate" onChange={handleChange} />
        </label>
      </section>
      <button type="submit">Submit</button>
    </form>
  )
}
/*
general information like name, email and phone number.
educational experience (school name, title of study and date of study)
practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
*/
