import React from 'react'
import {Button} from './Navbar'
import { Link } from 'react-router-dom'

const Input = ({placeholder}) => {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <span style={{fontSize:"1.5em"}}> {placeholder}: </span>
            <input type="text" style={{height: "40px", width: "250px", border:"2px solid black", borderRadius: "10px"}}/>
        </div>
    )
}

export const LoginPage = () => {
    return (
        <div style={{display:'flex', flexDirection:"row"}}>
            <div style={{width: "50%",height :"100vh", textAlign:"center", borderRight:"2px solid black"}}> some</div>
            <div style={{display:"flex",flexDirection:"column", alignSelf:"center", margin:"auto"}}>
                <Input placeholder="Userame"/>
                <Input placeholder="Password"/>
                <Button text="Login"/>
                <span>Don't have an account?</span>
                <Link to="/signup" >Signup</Link>
            </div>
            
        </div>
    )
}
