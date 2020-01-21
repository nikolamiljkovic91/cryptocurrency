import * as actionTypes from '../actions/actionTypes'

const initialState = {
    BTCUSD: {},
    BTCEUR: {},
    ETHEUR: {},
    ETHUSD: {},
    EOSUSD: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CONNECTION_START:
            return{
                ...state,
            }
        case actionTypes.CONNECTION_FAIL:
            return{
                ...state,
            }
        case actionTypes.CONNECTION_SUCCESS_BTCUSD:
            return{
                ...state,
                BTCUSD: action.response,
            }
        case actionTypes.CONNECTION_SUCCESS_BTCEUR:
            return{
                ...state,
                BTCEUR: action.response,
            }
            case actionTypes.CONNECTION_SUCCESS_ETHUSD:
            return{
                ...state,
                ETHUSD: action.response,
            }
            case actionTypes.CONNECTION_SUCCESS_ETHEUR:
            return{
                ...state,
                ETHEUR: action.response,
            }
            case actionTypes.CONNECTION_SUCCESS_EOSUSD:
            return{
                ...state,
                EOSUSD: action.response,
            }
            default:
                return state
    }
}

export default reducer