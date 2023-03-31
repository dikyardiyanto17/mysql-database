import { FetchingCurrentUserRole, FetchingProducts } from "../action/actionType"

const initialState = {
    products: [],
    role: ''
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case FetchingProducts:
            return { ...state, products: action.payload }
        case FetchingCurrentUserRole:
            return {...state, role: action.payload}
        default:
            return state
    }
}
