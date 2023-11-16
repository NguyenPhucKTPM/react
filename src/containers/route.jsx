import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import ProductApp from './ProductApp';
import DSSanPhamNB from "./DSSanPhamNB";
import SanPham from "./SanPham";
import ListUser from "./users/ListUser";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: (
                    <DSSanPhamNB />
                ),
            },
            {
                path: 'sanpham/:iddm',
                element: (
                    <DSSanPhamNB />
                ),
            },
            {
                path: 'sanpham/chitiet/:idsp',
                element: (
                    <SanPham sanpham={null} />
                ),
            },
            {
                path: 'themsanpham',
                element: <ProductApp />,
            },
            {
                path: 'dangnhap',
                element: <Login />,
            },
            {
                path: 'a',
                element: <ListUser />,
            },
            {
                path: '*',
                element: (
                    <div>
                        Không tìm thấy
                    </div>
                ),
            },
        ],
    }
]);
export default router;