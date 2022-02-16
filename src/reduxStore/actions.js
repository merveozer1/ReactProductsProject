const ADD_SELECT_PRODUCT = "ADD_SELECT_PRODUCT";

export const addCategoryList = (productId) => ({
    type: ADD_SELECT_PRODUCT,
    payload: productId,

})
const users = (user = [], action) => {
    switch (action.type) {
        case ADD_SELECT_PRODUCT:
            return user.selectedList.selectedCategory.every((film) => film.id !== action.payload.id) ?
                { ...user, selectedList: { selectedCategory: [...user.selectedList.selectedCategory, action.payload], totalCount: user.selectedList.totalCount + 1 } } : user

        default:
            return user
    }
}
export { users }
