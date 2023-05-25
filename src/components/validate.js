// export const validate = data=>{
//     const errors ={}
//     if(!data.name.trim()){
//         errors.name = 'Name required'
//     }else{
//         delete errors.name
//     }
//     if(!data.email){
//         errors.email = 'Email is required'
//     } else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email)){
//         errors.email = 'Email address is invalid'
//     }else{
//         delete errors.email
//     }
//     if(!data.password){
//         errors.password = 'Password is required'
//     }else if(data.password.length < 6){
//         errors.password = 'Password needs to be 6 character or more'
//     }else{
//         delete errors.password
//     }
//     if(!data.confirmPassword){
//         errors.confirmPassword = 'Confirm the password'
//     }else if(data.password!==data.confirmPassword){
//         errors.confirmPassword = 'Password do not match'
//     }else{
//         delete errors.confirmPassword
//     }
//     if(data.isAccepted){
//         delete errors.isAccepted
//     }else{
//         errors.isAccepted = 'Accept our regulations'
//     }
//     return errors;


// }
export const validate = data =>{
    const errors = {}    
    if(!data.name.trim()){
        errors.name = 'Name is required'
    }else{
        delete errors.name
    }

    if(!data.email){
        errors.email = 'Email is required'
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)){
        errors.email = 'Email is invalid'
    }else{
        delete errors.email
    }

    if(!data.password){
        errors.password = 'Password is required'
    }else if(data.password.length < 6){
        errors.password = 'Password must be at least 6 charachters'
    }else{
        delete errors.password
    }

    if(!data.confirmPassword){
        errors.confirmPassword = 'Password needs to be confirmed'
    }else if(data.password !== data.confirmPassword){
        errors.confirmPassword = "Your password doesn't match"
    }else{
        delete errors.confirmPassword
    }

    if(data.isAccepted){
        delete errors.isAccepted
    }else{
        errors.isAccepted = 'You should accept our regulations'
    }
    return errors
}