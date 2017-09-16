import axios from 'axios'
const BASE_URL = 'http://localhost:300/api'

export function getList() {
    const request = axions.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}