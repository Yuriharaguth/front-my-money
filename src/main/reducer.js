import { combineReducers } from 'redux'

import DashBoardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashBoard: DashBoardReducer
})

export default rootReducer