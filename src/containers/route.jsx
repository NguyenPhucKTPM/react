import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Login from "./Login";
// import ProductApp from './ProductApp';
// import DSSanPhamNB from "./DSSanPhamNB";
// import SanPham from "./SanPham";

import ListUser from "./users/ListUser";
import UpdateUser from "./users/UpdateUser";
import DetailUser from "./users/DetailUser"
import DetailInfo from "./users/DetailInfo";
import ChangeInfo from "./users/ChangeInfo";
import ChangePass from "./users/ChangePass";
import Login from "./users/Login";
import Register from "./users/Register";

import ListCategory from "./categories/ListCategory";
import UpdateCategory from "./categories/UpdateCategory";
import DetailCategory from "./categories/DetailCategory";

import ListProduct from "./product/ListProduct";
import UpdateProduct from "./product/UpdateProduct";
import DetailProduct from "./product/DetailProduct";
import ViewProduct from "./product/ViewProduct";
import ViewDetailProduct from "./product/ViewDetailProduct";
import OutStandingProduct from "./product/OutStandingProduct";

import Layout from "./layouts/Layout";
import { AppContext } from "../context/AppProvider";
import { useContext } from "react";

function ProtectedRoute({ allowedRoles }) {
    const { currentUser } = useContext(AppContext);
    if (!currentUser.isAuthenticated || !allowedRoles.includes(currentUser.role)) {
        return <Navigate to='/' />
    }
    return <Outlet />
}
function RejectedRoute() {
    const { currentUser } = useContext(AppContext);
    if (currentUser.isAuthenticated) {
        return <Navigate to='/' />
    }
    return <Outlet />
}
const router = createBrowserRouter([
    {

        children: [
            {
                path: '/',
                element:
                    <Layout>
                        <OutStandingProduct />
                    </Layout>,
            },
            {
                path: 'category-product/:idDanhMuc',
                element:
                    <Layout>
                        <ViewProduct />
                    </Layout>,
            },
            {
                path: 'view-detail-product/:idSanPham',
                element:
                    <Layout>
                        <ViewDetailProduct />
                    </Layout>,
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
    },
    //ca user lan admin
    {
        element: <ProtectedRoute allowedRoles={['admin','user']} />,
        children: [
            {
                path: 'my-infomation',
                element:
                    <Layout>
                        <DetailInfo />
                    </Layout>,
            },
            {
                path: 'update-my-infomation',
                element:
                    <Layout>
                        <ChangeInfo />
                    </Layout>,
            },
            {
                path: 'change-password',
                element:
                    <Layout>
                        <ChangePass />
                    </Layout>,
            },
        ]
    },
    //Route Admin
    {
        element: <ProtectedRoute allowedRoles={['admin']} />,
        children: [
            //quan li chuc nang module user
            {
                path: 'list-user',
                element:
                    <Layout>
                        <ListUser />
                    </Layout>,
            },
            {
                path: 'update-user/:userName',
                element:
                    <Layout>
                        <UpdateUser />
                    </Layout>,

            },
            {
                path: 'detail-user/:userName',
                element:
                    <Layout>
                        <DetailUser />
                    </Layout>,

            },

            ///quan li chuc nang module category
            {
                path: 'list-category',
                element:
                    <Layout>
                        <ListCategory />
                    </Layout>,

            },
            {
                path: 'update-category/:idDanhMuc',
                element:
                    <Layout>
                        <UpdateCategory />
                    </Layout>,

            },
            {
                path: 'detail-category/:idDanhMuc',
                element:
                    <Layout>
                        <DetailCategory />
                    </Layout>,

            },

            //quan li chuc nang module product
            {
                path: 'list-product',
                element:
                    <Layout>
                        <ListProduct />
                    </Layout>,

            },
            {
                path: 'update-product/:idSanPham',
                element:
                    <Layout>
                        <UpdateProduct />
                    </Layout>,

            },
            {
                path: 'detail-product/:idSanPham',
                element:
                    <Layout>
                        <DetailProduct />
                    </Layout>,

            },
        ]
    },
    // khi o trang thai dang nhap se ko vao day dc
    {
        element: <RejectedRoute />,
        children: [
            {
                path: 'login',
                element:
                    <Layout>
                        <Login />
                    </Layout>,
            },
            {
                path: 'register',
                element:
                    <Layout>
                        <Register />
                    </Layout>,
            },
        ]
    },

]);
export default router;