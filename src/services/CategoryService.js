import axios from "./customizeAxios"

const getAllCategory = async () =>{
    return await axios.get('/list-category')
}
const insertCategory = async (tenDanhMuc) =>{
    return await axios.post('/create-new-category', {tenDanhMuc});
}
const detailCategory = async(idDanhMuc) =>{
    return await axios.get(`/detail-category/${idDanhMuc}`)
}
const updateCategory = async(tenDanhMuc,idDanhMuc) =>{
    return await axios.post(`/update-category/${idDanhMuc}`, {
        tenDanhMuc,
        // idDanhMuc,
    });
}
const deleteCategory = async(idDanhMuc) =>{
    return await axios.delete(`/delete-category/${idDanhMuc}`)
}
export default{
    getAllCategory,
    insertCategory,
    detailCategory,
    updateCategory,
    deleteCategory,
}