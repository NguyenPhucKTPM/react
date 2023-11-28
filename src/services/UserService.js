import axios from "./customizeAxios"

const getAllUser = async () => {
    return await axios.get('/list-user')
}
const insertUser = async (userName, password, rePassword, fullName, address, sex, email, groupID) => {
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
const detailUser = async (userName) => {
    return await axios.get(`/detail-user/${userName}`)
}
const updateUser = async (fullName, address, sex, email, groupID, userName) => {
    return await axios.post(`/update-user/${userName}`, {
        fullName,
        address,
        sex,
        email,
        groupID,
    });
}
const deleteUser = async (userName) => {
    return await axios.delete(`/delete-user/${userName}`)
}
const Login = async (userName, password) => {
    return await axios.post(`/login`, { userName, password })
}
const Logout = async () => {
    return await axios.get(`/logout`)
}
const getMyInfo = async () => {
    return await axios.get('/detail-my-info')
}
const updateMyInfo = async (fullName, address, sex, email) => {
    return await axios.post('/update-my-info', {
        fullName, address, sex, email,
    })
}
const changePass = async (curPass, password, rePassword) => {
    return await axios.post('/change-pass', {
        curPass, password, rePassword
    })
}
const signup = async ( userName, password, rePassword, fullName, address, sex, email) => {
    return await axios.post('/signup', {
        userName, password, rePassword, fullName, address, sex, email
    })
}
export default {
    getAllUser,
    insertUser,
    detailUser,
    updateUser,
    deleteUser,
    Login,
    Logout,
    getMyInfo,
    updateMyInfo,
    changePass,
    signup
}