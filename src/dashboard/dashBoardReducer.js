const INITIAL_STATE = {summary: {summary: {credit: 0, debt: 0}}}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'BILLING_SUMARY_FETCHED':
             return { ...state, summary: action.payload.data }
        default:
            return state;
    }
}