import { useState, useRef, useEffect } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './COMPONENTS/Navbar'
import Manager from './COMPONENTS/Manager'
import open from './assets/open.svg';
import closed from './assets/closed.svg';


function App() {
  useEffect(() => {
    let password=localStorage.getItem("passwords")
    if (password){
      setpasswordArray(JSON.parse(password))
    }
  }, [])
  // useEffect(() => {
  //   setpasswordArray([...passwordArray,form])
  // }, )
  
  





  function change() {
   

    console.log(input.current.src)

    console.log(code.current.type)

    
    
    if(num==1){
     
      setSet(false)

      setnum(0)
    }
    else{
    
      setnum(1)
      setSet(true)

    }

        
  }
  function save() {
    console.log(form)
    setform({url:"",password:"",username:""})

    setpasswordArray([...passwordArray,form])
    console.log([...passwordArray,form])
    localStorage.setItem("password",JSON.stringify([...passwordArray,form]))
    
  }

  function handlechange(e) {
    setform({...form,[e.target.name]:e.target.value})
    
  }


  const input = useRef(null);
  const code = useRef(null)
  const [count, setCount] = useState(0)
  const [num, setnum] = useState(0)
  const [form, setform] = useState({url:"",password:"",username:""})
  const [Set, setSet] = useState(false)
  const [passwordArray, setpasswordArray] = useState([])

  return (
    <>
      <Navbar />
      <Manager />

      <div className="container  font inner  flex flex-col pt-7 ">
        <div className="heading flex flex-col">
          <h1 className='text-4xl font font-bold mx-auto'>PASSWORD MANAGER</h1>
          <h1 className='mx-auto font color'>STORE AND MANAGE ALL PASSWORDS SECURELY</h1>
        </div>
        <div className="input  mx-auto">

          <form action="">
            <div className='mt-7'>
              <input value={form.url} onChange={(e)=>{handlechange(e)}}   type="text" placeholder="Enter website URL" className='pl-2 mx-auto rounded-xl w-3xl fontbg text-white placeholder-gray-400 p-1  border border-gray-600' name="url" />
            </div>
            <div className='flex gap-5 mt-4'>
              <input value={form.username} onChange={(e)=>{handlechange(e)}}   type="text" placeholder="Enter username" className='rounded-xl pl-2 w-2/3 fontbg text-white placeholder-gray-400  p-1  border border-gray-600  ' name="username" />
              <div className="relative w-1/3">
              {/* bg-[#1c1c2b] */}
                <input value={form.password}  onChange={(e)=>{handlechange(e)}}   ref={code}
                  type={Set? "text" : "password"}
                  placeholder="Enter password"
                  className="rounded-xl pl-2 pr-10 w-full p-1 text-white placeholder-gray-400 fontbg  border border-gray-600" name="password"
                />
                <img ref={input} onClick={()=>{
                  change()
                }}
                  src={Set? open : closed} 
                  alt="Show Password"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer" name="url"
                />
              </div>
            </div>

          </form>
          <button onClick={()=>{save()}} className='cursor-pointer mx-auto p-1 pl-4 pr-4 rounded-2xl mt-5 flex gap-2 items-center justify-center color1 '>
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
              colors="primary:#ffffff"
            >
            </lord-icon>
            Save</button>
        </div>
      </div>



    </>
  )
}

export default App
