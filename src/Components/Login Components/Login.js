import React, { useState } from "react";
import { Header, MenuBar ,Footer,End} from "../objects/objects";
import { Link } from "react-router-dom";
import './Login.css'
import { useLocation,useNavigate } from "react-router-dom";
import { useEffect, } from "react";
import iou from "./dummy.jpg"


const Login = () => {
    var UserId="kumar@gmail.com"
    var Pwd="Kumar@123"
    const Navigate=useNavigate();
    const { pathname } = useLocation();
        useEffect(() => {
        window.scrollTo(0, 0);
         }, [pathname]);

    const [show,setShow]=useState("password")
    const [icon,setIcon]=useState(<i class="fa-solid fa-eye"></i>)
    const PaswordState=()=>{
        if(show==="password"){
            setShow("text")
            setIcon(<i class="fa-sharp fa-solid fa-eye-slash"></i>)
        }
        else{
            setShow("password")
            setIcon(<i class="fa-solid fa-eye"></i>)
        }
    }

    const[LoginId,setLoginId]=useState("")
    const[Password,setPassword]=useState("")

    function LoginFun(e){
        e.preventDefault()
        if(LoginId===UserId&&Password===Pwd){
            localStorage.setItem("Status","Loggedin")
            localStorage.setItem("UserId",LoginId)
            return Navigate(-1)
        }
        else{
            alert("invalid user data")
        }
    }


    return (
        <div>
            <Header />
            <MenuBar />
           <div className="Login-image">
                <h1 className="Login-heading">SignIn</h1>
            </div>
            <div className="Signup-card">
                <div className="Form-div">
                    <form className="Form" onSubmit={LoginFun}>
                        <div className="Signup-title">
                            <h1 className="Signup-heading">LogIn to ABC</h1>
                            <p className="Signup-ptag">Welcome! Login using data given while register</p>
                        </div>
                        <label className="Signup-Label">Email</label>
                        <input className="Signup-Input" onChange={(e)=>setLoginId(e.target.value)}/>
                        <label className="Signup-Label">Password</label>
                        <div className="Signup-Pwdbox">
                        <input type={show} className="Signup-InputPwd" onChange={(e)=>setPassword(e.target.value)}/>
                        <div onClick={PaswordState}>{icon}</div>
                        </div>
                        <div className="Login-sec2">
                            <div className="Remember">
                                <input type="checkbox"/>
                                <p className="Remember-ptag">Remember Me</p>
                            </div>
                            <p className="Forget">Forget Password</p>
                        </div>
                        <button className="Button-Signup">Login</button>
                        <div className="Already">
                            <p className="Primary-Signup">Don't have account</p>
                            <Link to="/Signup"><p className="Secondary-Signup">Signup</p></Link>
                        </div>

                    </form>
                </div>
                <div className="Image-div">

                </div>
            </div>
            <Footer/>
            <End/>
        </div>
    )
}

const Signup=()=>{
    const { pathname } = useLocation();
        useEffect(() => {
        window.scrollTo(0, 0);
         }, [pathname]);
    return(
        <div>
            <Header />
            <MenuBar />
            <div className="Login-image">
                <h1 className="Login-heading">Register</h1>
            </div>
            <div className="Signup-card">
                <div className="Form-div">
                    <form className="Form">
                        <div className="Signup-title">
                            <h1 className="Signup-heading">SignUp to ABC</h1>
                            <p className="Signup-ptag">Welcome! Register with valid data</p>
                        </div>
                        <label className="Signup-Label">Name</label>
                        <input className="Signup-Input"/>
                        <label className="Signup-Label">Email</label>
                        <input className="Signup-Input"/>
                        <label className="Signup-Label">Password</label>
                        <input type="password" className="Signup-Input"/>
                        <button className="Button-Signup">Create Account</button>
                        <div className="Already">
                            <p className="Primary-Signup">Already have an account</p>
                            <Link to="/Login"><p className="Secondary-Signup">Login</p></Link>
                        </div>

                    </form>
                </div>
                <div className="Image-div">

                </div>
            </div>
            <Footer/>
            <End/>
        </div>
    )
}


