import {createSlice} from "@reduxjs/toolkit"

const alertSlice = createSlice({
    name: "alerts",
    initialState: {
        items: []
    },
    reducers: {
        generateAlert: (state, action) => {
            const id = Date.now()
            state.items.push({ id: id, ...action.payload})
        },
        removeAlert: (state, action) => {
            state.items = state.items.filter(alerts => alerts.id !== action.payload)
        }
    }
})

export const {generateAlert, removeAlert} = alertSlice.actions
export default alertSlice.reducer