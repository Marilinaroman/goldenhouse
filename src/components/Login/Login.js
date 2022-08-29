import { useContext, useState, useEffect } from "react";
import { getRegister, newRegister } from "../../service/firebase/firestore";
import { useNavigate } from "react-router-dom";

import './Login.css'
import AlertContext from "../../context/Alert";


const Login = () =>{
    const {setNotification} = useContext(AlertContext)
    const navigate = useNavigate()
    const [register, setRegister ] = useState()
    const [users, setUsers] = useState({
        email:'',
        password:''
    })
    const handleChangeLogin = (e) =>{
        setUsers({
            ...users,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    
    useEffect(()=>{
        getRegister().then(res =>{
            setRegister(res)
        }).catch(error=>{
            console.log(error)
        })
    })

    const loginUser = async () =>{   

        const findUser = await register.filter(e => e.email === users.email)

        if (findUser.length === 0){ 
            setNotification('success', 'You are welcome to Golden House')
            setTimeout(() => {
                navigate('/Checkout')
            }, 2000)
            return newRegister(users)
        }
        
        findUser.forEach(e => {
            if (e.email === users.email && e.password === users.password){
                navigate('/Checkout')
            } 
            if(e.email === users.email && e.password !== users.password){
                setNotification('danger', `Your email or password are wrong`)
            }
        })
    }

    return (
            <div className='container'>
                <h1>Login Account</h1>
                <form className='formLogin' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label >Email address</label>
                        <input
                            name='email'
                            value={users.email}
                            onChange={handleChangeLogin}
                            type='email'
                            placeholder='email@example.com'
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            name='password'
                            value={users.password}
                            onChange={handleChangeLogin}
                            type={"password"}
                            placeholder='password'
                        />
                    </div>
                    <button className='button' onClick={loginUser}>Login</button>
                </form>
            </div>
        );
}

export default Login