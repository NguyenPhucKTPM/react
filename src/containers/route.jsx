import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import ProductApp from './ProductApp';
import DSSanPhamNB from "./DSSanPhamNB";
import SanPham from "./SanPham";

import ListUser from "./users/ListUser";
import UpdateUser from "./users/UpdateUser";
import DeleteUser from "./users/DeleteUser";

import ListCategory from "./categories/ListCategory";
import UpdateCategory from "./categories/UpdateCategory";
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
                path: 'list-user',
                element: <ListUser />,
            },
            {
                path: 'update-user/:userName',
                element:(
                    <UpdateUser />
                )
            },
            {
                path: 'update-user/:userName',
                element:(
                    <DeleteUser />
                )
            },
            {
                path: 'list-category',
                element:(
                    <ListCategory />
                )
            },
            {
                path: 'update-category/:idDanhMuc',
                element:(
                    <UpdateCategory />
                )
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