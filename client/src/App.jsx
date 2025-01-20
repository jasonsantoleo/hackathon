import { useEffect, useState } from "react"
import Dashboardpages from "./components/pages/dashboard/dashboardPage";

const initialFormData = {
  fullName: "",
  email: "",
  role: "",
  startDate: "",
  description: ""
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  useEffect(()=>{
    console.log(formData.startDate);
    
  },[formData])
  return (
   <Dashboardpages/>
  )
}

export default App
