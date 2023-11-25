import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import ProductService from '../../services/ProductService';
import ChooseCategory from './ChooseCategory';

export default function UpdateProduct() {
    // lay thong tin san pham can sua
    let { idSanPham } = useParams();
    const [detailProduct, setDetailProduct] = useState(null);
    useEffect(() => {
        const getDetailProduct = async () => {
            const res = await ProductService.detailProduct(idSanPham)
            console.log(res.data)
            if (res && res.data) {
                setDetailProduct(res.data)
                // console.log(res.data)
            }
        }
        getDetailProduct()
    }, [idSanPham])
    const [input, setInput] = useState({
        tenSanPham: '',
        idDanhMuc: '',
        gia: '',
        khuyenMai: '',
        hinhAnh: '',
        noiBat: '',
        moTa: '',
    });
    useEffect(() => {
        // Đảm bảo rằng giá trị của input chỉ được cập nhật khi detailProduct thay đổi
        setInput((prevInput) => ({
            ...prevInput,
            tenSanPham: detailProduct?.tenSanPham || '',
            idDanhMuc: detailProduct?.idDanhMuc || '',
            gia: detailProduct?.gia || '',
            khuyenMai: detailProduct?.khuyenMai || '',
            noiBat: detailProduct?.noiBat || '',
            moTa: detailProduct?.moTa || '',

        }));
    }, [detailProduct]);
    const handleInputChange = (e) => {
        const { name, files, value } = e.target;
        // CAT BO C:\\fakepath\\ cho file hinh
        if (name === 'hinhAnh' && files.length > 0) {
            const filePath = value;
            const fileName = filePath.replace("C:\\fakepath\\", "");

            setInput((prevProps) => ({
                ...prevProps,
                [name]: fileName,
            }));
        } else {
            setInput((prevProps) => ({
                ...prevProps,
                [name]: value,
            }));
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ProductService.updateProduct(
                input.tenSanPham,
                input.idDanhMuc,
                input.gia,
                input.khuyenMai,
                input.hinhAnh,
                input.noiBat,
                input.moTa,
                idSanPham
            );
            toast.success(`Cập nhật sản phẩm thành công với mã sản phẩm: ${idSanPham}`)
        } catch (error) {
            console.log(input)
            console.error('Lỗi từ server:', error.response.data.message);
        }
        console.log(input)
    }
    return (
        <>
            <div className='container w-50'>
                <h2 className='my-4'>Cập nhật sản phẩm: {detailProduct?.tenSanPham}</h2>
                <div class="mb-3 mt-3">
                    <label htmlFor="tenSanPham" class="form-label">Tên sản phẩm:</label>
                    <input type="text"
                        id="tenSanPham"
                        name="tenSanPham"
                        class="form-control"
                        value={input.tenSanPham}
                        onChange={handleInputChange}
                    />
                </div>

                <div class="mt-3 mb-3">
                    <label htmlFor="idDanhMuc" class="form-label">Chọn danh mục:</label>
                    <select class="form-select" id='idDanhMuc' aria-label="idDanhMuc" name="idDanhMuc" value={input.idDanhMuc} onChange={handleInputChange}>
                        <option selected value={input.groupID}>{detailProduct?.tenDanhMuc}</option>
                        <ChooseCategory />
                    </select>
                </div>
                <div class="mb-3 mt-3">
                    <label htmlFor="gia" class="form-label">Giá:</label>
                    <input type="text"
                        id="gia"
                        name="gia"
                        class="form-control"
                        value={input.gia}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="mb-3 mt-3">
                    <label htmlFor="khuyenMai" class="form-label">Khuyến mãi:</label>
                    <input type="text"
                        id="khuyenMai"
                        name="khuyenMai"
                        class="form-control"
                        value={input.khuyenMai}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mt-3 mb-3">
                    <label htmlFor="hinhAnh" class="form-label">Hình ảnh:</label>
                    <input
                        type="file"
                        id='hinhAnh'
                        name="hinhAnh"
                        class="form-control"
                        onChange={handleInputChange}
                    />
                    <div className='mt-3'><img src={`/imageProduct/${detailProduct?.hinhAnh}`} width={80} alt="" /></div>
                </div>
                <div className='mt-3 mb-3'>
                    <label htmlFor="gruopID" class="form-label">Chọn nổi bật:</label>
                    <select
                        className="form-select"
                        id="noiBat"
                        aria-label="noiBat"
                        name="noiBat"
                        value={input.noiBat}
                        onChange={handleInputChange}
                    >
                        <option selected value={input.noiBat}>{detailProduct?.noiBat == 1 ? 'Nổi bật' : 'Không nổi bật'}</option>
                        <option value="1">Nổi bật</option>
                        <option value="0">Không nổi bật</option>
                    </select>
                </div>
                <div class="mb-3 mt-3">
                    <label htmlFor="moTa" class="form-label">Mô tả:</label>
                    <textarea
                        id="moTa"
                        name="moTa"
                        class="form-control"
                        rows="3"
                        value={input.moTa}
                        onChange={handleInputChange}
                    />
                </div>
                <div className=' mt-3 mb-3 d-flex justify-content-end'>
                    <button onClick={handleSubmit} className='btn btn-primary'>Sửa</button>
                </div>
            </div>
        </>
    )
}
