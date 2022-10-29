import {configureStore} from "@reduxjs/toolkit"
import taskReducer from "../Task/taskSlice"

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})