import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ product, index }) {
  return (
    <div key={index} className='col-sm-12 col-md-6 col-lg-3 ftco-animate d-flex fadeInUp ftco-animated'>
      <div className='product d-flex flex-column'>
        <Link to={`/view-detail-product/${product?.idSanPham}`} className="img-prod">
          <img src={`/imageProduct/${product?.hinhAnh}`} className="img-fluid bg-transparent" alt="" />
          {product?.khuyenMai >= 1 && (
            <span className="status">{product?.khuyenMai} % OFF</span>
          )}
        </Link>
        <div className='overlay'></div>
        <div className="text py-3 pb-4 px-3">
          <h3><Link to={`/view-detail-product/${product?.idSanPham}`}>{product?.tenSanPham}</Link></h3>
          <div className="pricing">
            <p className='price'>
              <span className="mr-2 price-dc">{product?.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
              <span className="price-sale"> {(product.gia - (product.gia * (product.khuyenMai / 100))).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
            </p>
          </div>
          <p className="bottom-area d-flex px-3">
            <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Thêm giỏ hàng<i className="ion-ios-add ml-1"></i></span></a>
            <a href="#" className="buy-now text-center py-2">Mua Ngay<span><i className="ion-ios-cart ml-1"></i></span></a>
          </p>
        </div>
      </div>
    </div>
  );
}
