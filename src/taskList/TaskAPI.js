import axios from "axios"
import {setTasks} from "./taskSlice"

export const loadTasks = () => {
    return async (dispatch) => {
        axios.get("http://localhost:3000/tasks").then(response => {
            dispatch(setTasks(response.data))
        })
    }
}