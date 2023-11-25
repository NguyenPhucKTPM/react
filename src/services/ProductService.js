import axios from "./customizeAxios"

const getAllProduct = async () => {
    return await axios.get('/list-product')
}
const insertProduct = async (tenSanPham, idDanhMuc, gia, khuyenMai, hinhAnh, noiBat, moTa) => {
    return await axios.post('/create-new-product',
        {
            tenSanPham,
            idDanhMuc,
            gia,
            khuyenMai,
            hinhAnh,
            noiBat,
            moTa
        }
    )
}
const detailProduct = async (idSanPham) => {
    return await axios.get(`/detail-product/${idSanPham}`)
}
const updateProduct = async (tenSanPham,idDanhMuc,gia,khuyenMai,hinhAnh,noiBat,moTa,idSanPham) => {
    return await axios.post(`/update-product/${idSanPham}`,
        {
            tenSanPham,
            idDanhMuc,
            gia,
            khuyenMai,
            hinhAnh,
            noiBat,
            moTa
        }
    )
}
const deleteProduct = async (idSanPham) => {
    return await axios.delete(`/delete-product/${idSanPham}`)
}
const getProductByCategory = async (idDanhMuc) => {
    return await axios.get(`/category-product/${idDanhMuc}`)
}
export default {
    getAllProduct,
    insertProduct,
    detailProduct,
    updateProduct,
    deleteProduct,
    getProductByCategory,
}