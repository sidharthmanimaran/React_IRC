import { useState } from "react";

const Temp=()=>{

    const [data,setData]=useState({
        username:'',
        password:''
    })
    const change=(e)=>{
        setData({...data,[e.target.id]:e.target.value})
        console.log(data)
    }
    const submit=(e)=>{
        e.preventDefault()
        console.log("final data")
        console.log(data)
    }
    return(
        <>
        <form onSubmit={submit}>
        <input type="text" placeholder="username" id="username" onChange={change}/>
        <input type="password" placeholder="password" id="password" onChange={change}/>
        <input type="submit" value="Login"/>
        </form>
        </>
    )
}
export default Temp;