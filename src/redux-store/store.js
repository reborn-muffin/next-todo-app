import {configureStore} from "@reduxjs/toolkit"
import taskReducer from "../taskList/taskSlice"
import alertReducer from "../common/alerts/AlertSlice"

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        alerts: alertReducer
    }
})