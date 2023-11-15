import React from 'react'

export default function Button(
    {
        user,
        type,
    }
) {
    function handleClick(user, type) {
        console.log('type', type);
        console.log('thông tin', user);
    }
    return (
        <button
            type={type || 'submit'}
            onClick={(e) =>
                handleClick(
                    user,
                    type || 'submit',
                )
            }
        >
            Nhấn
        </button>

    )
}
