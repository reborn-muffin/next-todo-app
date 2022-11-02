import {configureStore} from "@reduxjs/toolkit"
import taskReducer from "../taskList/taskSlice"

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})