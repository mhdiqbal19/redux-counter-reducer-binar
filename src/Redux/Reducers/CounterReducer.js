// import { INCREMENT, DECREMENT, RESET  } from "../Types";
import TYPES from "../Types";

const initialState = {
    total: 0,
};

const counterReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case TYPES.INCREMENT:
            return {
                ...state,
                total: action.payload
            }

        case TYPES.DECREMENT:
            return {
                ...state,
                total: action.payload
            }

        case TYPES.RESET: 
            return {
                ...state,
                total: action.payload
            }

            
        default:
            return state;
    }
}

export default counterReducer;