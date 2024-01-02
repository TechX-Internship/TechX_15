import React from 'react'

const ButtonOutline = ({title, css}) => {
    return (
        <button className={`${css} btn-outline-primary outfit flex items-center text-white`}><span>{title}</span> <i className="ri-arrow-right-double-line ml-1"></i></button>
    )
}

export default ButtonOutline