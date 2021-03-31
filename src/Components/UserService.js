import http from './http-call'

const saveUser = (userData) => {

    console.log(userData)
    
    return http.post("/savedata",userData)
    
}
const getAll = (data)=>{
    // console.log(data)
    return http.get("/getusers")
}

export default {
   saveUser,getAll
}