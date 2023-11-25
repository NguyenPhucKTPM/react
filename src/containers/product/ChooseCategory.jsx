import React, { useEffect, useState } from 'react'
import CategoryService from '../../services/CategoryService';

export default function ChooseCategory() {
    const [listCategory, setlistCategory] = useState([]);

    const getListCategory = async () => {
        let res = await CategoryService.getAllCategory();
        if (res && res.data) {
            setlistCategory(res.data);
            console.log(res.data);
        }
    }

    useEffect(() => {
        getListCategory();
    }, []);

    return (
        <>
            {listCategory &&
                listCategory.map((item, index) => (
                    <option key={index} value={String(item.idDanhMuc)}>
                        {item.tenDanhMuc}
                    </option>
                ))
            }
        </>
    );
}
