import { useEffect, useState } from "react"
import Dashboardpages from "./components/pages/dashboard/dashboardPage";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/pages/orderpage/orderPages";
import Inventory from "./components/pages/inventory/inventory";
import AuthLogin from "./components/pages/auth/login";
import AuthLayout from "./components/pages/auth/authLayout";
import AuthRegister from "./components/pages/auth/register";

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
      <Route path='/auth' element={<AuthLayout/>}>
        <Route path="login" element={<AuthLogin/>}/>
        <Route path="register" element={<AuthRegister/>}/>
      </Route>
      <Route path="/" element={<Dashboardpages/>}/>
      <Route path="/order" element={<ProductList/>}/>
      <Route path='/inventory' element={<Inventory/>}/>
    </Routes>
  )
}

export default App
