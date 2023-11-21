import axios from "./customizeAxios"

const getAllUser = async () =>{
    return await axios.get('/list-user')
}
const insertUser = async (userName,password,rePassword,fullName,address,sex,email,groupID) =>{
    return await axios.post('/create-new-user', {
        userName,
        password,
        rePassword,
        fullName,
        address,
        sex,
        email,
        groupID,
    });
}
const detailUser = async(userName) =>{
    return await axios.get(`/detail-user/${userName}`)
}
const updateUser = async(userName,password,fullName,address, sex, email,groupID) =>{
    return await axios.post('/update-user/', {
        userName,
        password,
        fullName,
        address,
        sex,
        email,
        groupID,
    });
}
const deleteUser = async(userName) =>{
    return await axios.delete(`/delete-user/${userName}`)
}
export default{
    getAllUser,
    insertUser,
    detailUser,
    updateUser,
    deleteUser,
}