import React, { useContext } from 'react'
import { CheckboxContext } from '../context/CheckboxContext'

function Checkbox(props) {

    const { isProductChecked, setProductChecked} = useContext(CheckboxContext)
    // const setIsChecked = props.name === "SRM" ? setIsSrmChecked : setIsPhChecked
    // const isChecked = props.name === "SRM" ? isSrmChecked : isPhChecked

    return (
        <>
            <input className={`form-check-input border-3 border-warning fs-3 ${!isProductChecked ? "bg-warning": "bg-dark"}`} checked={!isProductChecked} type="checkbox" id="flexCheckDefault"
                onClick={() => {
                    setProductChecked(!isProductChecked)
                }} ></input>
            <label className='ms-3 text-light fs-3' htmlFor="">{props.name}</label>
        </>
    )
}
    
export default Checkbox
