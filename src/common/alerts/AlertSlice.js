import {createSlice} from "@reduxjs/toolkit"

const alertSlice = createSlice({
    name: "alerts",
    initialState: {
        items: []
    },
    reducers: {
        generateAlert: (state, action) => {
            const id = state.items.length + 1
            state.items.push({ id, ...action.payload})
        },
        removeAlert: (state, action) => {
            state.items = state.items.filter(alerts => alerts.id !== action.payload)
        }
    }
})

export const {generateAlert, removeAlert} = alertSlice.actions
export default alertSlice.reducer