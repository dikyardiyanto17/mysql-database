import { FetchingCategories, FetchingCurrentUserRole, FetchingProducts } from "../action/actionType"

const initialState = {
    products: [],
    categories: [],
    role: ''
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case FetchingProducts:
            return { ...state, products: action.payload }
        case FetchingCurrentUserRole:
            return {...state, role: action.payload}
        case FetchingCategories:
            return {...state, categories: action.payload}
        default:
            return state
    }
}
