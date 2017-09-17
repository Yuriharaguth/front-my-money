import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import DashBoardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashBoard: DashBoardReducer,
    tab: TabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer
})

export default rootReducer