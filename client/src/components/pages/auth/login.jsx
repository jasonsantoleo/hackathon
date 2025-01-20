import CommonForm from "../../common/form"
import { LoginFormControls} from "../../../config/test"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginUser } from "../../../store/auth/auth-slice"
import { toast } from "../../../hooks/use-toast"

const initialState={
    email:'',
    password:'',
}
const AuthLogin =()=>{
    const [formData,setFormData]=useState(initialState)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
      console.log(formData);
    },[formData])
    function onSubmit(event){
        event.preventDefault()
        dispatch(loginUser(formData)).then((data)=>{
            if (data?.payload?.success){
                navigate('/')
                toast({
                    title: data?.payload?.message
                })
            }else{
                toast({
                    title: data?.payload?.message,
                    variant:"destructive"
                })
            }
        })
    }
    return(
        <div className="mx-auto w-full max-w-md space-y-6"> 
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight">Login to an account</h1>
                <p>don't have an account?
                    <Link to='/auth/register'>Register</Link>
                </p>
            </div>
            <CommonForm
                formControls={LoginFormControls}
                buttonText={'sign up'}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
        </div>
    )
}
export default AuthLogin