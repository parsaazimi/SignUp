import { ToastContainer } from 'react-toastify';
import { notify } from './toast';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { validate } from './validate';


const SignUp = () => {

    const [touched, isTouched] = useState({})
    const [errors, setErrors] = useState({})
    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        isAccepted:false
    })

    const changeHandler = (event=>{
        if(event.target.name === 'isAccepted'){
            setData({...data, [event.target.name]:event.target.checked})
        }else{
            setData({...data, [event.target.name]:event.target.value})
        }
    })

    useEffect(()=>{
        setErrors(validate(data))
    }, [data, touched])

    const focusHandler = event=>{
        isTouched({...touched, [event.target.name]:true})
    }

    const submitHandler = event=>{
        event.preventDefault()
        if(!Object.keys(errors).length){
            notify("successfully signed Up", 'success')
        }else{
            notify("invalid inputs")
            isTouched({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted: true
            })
        }
    }
    
    return (
        <div>
            <form onSubmit={submitHandler} >
                <div>
                    <label>Name</label>
                    <input type='text' name='name' value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type='password' name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div>
                    <label>I accept terms of privacy policy</label>
                    <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <a href='#'>Login</a>
                <button type='submit' onClick={notify}>Sign Up</button>
                </form>
                <ToastContainer />
        </div>
    );
};

export default SignUp;