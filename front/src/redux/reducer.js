import { ADD_FAVORITE, DELETE_FAVORITE } from "./actions-types";

const initialState = {
    myFavorites: []
}


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...payload.myFavorites, payload]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== payload)
            }

        default:
            return { ...state };
    }
}