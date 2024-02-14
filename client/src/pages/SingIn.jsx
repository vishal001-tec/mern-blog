import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn(){
  const[fromData, setFormData]=useState({});
  const[errorMessage,setErrorMessage] = useState(null);
  const[loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setFormData({...fromData,[e.target.id]:e.target.value.trim()});
  };
const handleSubmit = async(e) =>{
  e.preventDefault();
  if(!fromData.email || !fromData.password){
    return setErrorMessage('Please fill out all the fields.');
  }
  try{
    setLoading(true);
    setErrorMessage(null);
    const res = await fetch('/api/auth/signip',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(fromData),
    });
    const data= await res.json();
    if(data.success === false){
      return setErrorMessage(data.message);
    }
    setLoading(false);
    if(res.ok){
      navigate('/');
    }
  } catch(error){
    setErrorMessage(error.message);
    setLoading(false);
  }
    };
  return(
    <>
  <div className=" min-h-screen mt-20">
    <div className=" flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
      <div className=" flex-1">
      <Link to="/" className=' font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white '>Vishal's</span>
        Blog
    </Link>
    <p className=" text-sm mt-5">
      You can sign-in with your email and password or Google
    </p>
      </div>
      <div className=" flex-1">
        <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
        
          <div>
            <Label value="Email"></Label>
            <TextInput type='email' placeholder="Email" id="email" onChange={handleChange}></TextInput>
          </div>
          <div>
            <Label value="Password"></Label>
            <TextInput type='password' placeholder="*********" id="password" onChange={handleChange}></TextInput>
          </div>
          <Button gradientDuoTone='purpleToPink' type="submit"  disabled={loading}>
          {
              loading ?(<>
                <Spinner size='sm'/>
                <span className=" pl-3">Loading...</span>
                </>
              ):('Sign In')
          }
          </Button>
        </form>
        <div className=" flex gap-2 mt-5 text-sm">
          <span>Don't Have an account?</span>
          <Link to='/sign-up' className=" text-blue-500"> Sign Up</Link>
        </div>
        {
          errorMessage && (
            <Alert className=" mt-5" color='failure'>
              {errorMessage }
            </Alert>
          )
        }
      </div>
    </div>
  </div>
  </>
  )
}