import axios from "axios"

const getAllUser = async () =>{
    return await axios.get('http://localhost:3000/api/v1/list-user')
}
export default{
    getAllUser
}