const Provider=()=>{
    return(
        <div>
        <Header />
        <MenuBar />
        <div className="Login-image">
            <h1 className="Login-heading">Register as Provider</h1>
        </div>
        <div className="Signup-card">
            <div className="Form-div">
                <form className="Form-Provider">
                    <div className="Signup-title">
                        <h1 className="Signup-heading">Register as provider in ABC</h1>
                        <p className="Signup-ptag">Welcome! Register with valid data</p>
                    </div>
                    <label className="Join-Label">Name</label>
                    <input className="Signup-Input"/>
                    <label className="Join-Label">Email</label>
                    <input className="Signup-Input"/>
                    <label className="Join-Label">Password</label>
                    <input type="password" className="Signup-Input"/>
                    <select className="Service-type" placeholder="">
                        <option>Name of service</option>
                        <option>Car wash</option>
                        <option>Car Service</option>
                        <option>Ac Repair</option>
                        <option>Pest control</option>
                        <option>Painting</option>
                        <option>Cleaning</option>
                        <option>Plumbing</option>
                    </select>
                    <button className="Button-Signup">Submit</button>
                    <div className="Already">
                        <p className="Primary-Signup">Already have an account</p>
                        <Link to="/Login"><p className="Secondary-Signup">Login</p></Link>
                    </div>

                </form>
            </div>
            <div className="Image-divProvider">

            </div>
        </div>
        <Footer/>
        <End/>
    </div>
    )
}


const AdminLogin = () => {

    var Status=localStorage.getItem("Status")
    const[Email,setEmail]=useState("")
    const[Password,setPassword]=useState("")

    const adminEmail="admin@abc.com"
    const adminpassword="Admin@123"
    const { pathname } = useLocation();
        useEffect(() => {
        window.scrollTo(0, 0);
         }, [pathname]);

    const [show,setShow]=useState("password")
    const [icon,setIcon]=useState(<i class="fa-solid fa-eye"></i>)
    const PaswordState=()=>{
        if(show==="password"){
            setShow("text")
            setIcon(<i class="fa-sharp fa-solid fa-eye-slash"></i>)
        }
        else{
            setShow("password")
            setIcon(<i class="fa-solid fa-eye"></i>)
        }
    }


    function FormSubmit(e){
        e.preventDefault()
        if(Status==="Loggedin"){
            alert('already Logged in with a user account')
        }
        if(Email===adminEmail&&Password===adminpassword&&Status!="Loggedin"){
            localStorage.setItem("adminemail",Email)
            localStorage.setItem("adminpassword",Password)
            window.location.href='/Admin'
        }
        else{
            alert("incorrect data")
        }
    }
    return (
        <div>
            <Header />
            <MenuBar />
           <div className="Login-image">
                <h1 className="Login-heading">Admin Login</h1>
            </div>
            <div className="Signup-card">
                <div className="Form-div">
                    <form className="Form-Admin" onSubmit={FormSubmit}>
                        <div className="Signup-title">
                            <h1 className="Signup-heading">LogIn to ABC</h1>
                            <p className="Signup-ptag">Welcome! Login using data given while register</p>
                        </div>
                        <label className="AdminSignup-Label">Email</label>
                        <input className="Signup-Input" onChange={(e)=>setEmail(e.target.value)}/>
                        <label className="AdminSignup-Label">Password</label>
                        <div className="Signup-Pwdbox" onChange={(e)=>setPassword(e.target.value)}>
                        <input type={show} className="Signup-InputPwd"/>
                        <div onClick={PaswordState}>{icon}</div>
                        </div>
                        <div className="Login-sec2">
                            <div className="Remember">
                                <input type="checkbox"/>
                                <p className="Remember-ptag">Remember Me</p>
                            </div>
                            <p className="Forget">Forget Password</p>
                        </div>
                        <button className="Button-Signup" type="submit">Login</button>
                        <div className="Already">
                            <p className="Primary-Signup">Don't have account</p>
                            <Link to="/Signup"><p className="Secondary-Signup">Signup</p></Link>
                        </div>

                    </form>
                </div>
                <div className="Image-divAdmin">

                </div>
            </div>
            <Footer/>
            <End/>
        </div>
    )
}


export {Login,Signup,Provider,AdminLogin} 