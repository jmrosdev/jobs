import { 
    FETCH_COMPANIES,
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANIES_ERROR
 } from '../actions/types';

const initialState = {
    companies: {},
    error: null,
    loading: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_COMPANIES: 
            return {
                ...state,
                loading: true
            }
        case FETCH_COMPANIES_SUCCESS:  
            return {
                ...state,
                companies: action.payload,
                loading: false
            }        
        case FETCH_COMPANIES_ERROR:
            return {
                ...state,
                error: true,
                loading: false
            }
        }        
    return state;
}