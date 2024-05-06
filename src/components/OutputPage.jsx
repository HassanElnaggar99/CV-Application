import "../styles/OutputPage.css"

export default function InputPage({ formData, changePage }) {
  function handleSubmit(e) {
    e.preventDefault();
    changePage(prevState => !prevState)
  }

  return (
    <div className="output">
      <section className="personal">
        <h2>Personal Information</h2>
        <p>Full name: {`${formData.firstName} ${formData.lastName}`}</p>
        <p>Email: {formData.email}</p>
        <p>Phone number: {formData.phone}</p>
      </section>
      <section className="educational">
        <h2>Educational Experience</h2>
        <p>School name: {formData.school}</p>
        <p>Title of study: {formData.study}</p>
        <p>Study start date: {new Date(formData.studyStartDate).toISOString().substring(0, 10)}</p>
        <p>Study end date: {new Date(formData.studyEndDate).toISOString().substring(0, 10)}</p>
      </section>
      <section className="practical">
        <h2>Practical Experience</h2>
          <p>Company name: {formData.companyName}</p>
          <p>Position title: {formData.position}</p>
          <p>Main responsibilities: {formData.mainResponsibilities}</p>
          <p>Work start date: {new Date(formData.workStartDate).toISOString().substring(0, 10)}</p>
          <p>Work end date: {new Date(formData.workEndDate).toISOString().substring(0, 10)}</p>
      </section>
      <button type="button" onClick={handleSubmit}>Edit</button>
    </div>
  )
}
/*
general information like name, email and phone number.
educational experience (school name, title of study and date of study)
practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
*/
