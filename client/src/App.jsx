import { useEffect, useState } from "react"
import Dashboardpages from "./components/pages/dashboard/dashboardPage";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/pages/orderpage/orderPages";
import Inventory from "./components/pages/inventory/inventory";

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
    <Routes>
      <Route path="/" element={<Dashboardpages/>}/>
      <Route path="/order" element={<ProductList/>}/>
      <Route path='/inventory' element={<Inventory/>}/>
    </Routes>
  )
}

export default App
