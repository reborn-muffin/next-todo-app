import axios from "axios"
import {setTasks} from "./taskSlice"
import handleError from "../common/handleAxiosError"

export const loadTasks = () => {
    return async (dispatch) => {
        axios.get("http://localhost:3000/tasks").then(response => {
            dispatch(setTasks(response?.data))
        }).catch((error) => handleError(error.message))
    }
}

export const createTodo = (title, description, overdueDate) => {
    return (dispatch) => {
        axios.post("http://localhost:3000/tasks", {title, description, overdueDate}).then(() => {
            dispatch(loadTasks())
        }).catch((error) => handleError(error.message))
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3000/tasks/${id}`).then(() => {
            dispatch(loadTasks())
        }).catch((error) => handleError(error.message))
    }
}

export const editTodo = (todo) => {
    return (dispatch) => {
        axios.patch(`http://localhost:3000/tasks/${todo.id}`, todo).then(() => {
            dispatch(loadTasks())
        }).catch((error) => handleError(error.message))
    }
}

export const changeTodoStatus = (todoId, status) => {
    return (dispatch) => {
        axios.patch(`http://localhost:3000/tasks/${todoId}`, { isCompleted: status}).then(() => {
            dispatch(loadTasks())
        }).catch((error) => handleError(error.message))
    }
}