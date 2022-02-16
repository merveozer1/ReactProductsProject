import { createContext, useState } from "react";

const CheckboxContext = createContext();


function CheckboxContextProvider(props) {

    const [isProductChecked, setProductChecked] = useState(true)


    return (
        <CheckboxContext.Provider value={{isProductChecked, setProductChecked}}>
            {props.children}
        </CheckboxContext.Provider>
    )
}

export {CheckboxContext, CheckboxContextProvider}
