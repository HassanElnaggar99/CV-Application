import { useState } from "react"
import './App.css'
import InputPage from "./components/InputPage"
import OutputPage from "./components/OutputPage"

function App() {
  const [inInput, changeInInput] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    study: "",
    studyStartDate: "1970-01-01",
    studyEndDate: "1970-01-01",
    companyName: "",
    position: "",
    mainResponsibilities: "",
    workStartDate: "1970-01-01",
    workEndDate: "1970-01-01",
  });

  function handleChange(e) {
    const {name, value, checked, type} = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'radio' ? checked : value
    }))
  }


  return (
    <>
      <h1>CV Application</h1>
      {inInput && <InputPage formData={formData} handleChange={handleChange} changePage={changeInInput}/>}
      {!inInput && <OutputPage formData={formData} changePage={changeInInput}/>}
    </>
  )
}

export default App
