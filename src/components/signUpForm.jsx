import React,{useState} from 'react'

const SignUpForm = () => {
    const [firstname,setFirstName]=useState("")
    const [lastname,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")

    const [firstnameError,setFirstNameError]=useState(true)
    const [lastnameError,setLastNameError]=useState(true)
    const [emailError,setEmailError]=useState(true)
    const [passwordError,setPasswordError]=useState(true)
    const [confirmPasswordError,setConfirmPasswordError]=useState(true)

    const handleFirstName=(e)=>{
        setFirstName(e.target.value)
        if (e.target.value.length < 2){
        setFirstNameError("FIRST NAME MUST ATLEAST BE TWO CHARACTERS LONG!!")
        }else{
            setFirstNameError("")
        }
    }
    const handleLastName=(e)=>{
        setLastNameError(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
        if (e.target.value.length < 5){
            setEmailError("EMAIL MUST AT LEAST BE 5 CHARACTERS LONG!!")
        }else{
            setEmailError("")
        }
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
        if (e.target.value.length < 8){
            setPasswordError("PASSWORD MUST BE AT LEAST 8 CHARACTERS LONG!!")
        }else{
            setPasswordError("")
        }
    }
    const handleConfirmPassword=(e)=>{
        setConfirmPasswordError(e.target.value)

    }
    const submitUser=(e)=>{
        e.preventDefault();
        const newUser={firstname,lastname,email,password,confirmPassword}
        console.log(newUser)
    }
    return (
    <div className="card mt-5 justify-content='center'">
        <div className="card-body mt-3">
        <form onSubmit={submitUser}className='center'>
            <label>First Name: </label>
            <input type="text" onChange={handleFirstName}/>
            <p style ={{color:"red"}}>{firstnameError}</p>

            <label>Last Name: </label>
            <input type="text" onChange={handleLastName}/>

            <label>Email: </label>
            <input type="text" onChange={handleEmail}/>
            <p style={{color:"red"}}>{emailError}</p>

            <label>Password: </label>
            <input type="password" onChange={handlePassword}/>
            <p style={{color:"red"}}>{passwordError}</p>

            <label>Confirm Password: </label>
            <input type="password" onChange={handleConfirmPassword}/>

            <input type="submit" value="submit"/>
        </form>
        </div>
    </div>
    )
}

export default SignUpForm