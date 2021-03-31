import React,{ useState } from "react"
import UserService from"./UserService"
// import "../styling/style.css"
import "bootstrap/dist/css/bootstrap.min.css"

const AddUser=()=> {

    const initializeUser={
        id:null,
        firstName:'',
        lastName:'',
        city:'',
        email:''
    }
    
    const [user,setUser] = useState(initializeUser);

    const [submitted,setSubmitted] = useState(false);

    
    function onChange(event){
    const {name,value}=event.target

    setUser({...user,[name]:value})
    console.log(user.firstName)
    }

    const saveUser=()=>{
        var userData={
                firstName:user.firstName,
                lastName: user.lastName,
                city: user.city,
                email: user.email,
                status:500
                }
        UserService.saveUser(userData)
        .then((response) => {
            console.log(response.data)
            if(response.data.status == 200){
                setSubmitted(true)
            }
        })

    }

    return(
        <div className="submit-form">{
            submitted ? (
                <div>
                    <h1>User Added Successfully......</h1>
                </div>
            ):(
                 <div>
                    <div>
                        <lable htmlFor="firstName">FirstName:</lable>
                        <input type="text"
                            className="form-control"
                            name="firstName"
                            value={user.firstName}
                            onChange={onChange}/>
                    </div>
                    <div>
                        <lable htmlFor="lastName">LastName:</lable>
                        <input type="text"
                            className="form-control"
                            name="lastName"
                            value={user.lastName}
                            onChange={onChange}/>
                    </div>
                    <div>
                        <lable htmlFor="city">city:</lable>
                        <input type="text"
                            className="form-control"
                            name="city"
                            value={user.city}
                            onChange={onChange}/>
                    </div>
                    <div>
                        <lable htmlFor="email">email:</lable>
                        <input type="email"
                            className="form-control"
                            name="email"
                            value={user.email}
                            onChange={onChange}/>
                    </div>
                    <button type="button" className="btn btn-success" onClick={saveUser}>Add User</button>
                </div>
        
            )}
            </div>  
          )}

export default AddUser;