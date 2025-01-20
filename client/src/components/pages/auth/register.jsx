import CommonForm from "../../common/form"
import { registerFormControls } from "../../../config/test"
import { useToast } from "../../../hooks/use-toast"
import { registerUser } from "../../../store/auth/auth-slice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

const initialState={
    username:'',
    email:'',
    password:'',
}
const AuthRegister =()=>{
    const {toast}=useToast()
    const [formData,setFormData]=useState(initialState)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    function onSubmit(event){
        event.preventDefault()
        dispatch(registerUser(formData)).then((data)=>{
            if (data?.payload?.success){
                navigate('/auth/login')
                toast({
                    title:data?.payload?.message
                })
                navigate("/auth/login")}
        })
    }
    useEffect(()=>{
      console.log(formData);
      
    },[formData])
    // console.log(formData)
    return(
       <div className="mx-auto w-full max-w-md space-y-6"> 
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">create an account</h1>
            <p className="mt-2">alreadty have an account?
                <Link className="font-medium text-primary hover:underlined" to='/auth/login'> login </Link>
            </p>
        </div>
        <CommonForm
            formControls={registerFormControls}
            buttonText={'sign up'}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
        />
       </div>
        // <div className="mx-auto w-full max-w-md space-x-0-y-6">\
        //     <div className="text-center">
        //         <h1 className="text-3xl font-bold tracking-tight text-foreground">create new aacount</h1>
        //         <p className="mt-2 ">already have an account?
        //             <Link className='font-medium text-primary hover:underline' to='/auth/login'>Login</Link>
        //         </p>
        //     </div>
        // </div>
    )
}
export default AuthRegister 