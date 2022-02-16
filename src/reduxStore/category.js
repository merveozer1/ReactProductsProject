import { v4 as uuidv4 } from "uuid";

//Action Types
const ADD_CATEGORY = "ADD_CATEGORY"
const REMOVE_CATEGORY = "REMOVE_CATEGORY"



//Action Creators
const addCategory = (title) => ({
    type: ADD_CATEGORY,
    payload: { id: uuidv4(), title }
})
const removeCategory = (id) => ({
    type: REMOVE_CATEGORY,
    payload: id,
})


//Reducer
const categoryReducer = (category = [], action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return [action.payload, ...category]
        case REMOVE_CATEGORY:
            return category.filter((item) => item.id !== action.payload); //filtrele bu olmayanları getir
        default:
            return category;
    }
};

export default categoryReducer;

export {addCategory, removeCategory};