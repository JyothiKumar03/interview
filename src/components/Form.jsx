import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
const Form = () => {
    // const navigate = useNavigate();
    // const [formData, setFormData] = useState({
    //     'email' : '',
    //     'password' : '',
    //     'name' : '',
    //     'city' : ''
    // })
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [name,setName] = useState(null)
    const [city,setCity] = useState(null)
    const [prev,setPrev] = useState(false);
    const [next,setNext] = useState(false);
    const handlePrevious = (e) => {
        // navigate('/page2')
        e.preventDefault()
        setPrev(!prev);
        setNext(!next);
    }
    const handleNext = (e) => {
        // navigate('/page2')
        e.preventDefault()
        setNext(!next);
        setPrev(!prev);
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        const formData = {
                'email' : email,
                'password' : password,
                'name' : name,
                'city' : city
            }
        console.log(formData)
    }
    
  return (
    <div>
        <form >
        <button onClick={handlePrevious}>Previous</button>
            {!prev ? (
                <div>  
                <span> Email : 
                <input type='email' value={email} placeholder={email} onChange={(e)=>{setEmail(e.target.value)}} required />
                </span>
                <span> Password : 
                <input type='password' value={password} placeholder={password} onChange={(e)=>{setPassword(e.target.value)}} required />
                </span>
                </div>
            ) : (
                <div>
                <span> Name : 
                <input type='text' value={name} placeholder={name} onChange={(e)=>{setName(e.target.value)}} required />
                </span>
                <span> City : 
                <input type='text' value={city} placeholder={city} onChange={(e)=>{setCity(e.target.value)}} required />
                </span>
                <button onClick={handleSubmit} >Submit Form</button>
                </div>
            )}
            <button onClick={handleNext}>Next</button>
            {/* <button onClick={handlePrevious}>Previous</button>
            <input type='email' value='email' placeholder='Enter email' required />
            <input type='password' value='password' placeholder='Enter password' required />
            <button onClick={handleNext}>Next</button> */}
        </form>
    </div>
  )
}

export default Form