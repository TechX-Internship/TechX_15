import React from 'react'

const ButtonOutline = ({title}) => {
    return (
        <button className="btn-outline-primary outfit flex items-center text-white"><span>{title}</span> <i className="ri-arrow-right-double-line ml-1"></i></button>
    )
}

export default ButtonOutline